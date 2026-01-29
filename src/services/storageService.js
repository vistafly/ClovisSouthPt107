// Local Storage Service
// Handles all data persistence for the application
// Can be replaced with Firebase later

const STORAGE_KEYS = {
  USER_PROFILE: 'part107_user_profile',
  PROGRESS: 'part107_progress',
  ACHIEVEMENTS: 'part107_achievements',
  SETTINGS: 'part107_settings',
  STREAKS: 'part107_streaks',
  QUESTION_HISTORY: 'part107_question_history'
};

// Default values
const DEFAULT_PROFILE = {
  displayName: 'Pilot',
  xp: 0,
  level: 1,
  rank: 'Student Pilot',
  createdAt: null,
  lastLogin: null
};

const DEFAULT_PROGRESS = {
  totalQuestionsAnswered: 0,
  totalCorrect: 0,
  categories: {},
  lastStudied: null
};

const DEFAULT_SETTINGS = {
  soundEnabled: true,
  animationsEnabled: true,
  showHints: true,
  darkMode: false
};

const DEFAULT_STREAKS = {
  currentStreak: 0,
  longestStreak: 0,
  lastStudyDate: null,
  studyHistory: [] // Array of dates studied
};

// ============== PROFILE ==============

export const getProfile = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.USER_PROFILE);
    if (stored) {
      return { ...DEFAULT_PROFILE, ...JSON.parse(stored) };
    }
    return { ...DEFAULT_PROFILE, createdAt: new Date().toISOString() };
  } catch (error) {
    console.error('Error reading profile:', error);
    return DEFAULT_PROFILE;
  }
};

export const saveProfile = (profile) => {
  try {
    const updated = {
      ...getProfile(),
      ...profile,
      lastLogin: new Date().toISOString()
    };
    localStorage.setItem(STORAGE_KEYS.USER_PROFILE, JSON.stringify(updated));
    return updated;
  } catch (error) {
    console.error('Error saving profile:', error);
    return null;
  }
};

export const updateDisplayName = (name) => {
  return saveProfile({ displayName: name });
};

// ============== XP & LEVELING ==============

// XP thresholds for each rank
const RANK_THRESHOLDS = [
  { rank: 'Student Pilot', minXP: 0, level: 1 },
  { rank: 'Student Pilot', minXP: 100, level: 2 },
  { rank: 'Student Pilot', minXP: 250, level: 3 },
  { rank: 'Student Pilot', minXP: 400, level: 4 },
  { rank: 'Private Pilot', minXP: 500, level: 5 },
  { rank: 'Private Pilot', minXP: 750, level: 6 },
  { rank: 'Private Pilot', minXP: 1000, level: 7 },
  { rank: 'Private Pilot', minXP: 1500, level: 8 },
  { rank: 'Commercial Pilot', minXP: 2000, level: 9 },
  { rank: 'Commercial Pilot', minXP: 2750, level: 10 },
  { rank: 'Commercial Pilot', minXP: 3500, level: 11 },
  { rank: 'Commercial Pilot', minXP: 4250, level: 12 },
  { rank: 'ATP', minXP: 5000, level: 13 },
  { rank: 'ATP', minXP: 6500, level: 14 },
  { rank: 'ATP', minXP: 8000, level: 15 },
  { rank: 'ATP', minXP: 10000, level: 16 }
];

const calculateRankAndLevel = (xp) => {
  let result = RANK_THRESHOLDS[0];
  for (const threshold of RANK_THRESHOLDS) {
    if (xp >= threshold.minXP) {
      result = threshold;
    } else {
      break;
    }
  }
  return result;
};

export const getXP = () => {
  const profile = getProfile();
  return profile.xp || 0;
};

export const addXP = (amount, reason = '') => {
  const profile = getProfile();
  const newXP = (profile.xp || 0) + amount;
  const { rank, level } = calculateRankAndLevel(newXP);

  const updated = saveProfile({
    xp: newXP,
    rank,
    level
  });

  // Check for rank-up
  const leveledUp = level > (profile.level || 1);

  return {
    newXP,
    xpGained: amount,
    rank,
    level,
    leveledUp,
    reason
  };
};

export const getXPToNextLevel = () => {
  const profile = getProfile();
  const currentXP = profile.xp || 0;

  // Find current and next threshold
  let currentIndex = 0;
  for (let i = 0; i < RANK_THRESHOLDS.length; i++) {
    if (currentXP >= RANK_THRESHOLDS[i].minXP) {
      currentIndex = i;
    } else {
      break;
    }
  }

  const nextThreshold = RANK_THRESHOLDS[currentIndex + 1];
  if (!nextThreshold) {
    return { current: currentXP, needed: 0, progress: 100 }; // Max level
  }

  const currentThreshold = RANK_THRESHOLDS[currentIndex];
  const xpInCurrentLevel = currentXP - currentThreshold.minXP;
  const xpNeededForLevel = nextThreshold.minXP - currentThreshold.minXP;
  const progress = Math.round((xpInCurrentLevel / xpNeededForLevel) * 100);

  return {
    current: xpInCurrentLevel,
    needed: xpNeededForLevel,
    toNext: xpNeededForLevel - xpInCurrentLevel,
    progress
  };
};

// ============== PROGRESS ==============

export const getProgress = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.PROGRESS);
    if (stored) {
      return { ...DEFAULT_PROGRESS, ...JSON.parse(stored) };
    }
    return DEFAULT_PROGRESS;
  } catch (error) {
    console.error('Error reading progress:', error);
    return DEFAULT_PROGRESS;
  }
};

export const saveQuestionResult = (questionId, categoryId, isCorrect) => {
  try {
    const progress = getProgress();

    // Update totals
    progress.totalQuestionsAnswered = (progress.totalQuestionsAnswered || 0) + 1;
    if (isCorrect) {
      progress.totalCorrect = (progress.totalCorrect || 0) + 1;
    }

    // Update category progress
    if (!progress.categories[categoryId]) {
      progress.categories[categoryId] = {
        questionsAnswered: [],
        correctAnswers: 0,
        totalAnswered: 0
      };
    }

    const catProgress = progress.categories[categoryId];
    if (!catProgress.questionsAnswered.includes(questionId)) {
      catProgress.questionsAnswered.push(questionId);
    }
    catProgress.totalAnswered++;
    if (isCorrect) {
      catProgress.correctAnswers++;
    }

    progress.lastStudied = new Date().toISOString();

    localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(progress));

    // Update streak
    updateStreak();

    return progress;
  } catch (error) {
    console.error('Error saving question result:', error);
    return null;
  }
};

export const getCategoryStats = (categoryId) => {
  const progress = getProgress();
  const catProgress = progress.categories[categoryId];

  if (!catProgress) {
    return {
      questionsAnswered: 0,
      correctAnswers: 0,
      accuracy: 0,
      uniqueQuestions: 0
    };
  }

  return {
    questionsAnswered: catProgress.totalAnswered || 0,
    correctAnswers: catProgress.correctAnswers || 0,
    accuracy: catProgress.totalAnswered > 0
      ? Math.round((catProgress.correctAnswers / catProgress.totalAnswered) * 100)
      : 0,
    uniqueQuestions: catProgress.questionsAnswered?.length || 0
  };
};

export const getOverallStats = () => {
  const progress = getProgress();
  return {
    totalAnswered: progress.totalQuestionsAnswered || 0,
    totalCorrect: progress.totalCorrect || 0,
    accuracy: progress.totalQuestionsAnswered > 0
      ? Math.round((progress.totalCorrect / progress.totalQuestionsAnswered) * 100)
      : 0,
    lastStudied: progress.lastStudied
  };
};

// ============== ACHIEVEMENTS ==============

export const getAchievements = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.ACHIEVEMENTS);
    return stored ? JSON.parse(stored) : {};
  } catch (error) {
    console.error('Error reading achievements:', error);
    return {};
  }
};

export const unlockAchievement = (achievementId) => {
  try {
    const achievements = getAchievements();
    if (!achievements[achievementId]) {
      achievements[achievementId] = {
        unlockedAt: new Date().toISOString()
      };
      localStorage.setItem(STORAGE_KEYS.ACHIEVEMENTS, JSON.stringify(achievements));
      return { isNew: true, achievement: achievements[achievementId] };
    }
    return { isNew: false, achievement: achievements[achievementId] };
  } catch (error) {
    console.error('Error unlocking achievement:', error);
    return { isNew: false, achievement: null };
  }
};

export const hasAchievement = (achievementId) => {
  const achievements = getAchievements();
  return !!achievements[achievementId];
};

// ============== STREAKS ==============

export const getStreak = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.STREAKS);
    if (stored) {
      return { ...DEFAULT_STREAKS, ...JSON.parse(stored) };
    }
    return DEFAULT_STREAKS;
  } catch (error) {
    console.error('Error reading streaks:', error);
    return DEFAULT_STREAKS;
  }
};

export const updateStreak = () => {
  try {
    const streaks = getStreak();
    const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
    const lastStudy = streaks.lastStudyDate;

    if (lastStudy === today) {
      // Already studied today, no change
      return streaks;
    }

    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().split('T')[0];

    if (lastStudy === yesterdayStr) {
      // Consecutive day - increment streak
      streaks.currentStreak++;
    } else if (!lastStudy) {
      // First time studying
      streaks.currentStreak = 1;
    } else {
      // Streak broken - reset to 1
      streaks.currentStreak = 1;
    }

    // Update longest streak
    if (streaks.currentStreak > streaks.longestStreak) {
      streaks.longestStreak = streaks.currentStreak;
    }

    streaks.lastStudyDate = today;

    // Add to study history (keep last 365 days)
    if (!streaks.studyHistory.includes(today)) {
      streaks.studyHistory.push(today);
      if (streaks.studyHistory.length > 365) {
        streaks.studyHistory.shift();
      }
    }

    localStorage.setItem(STORAGE_KEYS.STREAKS, JSON.stringify(streaks));
    return streaks;
  } catch (error) {
    console.error('Error updating streak:', error);
    return DEFAULT_STREAKS;
  }
};

export const checkStreakStatus = () => {
  const streaks = getStreak();
  const today = new Date().toISOString().split('T')[0];

  if (streaks.lastStudyDate === today) {
    return { studiedToday: true, streakAtRisk: false };
  }

  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayStr = yesterday.toISOString().split('T')[0];

  return {
    studiedToday: false,
    streakAtRisk: streaks.lastStudyDate === yesterdayStr && streaks.currentStreak > 0
  };
};

// ============== SETTINGS ==============

export const getSettings = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.SETTINGS);
    if (stored) {
      return { ...DEFAULT_SETTINGS, ...JSON.parse(stored) };
    }
    return DEFAULT_SETTINGS;
  } catch (error) {
    console.error('Error reading settings:', error);
    return DEFAULT_SETTINGS;
  }
};

export const saveSettings = (settings) => {
  try {
    const updated = { ...getSettings(), ...settings };
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(updated));
    return updated;
  } catch (error) {
    console.error('Error saving settings:', error);
    return null;
  }
};

// ============== QUESTION HISTORY ==============

export const getQuestionHistory = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEYS.QUESTION_HISTORY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Error reading question history:', error);
    return [];
  }
};

export const addToQuestionHistory = (questionId, isCorrect, timeSpent) => {
  try {
    const history = getQuestionHistory();
    history.push({
      questionId,
      isCorrect,
      timeSpent,
      timestamp: new Date().toISOString()
    });

    // Keep last 1000 entries
    if (history.length > 1000) {
      history.shift();
    }

    localStorage.setItem(STORAGE_KEYS.QUESTION_HISTORY, JSON.stringify(history));
    return history;
  } catch (error) {
    console.error('Error adding to question history:', error);
    return [];
  }
};

// ============== DATA MANAGEMENT ==============

export const exportData = () => {
  return {
    profile: getProfile(),
    progress: getProgress(),
    achievements: getAchievements(),
    settings: getSettings(),
    streaks: getStreak(),
    questionHistory: getQuestionHistory(),
    exportedAt: new Date().toISOString()
  };
};

export const importData = (data) => {
  try {
    if (data.profile) {
      localStorage.setItem(STORAGE_KEYS.USER_PROFILE, JSON.stringify(data.profile));
    }
    if (data.progress) {
      localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(data.progress));
    }
    if (data.achievements) {
      localStorage.setItem(STORAGE_KEYS.ACHIEVEMENTS, JSON.stringify(data.achievements));
    }
    if (data.settings) {
      localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(data.settings));
    }
    if (data.streaks) {
      localStorage.setItem(STORAGE_KEYS.STREAKS, JSON.stringify(data.streaks));
    }
    if (data.questionHistory) {
      localStorage.setItem(STORAGE_KEYS.QUESTION_HISTORY, JSON.stringify(data.questionHistory));
    }
    return true;
  } catch (error) {
    console.error('Error importing data:', error);
    return false;
  }
};

export const clearAllData = () => {
  try {
    Object.values(STORAGE_KEYS).forEach(key => {
      localStorage.removeItem(key);
    });
    return true;
  } catch (error) {
    console.error('Error clearing data:', error);
    return false;
  }
};

// Export all functions as default object for convenience
export default {
  // Profile
  getProfile,
  saveProfile,
  updateDisplayName,

  // XP
  getXP,
  addXP,
  getXPToNextLevel,

  // Progress
  getProgress,
  saveQuestionResult,
  getCategoryStats,
  getOverallStats,

  // Achievements
  getAchievements,
  unlockAchievement,
  hasAchievement,

  // Streaks
  getStreak,
  updateStreak,
  checkStreakStatus,

  // Settings
  getSettings,
  saveSettings,

  // History
  getQuestionHistory,
  addToQuestionHistory,

  // Data management
  exportData,
  importData,
  clearAllData
};
