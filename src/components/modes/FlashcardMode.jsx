import { useState, useEffect, useRef, useCallback } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ChevronLeft,
  ThumbsUp,
  ThumbsDown,
  Home,
  Shuffle,
  Image,
  AlertTriangle
} from 'lucide-react';
import { Button, Card, ProgressBar, Modal } from '../common';
import { useProgress } from '../../contexts/ProgressContext';
import {
  getSmartQuestions,
  getCategoryById
} from '../../data/questions';
import { getFigureById } from '../../data/figures/figureIndex';

const FlashcardMode = () => {
  const [searchParams] = useSearchParams();
  const categoryId = searchParams.get('category');

  const { startSession, endSession } = useProgress();

  const [cards, setCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [knownCards, setKnownCards] = useState([]);
  const [needPracticeCards, setNeedPracticeCards] = useState([]);
  const [isComplete, setIsComplete] = useState(false);
  const [showFigure, setShowFigure] = useState(false);

  // Zoom and pan state for figure modal
  const imgRef = useRef(null);
  const containerRef = useRef(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const zoomRef = useRef(1);
  const panRef = useRef({ x: 0, y: 0 });

  const currentCard = cards[currentIndex];
  const progress = cards.length > 0 ? ((currentIndex + 1) / cards.length) * 100 : 0;
  const category = categoryId ? getCategoryById(categoryId) : null;
  const figure = currentCard?.figureRef ? getFigureById(currentCard.figureRef) : null;

  useEffect(() => {
    // Use smart question selection to prevent duplicates
    // Struggle questions (wrong 3+ times) can appear up to 2x for reinforcement
    const cards = getSmartQuestions(30, categoryId);
    setCards(cards);
    setCurrentIndex(0);
    setIsFlipped(false);
    setKnownCards([]);
    setNeedPracticeCards([]);
    setIsComplete(false);

    startSession('flashcards', categoryId);
  }, [categoryId, startSession]);

  const handleFlip = () => setIsFlipped(!isFlipped);

  const handleKnowIt = () => {
    setKnownCards(prev => [...prev, currentCard.id]);
    goToNext();
  };

  const handleNeedPractice = () => {
    setNeedPracticeCards(prev => [...prev, currentCard.id]);
    goToNext();
  };

  const goToNext = () => {
    setIsFlipped(false);
    if (currentIndex < cards.length - 1) {
      setTimeout(() => setCurrentIndex(prev => prev + 1), 100);
    } else {
      setIsComplete(true);
      endSession();
    }
  };

  const handleRestart = () => {
    // Get fresh smart questions for the new session
    const newCards = getSmartQuestions(30, categoryId);
    setCards(newCards);
    setCurrentIndex(0);
    setIsFlipped(false);
    setKnownCards([]);
    setNeedPracticeCards([]);
    setIsComplete(false);
    startSession('flashcards', categoryId);
  };

  const handlePracticeWeakCards = () => {
    const weakCards = cards.filter(c => needPracticeCards.includes(c.id));
    if (weakCards.length > 0) {
      setCards(weakCards.sort(() => Math.random() - 0.5));
      setCurrentIndex(0);
      setIsFlipped(false);
      setKnownCards([]);
      setNeedPracticeCards([]);
      setIsComplete(false);
      startSession('flashcards', categoryId);
    }
  };

  // Figure modal zoom/pan handlers
  const getVisibleImageSize = useCallback((img) => {
    const elementWidth = img.offsetWidth;
    const elementHeight = img.offsetHeight;
    const naturalWidth = img.naturalWidth || elementWidth;
    const naturalHeight = img.naturalHeight || elementHeight;
    const naturalAspect = naturalWidth / naturalHeight;
    const elementAspect = elementWidth / elementHeight;
    if (naturalAspect > elementAspect) {
      return { width: elementWidth, height: elementWidth / naturalAspect };
    } else {
      return { width: elementHeight * naturalAspect, height: elementHeight };
    }
  }, []);

  const handleWheelZoom = useCallback((e) => {
    e.preventDefault();
    if (!imgRef.current || !containerRef.current) return;
    const img = imgRef.current;
    const container = containerRef.current;
    const containerRect = container.getBoundingClientRect();
    const currentZoom = zoomRef.current;
    const currentPan = panRef.current;
    const { width: visibleWidth, height: visibleHeight } = getVisibleImageSize(img);
    const containerCenterX = containerRect.left + containerRect.width / 2;
    const containerCenterY = containerRect.top + containerRect.height / 2;
    const cursorX = e.clientX - containerCenterX;
    const cursorY = e.clientY - containerCenterY;
    const delta = e.deltaY > 0 ? -0.3 : 0.3;
    const newZoom = Math.min(Math.max(currentZoom + delta, 1), 5);
    if (newZoom === currentZoom) return;
    let newPanX, newPanY;
    if (newZoom === 1) {
      newPanX = 0;
      newPanY = 0;
    } else {
      const imagePointX = (cursorX - currentPan.x) / currentZoom;
      const imagePointY = (cursorY - currentPan.y) / currentZoom;
      newPanX = cursorX - imagePointX * newZoom;
      newPanY = cursorY - imagePointY * newZoom;
      const scaledWidth = visibleWidth * newZoom;
      const scaledHeight = visibleHeight * newZoom;
      const maxPanX = Math.max(0, (scaledWidth - containerRect.width) / 2);
      const maxPanY = Math.max(0, (scaledHeight - containerRect.height) / 2);
      newPanX = Math.max(-maxPanX, Math.min(maxPanX, newPanX));
      newPanY = Math.max(-maxPanY, Math.min(maxPanY, newPanY));
    }
    zoomRef.current = newZoom;
    panRef.current = { x: newPanX, y: newPanY };
    setZoomLevel(newZoom);
    setPanOffset({ x: newPanX, y: newPanY });
  }, [getVisibleImageSize]);

  const handleDragStart = useCallback((e) => {
    if (zoomRef.current <= 1) return;
    e.preventDefault();
    setIsDragging(true);
    setDragStart({ x: e.clientX - panRef.current.x, y: e.clientY - panRef.current.y });
  }, []);

  const handleDragMove = useCallback((e) => {
    if (!isDragging || zoomRef.current <= 1 || !imgRef.current || !containerRef.current) return;
    const img = imgRef.current;
    const container = containerRef.current;
    const containerRect = container.getBoundingClientRect();
    const currentZoom = zoomRef.current;
    const { width: visibleWidth, height: visibleHeight } = getVisibleImageSize(img);
    const scaledWidth = visibleWidth * currentZoom;
    const scaledHeight = visibleHeight * currentZoom;
    const maxPanX = Math.max(0, (scaledWidth - containerRect.width) / 2);
    const maxPanY = Math.max(0, (scaledHeight - containerRect.height) / 2);
    let newX = e.clientX - dragStart.x;
    let newY = e.clientY - dragStart.y;
    newX = Math.max(-maxPanX, Math.min(maxPanX, newX));
    newY = Math.max(-maxPanY, Math.min(maxPanY, newY));
    panRef.current = { x: newX, y: newY };
    setPanOffset({ x: newX, y: newY });
  }, [isDragging, dragStart, getVisibleImageSize]);

  const handleDragEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleCloseModal = useCallback(() => {
    setShowFigure(false);
    zoomRef.current = 1;
    panRef.current = { x: 0, y: 0 };
    setZoomLevel(1);
    setPanOffset({ x: 0, y: 0 });
    setIsDragging(false);
  }, []);

  // Attach wheel listener for zoom
  useEffect(() => {
    const container = containerRef.current;
    if (!showFigure || !container) return;
    container.addEventListener('wheel', handleWheelZoom, { passive: false });
    return () => {
      container.removeEventListener('wheel', handleWheelZoom);
    };
  }, [showFigure, handleWheelZoom]);

  if (cards.length === 0) {
    return (
      <div className="container-app py-16 text-center">
        <h1 className="text-2xl font-display font-bold text-gray-900 mb-4">
          No Flashcards Available
        </h1>
        <Link to="/categories">
          <Button icon={Home}>Back to Categories</Button>
        </Link>
      </div>
    );
  }

  if (isComplete) {
    return (
      <div className="container-app py-8 max-w-2xl">
        <Card className="text-center">
          <div className="w-20 h-20 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-6">
            <ThumbsUp className="w-10 h-10 text-green-500" />
          </div>

          <h1 className="text-3xl font-display font-bold text-gray-900 mb-2">
            Deck Complete!
          </h1>
          <p className="text-gray-600 mb-6">
            You reviewed all {cards.length} flashcards
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-green-50 rounded-xl p-4">
              <p className="text-2xl font-bold text-green-600">{knownCards.length}</p>
              <p className="text-sm text-gray-500">Know It</p>
            </div>
            <div className="bg-orange-50 rounded-xl p-4">
              <p className="text-2xl font-bold text-orange-600">{needPracticeCards.length}</p>
              <p className="text-sm text-gray-500">Need Practice</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            {needPracticeCards.length > 0 && (
              <Button variant="accent" onClick={handlePracticeWeakCards}>
                Practice Weak Cards ({needPracticeCards.length})
              </Button>
            )}
            <Button variant="outline" icon={Shuffle} onClick={handleRestart}>
              Start Over
            </Button>
            <Link to="/categories">
              <Button icon={Home}>Categories</Button>
            </Link>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="container-app py-8 max-w-2xl">
      <div className="flex items-center justify-between mb-6">
        <Link to="/categories" className="flex items-center text-gray-500 hover:text-gray-700">
          <ChevronLeft className="w-5 h-5" />
          <span className="text-sm">Back</span>
        </Link>
        <div className="text-center">
          <p className="text-sm text-gray-500">
            {category ? category.shortName : 'All Categories'} Flashcards
          </p>
          <p className="text-sm font-medium text-gray-900">
            Card {currentIndex + 1} of {cards.length}
          </p>
        </div>
        <div className="w-16" />
      </div>

      <ProgressBar value={progress} className="mb-6" />

      {/* Figure displayed outside the flippable card - clickable to enlarge */}
      {figure && (
        <div className="mb-4 flex justify-center">
          {figure.placeholder ? (
            <div className="bg-gray-100 rounded-xl p-4 text-center">
              <Image className="w-10 h-10 mx-auto text-gray-400 mb-2" />
              <p className="text-sm text-gray-600 mb-1">{figure.title}</p>
              <p className="text-xs text-gray-500">{figure.instructions}</p>
            </div>
          ) : (
            <div
              className="rounded-xl overflow-hidden cursor-pointer"
              onClick={() => setShowFigure(true)}
            >
              <img
                src={`${import.meta.env.BASE_URL}${figure.imagePath.replace(/^\//, '')}`}
                alt={figure.title}
                className="h-auto object-contain max-h-48"
              />
              <p className="text-xs text-gray-500 text-center py-1">
                {figure.title} - Tap to enlarge
              </p>
            </div>
          )}
        </div>
      )}

      <div
        className="perspective-1000 mb-6 cursor-pointer"
        onClick={handleFlip}
        style={{ perspective: '1000px' }}
      >
        <motion.div
          className="relative w-full min-h-[300px]"
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.4 }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <Card
            className={`absolute inset-0 flex flex-col items-center justify-center text-center overflow-y-auto`}
            padding="lg"
            style={{
              backfaceVisibility: 'hidden',
              visibility: isFlipped ? 'hidden' : 'visible'
            }}
          >
            {/* Frequently Missed Badge */}
            {currentCard?.isStruggleQuestion && (
              <div className="flex items-center gap-1.5 mb-3 px-2.5 py-1 bg-amber-50 text-amber-700 rounded-full text-xs font-medium">
                <AlertTriangle className="w-3.5 h-3.5" />
                Frequently Missed
              </div>
            )}
            <p className="text-xs text-gray-400 uppercase tracking-wide mb-4">Question</p>
            <p className="text-lg text-gray-900">{currentCard?.question}</p>
            <p className="text-sm text-blue-600 mt-6">Tap to reveal answer</p>
          </Card>

          <Card
            className="absolute inset-0 flex flex-col"
            padding="lg"
            style={{
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
              visibility: isFlipped ? 'visible' : 'hidden'
            }}
          >
            <p className="text-xs text-gray-400 uppercase tracking-wide mb-2">Answer</p>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold">
                {currentCard?.correctAnswer}
              </span>
              <span className="text-gray-900 font-medium">
                {currentCard?.options.find(o => o.id === currentCard?.correctAnswer)?.text}
              </span>
            </div>
            <div className="flex-1 overflow-y-auto">
              <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">Explanation</p>
              <p className="text-sm text-gray-700">{currentCard?.explanation}</p>
            </div>
          </Card>
        </motion.div>
      </div>

      {isFlipped && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center gap-4"
        >
          <Button
            variant="outline"
            size="lg"
            onClick={handleNeedPractice}
            className="flex-1 max-w-[200px] border-orange-300 text-orange-600 hover:bg-orange-50"
          >
            <ThumbsDown className="w-5 h-5 mr-2" />
            Need Practice
          </Button>
          <Button
            variant="success"
            size="lg"
            onClick={handleKnowIt}
            className="flex-1 max-w-[200px]"
          >
            <ThumbsUp className="w-5 h-5 mr-2" />
            Know It
          </Button>
        </motion.div>
      )}

      {!isFlipped && (
        <p className="text-center text-sm text-gray-500">
          Click the card to flip it
        </p>
      )}

      <div className="flex justify-center gap-6 mt-6 text-sm">
        <span className="text-green-600">Know It: {knownCards.length}</span>
        <span className="text-orange-600">Need Practice: {needPracticeCards.length}</span>
      </div>

      {/* Figure Modal for zooming */}
      <Modal
        isOpen={showFigure}
        onClose={handleCloseModal}
        title={figure?.title}
        size="5xl"
        noScroll
      >
        {figure && !figure.placeholder && (
          <div>
            <div
              ref={containerRef}
              className={`relative rounded-xl overflow-hidden select-none ${zoomLevel > 1 ? (isDragging ? 'cursor-grabbing' : 'cursor-grab') : 'cursor-default'}`}
              onMouseLeave={handleDragEnd}
              onMouseMove={handleDragMove}
              onMouseDown={handleDragStart}
              onMouseUp={handleDragEnd}
            >
              <img
                ref={imgRef}
                src={`${import.meta.env.BASE_URL}${figure.imagePath.replace(/^\//, '')}`}
                alt={figure.title}
                draggable={false}
                className="w-full h-auto max-h-[calc(90vh-18rem)] object-contain rounded-xl"
                style={{
                  transform: `scale(${zoomLevel}) translate(${panOffset.x / zoomLevel}px, ${panOffset.y / zoomLevel}px)`,
                  transformOrigin: 'center center',
                }}
              />
            </div>
            <div className="flex items-center justify-between mt-2 flex-wrap gap-2">
              <p className="text-xs text-gray-500">
                {zoomLevel > 1
                  ? `Zoom: ${Math.round(zoomLevel * 100)}% - Scroll to zoom, drag to pan`
                  : 'Scroll to zoom'
                }
              </p>
              {zoomLevel > 1 && (
                <button
                  onClick={() => {
                    zoomRef.current = 1;
                    panRef.current = { x: 0, y: 0 };
                    setZoomLevel(1);
                    setPanOffset({ x: 0, y: 0 });
                  }}
                  className="text-xs px-3 py-1 rounded-full bg-orange-100 text-orange-700 hover:bg-orange-200 transition-colors"
                >
                  Reset Zoom
                </button>
              )}
            </div>
            <p className="text-sm text-gray-500 mt-2">{figure.description}</p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default FlashcardMode;
