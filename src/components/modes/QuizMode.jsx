import { useState, useEffect, useCallback, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  Lightbulb,
  CheckCircle,
  XCircle,
  RotateCcw,
  Home,
  Image,
  AlertTriangle
} from 'lucide-react';
import { Button, Card, ProgressBar, Modal } from '../common';
import { useProgress } from '../../contexts/ProgressContext';
import { useUser } from '../../contexts/UserContext';
import { useToast } from '../common/Toast';
import {
  getSmartQuestions,
  getCategoryById
} from '../../data/questions';
import { getFigureById } from '../../data/figures/figureIndex';

// Helper to highlight key terms in explanations (ALL CAPS words only)
const highlightKeyTerms = (text) => {
  if (!text) return null;

  // Pattern matches individual ALL CAPS words (2+ letters)
  const pattern = /\b[A-Z]{2,}\b/g;

  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = pattern.exec(text)) !== null) {
    // Add text before the match
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }

    // Add the highlighted match
    parts.push(
      <span key={match.index} className="font-semibold text-blue-600">
        {match[0]}
      </span>
    );

    lastIndex = pattern.lastIndex;
  }

  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? parts : text;
};

const QuizMode = () => {
  const [searchParams] = useSearchParams();
  const categoryId = searchParams.get('category');
  const toast = useToast();

  const { recordAnswer, startSession, endSession } = useProgress();
  const { checkTimeAchievements } = useUser();

  // Quiz state
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [showFigure, setShowFigure] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [results, setResults] = useState([]);

  // Zoom and pan state
  const imgRef = useRef(null);
  const containerRef = useRef(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // Refs to track current values (avoids stale closures)
  const zoomRef = useRef(1);
  const panRef = useRef({ x: 0, y: 0 });

  // Current question
  const currentQuestion = questions[currentIndex];
  const isAnswered = selectedAnswer !== null;
  const isCorrect = selectedAnswer === currentQuestion?.correctAnswer;
  const progress = questions.length > 0 ? ((currentIndex + 1) / questions.length) * 100 : 0;

  // Category info
  const category = categoryId ? getCategoryById(categoryId) : null;

  // Initialize quiz
  useEffect(() => {
    // Use smart question selection to prevent duplicates
    // Struggle questions (wrong 3+ times) can appear up to 2x for reinforcement
    const quizQuestions = getSmartQuestions(20, categoryId);
    setQuestions(quizQuestions);
    setCurrentIndex(0);
    setResults([]);
    setIsComplete(false);

    // Start session
    startSession('quiz', categoryId);

    // Check time achievements
    checkTimeAchievements();
  }, [categoryId, startSession, checkTimeAchievements]);

  // Handle answer selection
  const handleSelectAnswer = useCallback((answerId) => {
    if (isAnswered) return;

    setSelectedAnswer(answerId);
    const correct = answerId === currentQuestion.correctAnswer;

    // Record the answer
    recordAnswer(currentQuestion.id, currentQuestion.category, correct);

    // Add to results
    setResults(prev => [...prev, {
      questionId: currentQuestion.id,
      correct,
      selectedAnswer: answerId,
      correctAnswer: currentQuestion.correctAnswer
    }]);

    // Show feedback toast
    if (correct) {
      toast.success('Correct! +10 XP');
    } else {
      toast.error('Incorrect. Review the explanation.');
    }

    // Auto-show explanation after answering
    setTimeout(() => setShowExplanation(true), 500);
  }, [isAnswered, currentQuestion, recordAnswer, toast]);

  // Handle next question
  const handleNext = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
      setShowHint(false);
    } else {
      // Quiz complete
      setIsComplete(true);
      endSession();
    }
  }, [currentIndex, questions.length, endSession]);

  // Calculate actual visible image dimensions (accounting for object-contain letterboxing)
  const getVisibleImageSize = useCallback((img) => {
    const elementWidth = img.offsetWidth;
    const elementHeight = img.offsetHeight;
    const naturalWidth = img.naturalWidth || elementWidth;
    const naturalHeight = img.naturalHeight || elementHeight;

    const naturalAspect = naturalWidth / naturalHeight;
    const elementAspect = elementWidth / elementHeight;

    if (naturalAspect > elementAspect) {
      // Image is wider - constrained by width, letterboxed top/bottom
      return { width: elementWidth, height: elementWidth / naturalAspect };
    } else {
      // Image is taller - constrained by height, letterboxed left/right
      return { width: elementHeight * naturalAspect, height: elementHeight };
    }
  }, []);

  // Handle scroll wheel zoom - always zooms toward current cursor position
  const handleWheelZoom = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!imgRef.current || !containerRef.current) return;

    const img = imgRef.current;
    const container = containerRef.current;
    const containerRect = container.getBoundingClientRect();

    // Current values from refs (always up-to-date)
    const currentZoom = zoomRef.current;
    const currentPan = panRef.current;

    // Get actual visible image dimensions (excluding letterbox)
    const { width: visibleWidth, height: visibleHeight } = getVisibleImageSize(img);

    // Use CONTAINER center as fixed reference point (doesn't change with zoom)
    // The transform origin is at image center which aligns with container center
    const containerCenterX = containerRect.left + containerRect.width / 2;
    const containerCenterY = containerRect.top + containerRect.height / 2;

    // Cursor position relative to container center (stable reference)
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
      // The point under cursor in image coordinates (relative to image center)
      const imagePointX = (cursorX - currentPan.x) / currentZoom;
      const imagePointY = (cursorY - currentPan.y) / currentZoom;

      // After zoom, keep the same image point under cursor
      newPanX = cursorX - imagePointX * newZoom;
      newPanY = cursorY - imagePointY * newZoom;

      // Calculate bounds using VISIBLE image dimensions (not element dimensions)
      const scaledWidth = visibleWidth * newZoom;
      const scaledHeight = visibleHeight * newZoom;
      const maxPanX = Math.max(0, (scaledWidth - containerRect.width) / 2);
      const maxPanY = Math.max(0, (scaledHeight - containerRect.height) / 2);

      // Clamp to bounds
      newPanX = Math.max(-maxPanX, Math.min(maxPanX, newPanX));
      newPanY = Math.max(-maxPanY, Math.min(maxPanY, newPanY));
    }

    // Update refs immediately
    zoomRef.current = newZoom;
    panRef.current = { x: newPanX, y: newPanY };

    // Update state
    setZoomLevel(newZoom);
    setPanOffset({ x: newPanX, y: newPanY });
  }, [getVisibleImageSize]);

  // Handle drag start for panning
  const handleDragStart = useCallback((e) => {
    if (zoomRef.current <= 1) return;
    e.preventDefault();
    setIsDragging(true);
    setDragStart({ x: e.clientX - panRef.current.x, y: e.clientY - panRef.current.y });
  }, []);

  // Handle drag move for panning
  const handleDragMove = useCallback((e) => {
    if (!isDragging || zoomRef.current <= 1 || !imgRef.current || !containerRef.current) return;

    const img = imgRef.current;
    const container = containerRef.current;
    const containerRect = container.getBoundingClientRect();
    const currentZoom = zoomRef.current;

    // Use visible image dimensions (excluding letterbox)
    const { width: visibleWidth, height: visibleHeight } = getVisibleImageSize(img);

    // Calculate max pan limits
    const scaledWidth = visibleWidth * currentZoom;
    const scaledHeight = visibleHeight * currentZoom;
    const maxPanX = Math.max(0, (scaledWidth - containerRect.width) / 2);
    const maxPanY = Math.max(0, (scaledHeight - containerRect.height) / 2);

    let newX = e.clientX - dragStart.x;
    let newY = e.clientY - dragStart.y;

    // Clamp pan offset to limits
    newX = Math.max(-maxPanX, Math.min(maxPanX, newX));
    newY = Math.max(-maxPanY, Math.min(maxPanY, newY));

    // Update ref and state
    panRef.current = { x: newX, y: newY };
    setPanOffset({ x: newX, y: newY });
  }, [isDragging, dragStart, getVisibleImageSize]);

  // Handle drag end
  const handleDragEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  // Reset zoom when modal closes
  const handleCloseModal = useCallback(() => {
    setShowFigure(false);
    zoomRef.current = 1;
    panRef.current = { x: 0, y: 0 };
    setZoomLevel(1);
    setPanOffset({ x: 0, y: 0 });
    setIsDragging(false);
  }, []);

  // Attach wheel listener with passive: false to allow preventDefault
  useEffect(() => {
    const container = containerRef.current;
    if (!showFigure || !container) return;

    container.addEventListener('wheel', handleWheelZoom, { passive: false });
    return () => {
      container.removeEventListener('wheel', handleWheelZoom);
    };
  }, [showFigure, handleWheelZoom]);

  // Handle restart
  const handleRestart = () => {
    // Get fresh smart questions for the new session
    const quizQuestions = getSmartQuestions(20, categoryId);
    setQuestions(quizQuestions);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setShowHint(false);
    setResults([]);
    setIsComplete(false);
    startSession('quiz', categoryId);
  };

  // If no questions available
  if (questions.length === 0) {
    return (
      <div className="container-app py-16 text-center">
        <h1 className="text-2xl font-display font-bold text-gray-900 mb-4">
          No Questions Available
        </h1>
        <p className="text-gray-600 mb-8">
          {categoryId
            ? `Questions for this category are coming soon.`
            : 'No questions found in the database.'}
        </p>
        <Link to="/categories">
          <Button icon={Home}>Back to Categories</Button>
        </Link>
      </div>
    );
  }

  // Quiz Complete Screen
  if (isComplete) {
    const correctCount = results.filter(r => r.correct).length;
    const accuracy = Math.round((correctCount / results.length) * 100);
    const missedQuestions = results.filter(r => !r.correct);

    return (
      <div className="container-app py-8 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="text-center">
            <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 ${
              accuracy >= 70 ? 'bg-green-100' : 'bg-orange-100'
            }`}>
              {accuracy >= 70 ? (
                <CheckCircle className={`w-10 h-10 ${accuracy >= 70 ? 'text-green-500' : 'text-orange-500'}`} />
              ) : (
                <RotateCcw className="w-10 h-10 text-orange-500" />
              )}
            </div>

            <h1 className="text-3xl font-display font-bold text-gray-900 mb-2">
              Quiz Complete!
            </h1>
            <p className="text-gray-600 mb-6">
              {accuracy >= 70 ? 'Great job! You passed!' : 'Keep practicing to improve!'}
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="bg-gray-50 rounded-xl p-4">
                <p className="text-2xl font-bold text-gray-900">{accuracy}%</p>
                <p className="text-sm text-gray-500">Accuracy</p>
              </div>
              <div className="bg-green-50 rounded-xl p-4">
                <p className="text-2xl font-bold text-green-600">{correctCount}</p>
                <p className="text-sm text-gray-500">Correct</p>
              </div>
              <div className="bg-red-50 rounded-xl p-4">
                <p className="text-2xl font-bold text-red-600">{results.length - correctCount}</p>
                <p className="text-sm text-gray-500">Incorrect</p>
              </div>
            </div>

            {missedQuestions.length > 0 && (
              <div className="text-left mb-8">
                <h3 className="font-semibold text-gray-900 mb-3">Review Missed Questions</h3>
                <div className="space-y-2 max-h-60 overflow-y-auto">
                  {missedQuestions.map((result, idx) => {
                    const q = questions.find(q => q.id === result.questionId);
                    return (
                      <div key={idx} className="p-3 bg-red-50 rounded-lg text-sm">
                        <p className="text-gray-900 mb-1">{q?.question}</p>
                        <p className="text-red-600">
                          Your answer: {result.selectedAnswer} | Correct: {result.correctAnswer}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            <div className="flex gap-3 justify-center">
              <Button variant="outline" icon={RotateCcw} onClick={handleRestart}>
                Try Again
              </Button>
              <Link to="/categories">
                <Button icon={Home}>Back to Categories</Button>
              </Link>
            </div>
          </Card>
        </motion.div>
      </div>
    );
  }

  // Get figure info if question has one
  const figure = currentQuestion?.figureRef ? getFigureById(currentQuestion.figureRef) : null;

  return (
    <div className="container-app py-8 max-w-3xl min-h-[calc(100vh-4rem)] flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <Link to="/categories" className="flex items-center text-gray-500 hover:text-gray-700">
          <ChevronLeft className="w-5 h-5" />
          <span className="text-sm">Back</span>
        </Link>
        <div className="text-center">
          <p className="text-sm text-gray-500">
            {category ? category.shortName : 'All Categories'}
          </p>
          <p className="text-sm font-medium text-gray-900">
            Question {currentIndex + 1} of {questions.length}
          </p>
        </div>
        <div className="w-16" /> {/* Spacer for alignment */}
      </div>

      {/* Progress Bar */}
      <ProgressBar value={progress} className="mb-6" />

      {/* Question Card */}
      <div className="grow">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.2 }}
        >
          <Card className="mb-6">
            {/* Figure Display */}
            {figure && (
              <div className="mb-4">
                {figure.placeholder ? (
                  <div className="bg-gray-100 rounded-xl p-4 text-center">
                    <Image className="w-12 h-12 mx-auto text-gray-400 mb-2" />
                    <p className="text-sm text-gray-600 mb-2">{figure.title}</p>
                    <p className="text-xs text-gray-500">{figure.instructions}</p>
                  </div>
                ) : (
                  <div
                    className="rounded-xl overflow-hidden border border-gray-200 cursor-pointer"
                    onClick={() => setShowFigure(true)}
                  >
                    <img
                      src={`${import.meta.env.BASE_URL}${figure.imagePath.replace(/^\//, '')}`}
                      alt={figure.title}
                      draggable={false}
                      className="w-full h-auto object-contain bg-white"
                    />
                    <p className="text-xs text-gray-500 text-center py-1 bg-gray-50">
                      {figure.title} - Click to enlarge
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Frequently Missed Badge */}
            {currentQuestion?.isStruggleQuestion && (
              <div className="flex items-center gap-1.5 mb-3 px-2.5 py-1 bg-amber-50 text-amber-700 rounded-full w-fit text-xs font-medium">
                <AlertTriangle className="w-3.5 h-3.5" />
                Frequently Missed
              </div>
            )}

            {/* Question Text */}
            <h2 className="text-lg font-medium text-gray-900 mb-6">
              {currentQuestion?.question}
            </h2>

            {/* Answer Options */}
            <div className="space-y-3">
              {currentQuestion?.options.map((option) => {
                const isSelected = selectedAnswer === option.id;
                const isCorrectOption = option.id === currentQuestion.correctAnswer;

                let optionStyles = 'border-gray-200 hover:border-blue-300 hover:bg-blue-50';
                if (isAnswered) {
                  if (isCorrectOption) {
                    optionStyles = 'border-green-500 bg-green-50';
                  } else if (isSelected && !isCorrect) {
                    optionStyles = 'border-red-500 bg-red-50';
                  } else {
                    optionStyles = 'border-gray-200 opacity-50';
                  }
                } else if (isSelected) {
                  optionStyles = 'border-blue-600 bg-blue-50';
                }

                return (
                  <button
                    key={option.id}
                    onClick={() => handleSelectAnswer(option.id)}
                    disabled={isAnswered}
                    className={`w-full p-4 rounded-xl border-2 text-left transition-all ${optionStyles}`}
                  >
                    <div className="flex items-start gap-3">
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-medium ${
                        isAnswered && isCorrectOption
                          ? 'bg-green-500 text-white'
                          : isAnswered && isSelected && !isCorrect
                          ? 'bg-red-500 text-white'
                          : 'bg-gray-100 text-gray-600'
                      }`}>
                        {option.id}
                      </span>
                      <span className="text-gray-900 pt-1">{option.text}</span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Hint Button (before answering) */}
            {!isAnswered && currentQuestion?.hint && (
              <button
                onClick={() => setShowHint(!showHint)}
                className="flex items-center gap-2 text-sm text-amber-600 mt-4 hover:text-amber-700"
              >
                <Lightbulb className="w-4 h-4" />
                {showHint ? 'Hide Hint' : 'Show Hint'}
              </button>
            )}

            {/* Hint Display */}
            <AnimatePresence>
              {showHint && !isAnswered && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="mt-3 p-4 bg-amber-50 rounded-xl border border-amber-200"
                >
                  <p className="text-sm text-amber-800">
                    <strong>Hint:</strong> {currentQuestion?.hint}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Explanation (after answering) */}
            {showExplanation && isAnswered && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mt-6"
              >
                {/* Key Point Banner */}
                <div className="bg-blue-600 text-white px-5 py-3 rounded-t-xl">
                  <div className="flex items-center gap-2">
                    <Lightbulb className="w-5 h-5" />
                    <span className="font-semibold">Why is this the answer?</span>
                  </div>
                </div>

                {/* Explanation Content */}
                <div className="bg-gray-50 border border-t-0 border-gray-200 rounded-b-xl p-5">
                  <p className="text-base text-gray-800 leading-loose">
                    {highlightKeyTerms(currentQuestion?.explanation)}
                  </p>
                  {currentQuestion?.faaReference && (
                    <p className="text-sm text-gray-500 mt-4 pt-3 border-t border-gray-200">
                      Reference: {currentQuestion.faaReference}
                    </p>
                  )}
                </div>
              </motion.div>
            )}
          </Card>
        </motion.div>
      </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex justify-between items-center mt-auto pt-4">
        <div className="text-sm text-gray-500">
          {isAnswered && (
            <span className={isCorrect ? 'text-green-600' : 'text-red-600'}>
              {isCorrect ? 'Correct!' : 'Incorrect'}
            </span>
          )}
        </div>
        <Button
          onClick={handleNext}
          disabled={!isAnswered}
          icon={ChevronRight}
          iconPosition="right"
        >
          {currentIndex < questions.length - 1 ? 'Next Question' : 'See Results'}
        </Button>
      </div>

      {/* Figure Modal */}
      <Modal
        isOpen={showFigure}
        onClose={handleCloseModal}
        title={figure?.title}
        size="5xl"
        noScroll
      >
        {figure && (
          <div>
            {figure.placeholder ? (
              <div className="bg-gray-100 rounded-xl p-8 text-center">
                <Image className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                <p className="text-gray-600 mb-4">
                  Figure placeholder - actual image not available
                </p>
                <p className="text-sm text-gray-500">
                  {figure.instructions}
                </p>
                {figure.keyData && (
                  <div className="mt-4 p-4 bg-white rounded-lg text-left">
                    <p className="text-sm font-medium text-gray-700 mb-2">Key Data:</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {Object.entries(figure.keyData).map(([key, value]) => (
                        <li key={key}>{key}: {value}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ) : (
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
            )}
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
            <p className="text-xs text-gray-400 mt-2">{figure.faaReference}</p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default QuizMode;
