import { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Clock,
  Flag,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Home,
  RotateCcw,
  Image
} from 'lucide-react';
import { Button, Card, Modal, ModalFooter } from '../common';
import { useProgress } from '../../contexts/ProgressContext';
import { useUser } from '../../contexts/UserContext';
import { useToast } from '../common/Toast';
import { getSmartQuestions } from '../../data/questions';
import { getFigureById } from '../../data/figures/figureIndex';

const TOTAL_QUESTIONS = 60;
const TIME_LIMIT = 2 * 60 * 60;
const PASSING_SCORE = 70;

const PracticeTestMode = () => {
  const { recordAnswer, startSession, endSession } = useProgress();
  const { addXP, checkAchievement, hasAchievement } = useUser();
  const toast = useToast();

  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState({});
  const [markedForReview, setMarkedForReview] = useState(new Set());
  const [timeRemaining, setTimeRemaining] = useState(TIME_LIMIT);
  const [isStarted, setIsStarted] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [results, setResults] = useState(null);
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

  const currentQuestion = questions[currentIndex];
  const figure = currentQuestion?.figureRef ? getFigureById(currentQuestion.figureRef) : null;
  const answeredCount = Object.keys(answers).length;

  useEffect(() => {
    // Use smart question selection to prevent duplicates
    // Struggle questions (wrong 3+ times) can appear up to 2x for reinforcement
    setQuestions(getSmartQuestions(TOTAL_QUESTIONS));
  }, []);

  useEffect(() => {
    if (!isStarted || isSubmitted) return;

    const timer = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 1) {
          handleSubmit();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isStarted, isSubmitted]);

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleStart = () => {
    setIsStarted(true);
    startSession('practice-test');
  };

  const handleSelectAnswer = (answerId) => {
    setAnswers(prev => ({ ...prev, [currentQuestion.id]: answerId }));
  };

  const goToQuestion = (index) => setCurrentIndex(index);

  const toggleMarkForReview = () => {
    setMarkedForReview(prev => {
      const newSet = new Set(prev);
      if (newSet.has(currentIndex)) newSet.delete(currentIndex);
      else newSet.add(currentIndex);
      return newSet;
    });
  };

  const handleSubmit = useCallback(() => {
    setShowSubmitModal(false);
    setIsSubmitted(true);

    let correct = 0;
    const categoryResults = {};

    questions.forEach(q => {
      const userAnswer = answers[q.id];
      const isCorrect = userAnswer === q.correctAnswer;
      if (isCorrect) correct++;

      if (!categoryResults[q.category]) {
        categoryResults[q.category] = { correct: 0, total: 0 };
      }
      categoryResults[q.category].total++;
      if (isCorrect) categoryResults[q.category].correct++;

      if (userAnswer) recordAnswer(q.id, q.category, isCorrect);
    });

    const score = Math.round((correct / questions.length) * 100);
    const passed = score >= PASSING_SCORE;
    const timeTaken = TIME_LIMIT - timeRemaining;

    setResults({ score, correct, total: questions.length, passed, timeTaken, categoryResults });
    endSession();

    if (!hasAchievement('test-taker')) checkAchievement('test-taker');
    if (passed && !hasAchievement('passing-grade')) checkAchievement('passing-grade');
    if (score >= 90 && !hasAchievement('honor-roll')) checkAchievement('honor-roll');
    if (score === 100 && questions.length === 60 && !hasAchievement('test-ace')) checkAchievement('test-ace');

    const baseXP = 100;
    const bonusXP = passed ? 50 : 0;
    const perfectBonus = score === 100 ? 100 : 0;
    addXP(baseXP + bonusXP + perfectBonus, 'Practice test completed');

    toast.success(passed ? 'Congratulations! You passed!' : 'Keep practicing!');
  }, [questions, answers, timeRemaining, recordAnswer, endSession, hasAchievement, checkAchievement, addXP, toast]);

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

  const handleCloseFigureModal = useCallback(() => {
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

  if (!isStarted) {
    return (
      <div className="container-app py-8 max-w-2xl">
        <Card className="text-center">
          <div className="w-20 h-20 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-6">
            <Clock className="w-10 h-10 text-blue-600" />
          </div>
          <h1 className="text-3xl font-display font-bold text-gray-900 mb-4">Practice Test</h1>
          <div className="text-left bg-gray-50 rounded-xl p-6 mb-6">
            <h2 className="font-semibold text-gray-900 mb-3">Test Information</h2>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-500" />{questions.length} questions</li>
              <li className="flex items-center gap-2"><Clock className="w-4 h-4 text-blue-500" />2 hours time limit</li>
              <li className="flex items-center gap-2"><AlertTriangle className="w-4 h-4 text-orange-500" />70% required to pass</li>
              <li className="flex items-center gap-2"><Flag className="w-4 h-4 text-purple-500" />Mark questions for review</li>
            </ul>
          </div>
          <Button size="lg" onClick={handleStart}>Start Practice Test</Button>
        </Card>
      </div>
    );
  }

  if (isSubmitted && results) {
    return (
      <div className="container-app py-8 max-w-3xl">
        <Card className="text-center mb-6">
          <div className={`w-24 h-24 mx-auto rounded-full flex items-center justify-center mb-6 ${results.passed ? 'bg-green-100' : 'bg-red-100'}`}>
            {results.passed ? <CheckCircle className="w-12 h-12 text-green-500" /> : <XCircle className="w-12 h-12 text-red-500" />}
          </div>
          <h1 className="text-3xl font-display font-bold text-gray-900 mb-2">
            {results.passed ? 'Congratulations!' : 'Keep Practicing!'}
          </h1>
          <p className="text-gray-600 mb-6">{results.passed ? 'You passed!' : `You need ${PASSING_SCORE}% to pass.`}</p>
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className={`rounded-xl p-4 ${results.passed ? 'bg-green-50' : 'bg-red-50'}`}>
              <p className={`text-3xl font-bold ${results.passed ? 'text-green-600' : 'text-red-600'}`}>{results.score}%</p>
              <p className="text-sm text-gray-500">Score</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-3xl font-bold text-gray-900">{results.correct}/{results.total}</p>
              <p className="text-sm text-gray-500">Correct</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-3xl font-bold text-gray-900">{Math.floor(results.timeTaken / 60)}m</p>
              <p className="text-sm text-gray-500">Time</p>
            </div>
          </div>
          <div className="flex gap-3 justify-center">
            <Button variant="outline" icon={RotateCcw} onClick={() => window.location.reload()}>Take Again</Button>
            <Link to="/categories"><Button icon={Home}>Back to Categories</Button></Link>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="sticky top-0 bg-white border-b border-gray-200 z-40">
        <div className="container-app py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-500">Question {currentIndex + 1} of {questions.length}</span>
              <span className="text-sm text-gray-500">Answered: {answeredCount}/{questions.length}</span>
            </div>
            <div className={`flex items-center gap-2 px-4 py-2 rounded-lg font-mono ${timeRemaining < 600 ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-700'}`}>
              <Clock className="w-4 h-4" />{formatTime(timeRemaining)}
            </div>
          </div>
        </div>
      </div>

      <div className="container-app py-6">
        <div className="grid lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <Card>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-gray-500">Question {currentIndex + 1}</span>
                <button onClick={toggleMarkForReview} className={`flex items-center gap-1 text-sm ${markedForReview.has(currentIndex) ? 'text-orange-500' : 'text-gray-400 hover:text-orange-500'}`}>
                  <Flag className="w-4 h-4" />{markedForReview.has(currentIndex) ? 'Marked' : 'Mark for Review'}
                </button>
              </div>
              {figure && (
                <div className="mb-4 flex justify-center">
                  {figure.placeholder ? (
                    <div className="bg-gray-100 rounded-xl p-4 text-center">
                      <Image className="w-12 h-12 mx-auto text-gray-400 mb-2" />
                      <p className="text-sm text-gray-600 mb-2">{figure.title}</p>
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
                        className="h-auto object-contain max-h-64"
                      />
                      <p className="text-xs text-gray-500 text-center py-1">
                        {figure.title} - Tap to enlarge
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
              <h2 className="text-lg text-gray-900 mb-6">{currentQuestion?.question}</h2>
              <div className="space-y-3">
                {currentQuestion?.options.map((option) => {
                  const isSelected = answers[currentQuestion.id] === option.id;
                  return (
                    <button key={option.id} onClick={() => handleSelectAnswer(option.id)} className={`w-full p-4 rounded-xl border-2 text-left transition-all ${isSelected ? 'border-blue-600 bg-blue-50' : 'border-gray-200 hover:border-blue-300'}`}>
                      <div className="flex items-start gap-3">
                        <span className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-medium ${isSelected ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'}`}>{option.id}</span>
                        <span className="text-gray-900 pt-1">{option.text}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
              <div className="flex justify-between items-center mt-6 pt-6 border-t border-gray-100">
                <Button variant="ghost" icon={ChevronLeft} onClick={() => goToQuestion(Math.max(0, currentIndex - 1))} disabled={currentIndex === 0}>Previous</Button>
                {currentIndex < questions.length - 1 ? (
                  <Button icon={ChevronRight} iconPosition="right" onClick={() => goToQuestion(currentIndex + 1)}>Next</Button>
                ) : (
                  <Button variant="success" onClick={() => setShowSubmitModal(true)}>Submit Test</Button>
                )}
              </div>
            </Card>
          </div>

          <div className="hidden lg:block">
            <Card>
              <h3 className="font-semibold text-gray-900 mb-4">Questions</h3>
              <div className="grid grid-cols-5 gap-2">
                {questions.map((_, idx) => {
                  const isAnswered = answers[questions[idx]?.id];
                  const isMarked = markedForReview.has(idx);
                  const isCurrent = idx === currentIndex;
                  return (
                    <button key={idx} onClick={() => goToQuestion(idx)} className={`w-8 h-8 rounded-lg text-xs font-medium transition-all ${isCurrent ? 'ring-2 ring-blue-600 ring-offset-2' : ''} ${isMarked ? 'bg-orange-100 text-orange-600' : isAnswered ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
                      {idx + 1}
                    </button>
                  );
                })}
              </div>
              <Button variant="primary" fullWidth className="mt-4" onClick={() => setShowSubmitModal(true)}>Submit Test</Button>
            </Card>
          </div>
        </div>
      </div>

      <Modal isOpen={showSubmitModal} onClose={() => setShowSubmitModal(false)} title="Submit Test?" size="sm">
        <div className="mb-4">
          <p className="text-gray-600 mb-4">Are you sure you want to submit?</p>
          <div className="bg-gray-50 rounded-lg p-4 space-y-2 text-sm">
            <div className="flex justify-between"><span className="text-gray-500">Answered:</span><span className="font-medium">{answeredCount} / {questions.length}</span></div>
            <div className="flex justify-between"><span className="text-gray-500">Marked for review:</span><span className="font-medium">{markedForReview.size}</span></div>
          </div>
          {answeredCount < questions.length && <p className="text-sm text-orange-600 mt-3">Warning: {questions.length - answeredCount} unanswered!</p>}
        </div>
        <ModalFooter>
          <Button variant="ghost" onClick={() => setShowSubmitModal(false)}>Continue</Button>
          <Button variant="success" onClick={handleSubmit}>Submit</Button>
        </ModalFooter>
      </Modal>

      {/* Figure Modal for zooming */}
      <Modal
        isOpen={showFigure}
        onClose={handleCloseFigureModal}
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

export default PracticeTestMode;
