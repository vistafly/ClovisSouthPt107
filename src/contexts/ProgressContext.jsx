import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import * as storageService from '../services/storageService';
import { categories, getTotalQuestionCount } from '../data/questions';
import { useUser } from './UserContext';

const ProgressContext = createContext(null);

export const ProgressProvider = ({ children }) => {
  const [progress, setProgress] = useState(storageService.getProgress());
  const [currentSession, setCurrentSession] = useState({
    questionsAnswered: 0,
    correctAnswers: 0,
    startTime: null,
    mode: null,
    category: null
  });
  const [answerStreak, setAnswerStreak] = useState(0);

  const { addXP, checkAchievement, hasAchievement, updateStreak } = useUser();

  // Reload on mount
  useEffect(() => {
    setProgress(storageService.getProgress());
  }, []);

  // Record a question result
  const recordAnswer = useCallback((questionId, categoryId, isCorrect, timeSpent = 0) => {
    // Save to storage
    const updated = storageService.saveQuestionResult(questionId, categoryId, isCorrect);
    setProgress(updated);

    // Add to history
    storageService.addToQuestionHistory(questionId, isCorrect, timeSpent);

    // Update session
    setCurrentSession(prev => ({
      ...prev,
      questionsAnswered: prev.questionsAnswered + 1,
      correctAnswers: prev.correctAnswers + (isCorrect ? 1 : 0)
    }));

    // Update streak
    if (isCorrect) {
      setAnswerStreak(prev => prev + 1);

      // Award XP for correct answer
      addXP(10, 'Correct answer');

      // Check streak achievements
      if (answerStreak + 1 >= 10 && !hasAchievement('smooth-operator')) {
        checkAchievement('smooth-operator');
      }
    } else {
      setAnswerStreak(0);
    }

    // Update study streak
    updateStreak();

    // Check milestone achievements
    const totalAnswered = updated.totalQuestionsAnswered;
    if (totalAnswered >= 10 && !hasAchievement('preflight-complete')) {
      checkAchievement('preflight-complete');
    }
    if (totalAnswered >= 100 && !hasAchievement('hundred-questions')) {
      checkAchievement('hundred-questions');
    }
    if (totalAnswered >= 500 && !hasAchievement('five-hundred-questions')) {
      checkAchievement('five-hundred-questions');
    }
    if (totalAnswered >= 1000 && !hasAchievement('thousand-questions')) {
      checkAchievement('thousand-questions');
    }

    // Check first flight achievement
    if (totalAnswered === 1 && !hasAchievement('first-flight')) {
      checkAchievement('first-flight');
    }

    return updated;
  }, [addXP, checkAchievement, hasAchievement, updateStreak, answerStreak]);

  // Start a study session
  const startSession = useCallback((mode, category = null) => {
    setCurrentSession({
      questionsAnswered: 0,
      correctAnswers: 0,
      startTime: Date.now(),
      mode,
      category
    });
    setAnswerStreak(0);
  }, []);

  // End a study session
  const endSession = useCallback(() => {
    const session = currentSession;
    const duration = session.startTime ? Date.now() - session.startTime : 0;

    // Calculate accuracy
    const accuracy = session.questionsAnswered > 0
      ? Math.round((session.correctAnswers / session.questionsAnswered) * 100)
      : 0;

    // Award session completion XP
    if (session.questionsAnswered >= 5) {
      addXP(25, 'Session complete');

      // Perfect quiz achievement
      if (accuracy === 100 && session.questionsAnswered >= 10) {
        checkAchievement('perfect-landing');
      }
    }

    // Check accuracy achievement
    if (progress.totalQuestionsAnswered >= 50) {
      const overallAccuracy = Math.round(
        (progress.totalCorrect / progress.totalQuestionsAnswered) * 100
      );
      if (overallAccuracy >= 80 && !hasAchievement('sharpshooter')) {
        checkAchievement('sharpshooter');
      }
    }

    const result = {
      ...session,
      duration,
      accuracy
    };

    // Reset session
    setCurrentSession({
      questionsAnswered: 0,
      correctAnswers: 0,
      startTime: null,
      mode: null,
      category: null
    });

    return result;
  }, [currentSession, addXP, checkAchievement, hasAchievement, progress]);

  // Get stats for a specific category
  const getCategoryStats = useCallback((categoryId) => {
    return storageService.getCategoryStats(categoryId);
  }, []);

  // Get overall stats
  const getOverallStats = useCallback(() => {
    return storageService.getOverallStats();
  }, []);

  // Get all category progress
  const getAllCategoryProgress = useCallback(() => {
    return categories.map(cat => ({
      ...cat,
      ...getCategoryStats(cat.id)
    }));
  }, [getCategoryStats]);

  // Get completion percentage
  const getCompletionPercentage = useCallback(() => {
    const total = getTotalQuestionCount();
    const answered = Object.values(progress.categories || {}).reduce(
      (sum, cat) => sum + (cat.questionsAnswered?.length || 0),
      0
    );
    return Math.round((answered / total) * 100);
  }, [progress]);

  // Check if a question has been answered
  const hasAnsweredQuestion = useCallback((questionId, categoryId) => {
    const catProgress = progress.categories?.[categoryId];
    return catProgress?.questionsAnswered?.includes(questionId) || false;
  }, [progress]);

  // Get weak categories (lowest accuracy)
  const getWeakCategories = useCallback(() => {
    const categoryStats = getAllCategoryProgress();
    return categoryStats
      .filter(cat => cat.questionsAnswered > 0)
      .sort((a, b) => a.accuracy - b.accuracy)
      .slice(0, 3);
  }, [getAllCategoryProgress]);

  const value = {
    // State
    progress,
    currentSession,
    answerStreak,

    // Actions
    recordAnswer,
    startSession,
    endSession,
    getCategoryStats,
    getOverallStats,
    getAllCategoryProgress,
    getCompletionPercentage,
    hasAnsweredQuestion,
    getWeakCategories,
  };

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  const context = useContext(ProgressContext);
  if (!context) {
    throw new Error('useProgress must be used within a ProgressProvider');
  }
  return context;
};

export default ProgressContext;
