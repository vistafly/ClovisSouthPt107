import { useState, useEffect, useCallback, useRef } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Zap, Flame, Home, RotateCcw, Trophy, AlertTriangle } from 'lucide-react';
import { Button, Card } from '../common';
import { useProgress } from '../../contexts/ProgressContext';
import { useUser } from '../../contexts/UserContext';
import { useToast } from '../common/Toast';
import { getSmartQuestions, getCategoryById } from '../../data/questions';

const QUESTION_TIME = 10;
const BASE_POINTS = 100;
const TIME_BONUS_MULTIPLIER = 10;

const SpeedRoundMode = () => {
  const [searchParams] = useSearchParams();
  const categoryId = searchParams.get('category');
  const toast = useToast();
  const { recordAnswer, startSession, endSession } = useProgress();
  const { addXP, checkAchievement, hasAchievement } = useUser();

  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState(QUESTION_TIME);
  const [score, setScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [maxCombo, setMaxCombo] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const timerRef = useRef(null);

  const currentQuestion = questions[currentIndex];
  const category = categoryId ? getCategoryById(categoryId) : null;

  useEffect(() => {
    // Use smart question selection to prevent duplicates
    // Struggle questions (wrong 3+ times) can appear up to 2x for reinforcement
    setQuestions(getSmartQuestions(20, categoryId));
  }, [categoryId]);

  useEffect(() => {
    if (!isStarted || isAnswered || isComplete) return;
    timerRef.current = setInterval(() => {
      setTimeRemaining(prev => {
        if (prev <= 0.1) { handleTimeUp(); return 0; }
        return prev - 0.1;
      });
    }, 100);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [isStarted, isAnswered, isComplete, currentIndex]);

  const handleStart = () => {
    setIsStarted(true);
    setScore(0); setCombo(0); setMaxCombo(0); setCorrectCount(0);
    setCurrentIndex(0); setTimeRemaining(QUESTION_TIME); setIsComplete(false);
    startSession('speed-round', categoryId);
  };

  const handleTimeUp = useCallback(() => {
    if (isAnswered) return;
    setIsAnswered(true); setCombo(0);
    toast.error('Time\'s up!');
    recordAnswer(currentQuestion.id, currentQuestion.category, false);
    setTimeout(() => goToNext(), 1000);
  }, [isAnswered, currentQuestion, recordAnswer, toast]);

  const handleSelectAnswer = useCallback((answerId) => {
    if (isAnswered) return;
    setSelectedAnswer(answerId);
    setIsAnswered(true);
    if (timerRef.current) clearInterval(timerRef.current);

    const isCorrect = answerId === currentQuestion.correctAnswer;
    if (isCorrect) {
      const timeBonus = Math.floor(timeRemaining * TIME_BONUS_MULTIPLIER);
      const comboMultiplier = 1 + (combo >= 10 ? 2 : combo >= 5 ? 1 : combo >= 3 ? 0.5 : 0);
      const points = Math.floor((BASE_POINTS + timeBonus) * comboMultiplier);
      setScore(prev => prev + points);
      setCombo(prev => prev + 1);
      setMaxCombo(prev => Math.max(prev, combo + 1));
      setCorrectCount(prev => prev + 1);
      toast.success(`+${points} points!${combo >= 2 ? ` ${combo + 1}x combo!` : ''}`);
    } else {
      setCombo(0);
      toast.error('Wrong!');
    }
    recordAnswer(currentQuestion.id, currentQuestion.category, isCorrect);
    setTimeout(() => goToNext(), 1000);
  }, [isAnswered, currentQuestion, timeRemaining, combo, recordAnswer, toast]);

  const goToNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswer(null); setIsAnswered(false); setTimeRemaining(QUESTION_TIME);
    } else handleComplete();
  };

  const handleComplete = () => {
    setIsComplete(true);
    endSession();
    const xpEarned = Math.floor(score / 10);
    addXP(xpEarned, 'Speed round completed');
    if (maxCombo >= 10 && !hasAchievement('combo-king')) checkAchievement('combo-king');
  };

  const handleRestart = () => {
    // Get fresh smart questions for the new session
    setQuestions(getSmartQuestions(20, categoryId));
    handleStart();
  };

  if (questions.length === 0) {
    return (
      <div className="container-app py-16 text-center">
        <h1 className="text-2xl font-display font-bold text-gray-900 mb-4">No Questions Available</h1>
        <Link to="/categories"><Button icon={Home}>Back to Categories</Button></Link>
      </div>
    );
  }

  if (!isStarted) {
    return (
      <div className="container-app py-8 max-w-2xl">
        <Card className="text-center">
          <div className="w-20 h-20 mx-auto bg-orange-100 rounded-full flex items-center justify-center mb-6">
            <Zap className="w-10 h-10 text-orange-500" />
          </div>
          <h1 className="text-3xl font-display font-bold text-gray-900 mb-4">Speed Round</h1>
          <p className="text-gray-600 mb-6">Answer questions fast! {QUESTION_TIME} seconds per question. Build combos!</p>
          <div className="bg-gray-50 rounded-xl p-6 mb-6 text-left">
            <h3 className="font-semibold text-gray-900 mb-3">Scoring</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><strong>Base:</strong> {BASE_POINTS} points</li>
              <li><strong>Time bonus:</strong> +{TIME_BONUS_MULTIPLIER} pts/second</li>
              <li><strong>3x combo:</strong> 1.5x | <strong>5x:</strong> 2x | <strong>10x:</strong> 3x</li>
            </ul>
          </div>
          <Button size="lg" icon={Zap} onClick={handleStart}>Start Speed Round</Button>
        </Card>
      </div>
    );
  }

  if (isComplete) {
    const accuracy = Math.round((correctCount / questions.length) * 100);
    return (
      <div className="container-app py-8 max-w-2xl">
        <Card className="text-center">
          <div className="w-20 h-20 mx-auto bg-amber-100 rounded-full flex items-center justify-center mb-6">
            <Trophy className="w-10 h-10 text-amber-600" />
          </div>
          <h1 className="text-3xl font-display font-bold text-gray-900 mb-2">Speed Round Complete!</h1>
          <p className="text-4xl font-bold text-blue-600 mb-6">{score.toLocaleString()} points</p>
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="bg-gray-50 rounded-xl p-4"><p className="text-2xl font-bold text-gray-900">{accuracy}%</p><p className="text-sm text-gray-500">Accuracy</p></div>
            <div className="bg-green-50 rounded-xl p-4"><p className="text-2xl font-bold text-green-600">{correctCount}</p><p className="text-sm text-gray-500">Correct</p></div>
            <div className="bg-orange-50 rounded-xl p-4"><p className="text-2xl font-bold text-orange-600">{maxCombo}x</p><p className="text-sm text-gray-500">Max Combo</p></div>
          </div>
          <div className="flex gap-3 justify-center">
            <Button variant="accent" icon={RotateCcw} onClick={handleRestart}>Play Again</Button>
            <Link to="/categories"><Button variant="outline" icon={Home}>Categories</Button></Link>
          </div>
        </Card>
      </div>
    );
  }

  const timerPercent = (timeRemaining / QUESTION_TIME) * 100;
  const timerColor = timeRemaining <= 3 ? 'bg-red-500' : timeRemaining <= 5 ? 'bg-orange-500' : 'bg-green-500';

  return (
    <div className="container-app py-8 max-w-3xl">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-100 text-blue-700 rounded-full">
            <Trophy className="w-4 h-4" /><span className="font-medium">{score.toLocaleString()}</span>
          </div>
          {combo >= 2 && (
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="flex items-center gap-1 px-3 py-1.5 bg-orange-100 text-orange-600 rounded-full">
              <Flame className="w-4 h-4" /><span className="font-medium">{combo}x combo</span>
            </motion.div>
          )}
        </div>
        <div className="text-sm text-gray-500">{currentIndex + 1} / {questions.length}</div>
      </div>

      <div className="mb-6">
        <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
          <motion.div className={`h-full ${timerColor} rounded-full`} initial={{ width: '100%' }} animate={{ width: `${timerPercent}%` }} transition={{ duration: 0.1 }} />
        </div>
        <div className="flex justify-between mt-1">
          <span className={`text-sm font-mono ${timeRemaining <= 3 ? 'text-red-500' : 'text-gray-500'}`}>{timeRemaining.toFixed(1)}s</span>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={currentIndex} initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -50 }} transition={{ duration: 0.2 }}>
          <Card className={`mb-6 ${timeRemaining <= 3 && !isAnswered ? 'animate-pulse ring-2 ring-red-300' : ''}`}>
            {/* Frequently Missed Badge */}
            {currentQuestion?.isStruggleQuestion && (
              <div className="flex items-center gap-1.5 mb-3 px-2.5 py-1 bg-amber-50 text-amber-700 rounded-full w-fit text-xs font-medium">
                <AlertTriangle className="w-3.5 h-3.5" />
                Frequently Missed
              </div>
            )}
            <h2 className="text-lg font-medium text-gray-900 mb-6">{currentQuestion?.question}</h2>
            <div className="grid grid-cols-1 gap-3">
              {currentQuestion?.options.map((option) => {
                const isSelected = selectedAnswer === option.id;
                const isCorrectOption = option.id === currentQuestion.correctAnswer;
                let styles = 'border-gray-200 hover:border-blue-300 hover:bg-blue-50';
                if (isAnswered) {
                  if (isCorrectOption) styles = 'border-green-500 bg-green-50';
                  else if (isSelected) styles = 'border-red-500 bg-red-50';
                  else styles = 'border-gray-200 opacity-50';
                }
                return (
                  <button key={option.id} onClick={() => handleSelectAnswer(option.id)} disabled={isAnswered} className={`p-4 rounded-xl border-2 text-left transition-all ${styles}`}>
                    <div className="flex items-center gap-3">
                      <span className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 font-medium ${isAnswered && isCorrectOption ? 'bg-green-500 text-white' : isAnswered && isSelected ? 'bg-red-500 text-white' : 'bg-gray-100 text-gray-600'}`}>{option.id}</span>
                      <span className="text-gray-900">{option.text}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </Card>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default SpeedRoundMode;
