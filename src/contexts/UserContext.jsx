import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import * as storageService from '../services/storageService';
import { achievements, getAchievementById } from '../data/achievements';

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [profile, setProfile] = useState(storageService.getProfile());
  const [userAchievements, setUserAchievements] = useState(storageService.getAchievements());
  const [streak, setStreak] = useState(storageService.getStreak());
  const [settings, setSettings] = useState(storageService.getSettings());
  const [xpProgress, setXPProgress] = useState(storageService.getXPToNextLevel());

  // Reload data on mount
  useEffect(() => {
    setProfile(storageService.getProfile());
    setUserAchievements(storageService.getAchievements());
    setStreak(storageService.getStreak());
    setSettings(storageService.getSettings());
    setXPProgress(storageService.getXPToNextLevel());
  }, []);

  // Update display name
  const updateDisplayName = useCallback((name) => {
    const updated = storageService.updateDisplayName(name);
    if (updated) {
      setProfile(updated);
    }
    return updated;
  }, []);

  // Add XP
  const addXP = useCallback((amount, reason = '') => {
    const result = storageService.addXP(amount, reason);
    setProfile(prev => ({
      ...prev,
      xp: result.newXP,
      rank: result.rank,
      level: result.level
    }));
    setXPProgress(storageService.getXPToNextLevel());
    return result;
  }, []);

  // Check and unlock achievement
  const checkAchievement = useCallback((achievementId) => {
    const result = storageService.unlockAchievement(achievementId);
    if (result.isNew) {
      const achievement = getAchievementById(achievementId);
      setUserAchievements(storageService.getAchievements());

      // Award XP for achievement
      if (achievement?.xpReward) {
        addXP(achievement.xpReward, `Achievement: ${achievement.name}`);
      }

      return { ...result, achievement };
    }
    return result;
  }, [addXP]);

  // Check if user has achievement
  const hasAchievement = useCallback((achievementId) => {
    return !!userAchievements[achievementId];
  }, [userAchievements]);

  // Update streak
  const updateStreak = useCallback(() => {
    const updated = storageService.updateStreak();
    setStreak(updated);

    // Check streak achievements
    if (updated.currentStreak >= 3 && !hasAchievement('streak-3')) {
      checkAchievement('streak-3');
    }
    if (updated.currentStreak >= 7 && !hasAchievement('streak-7')) {
      checkAchievement('streak-7');
    }
    if (updated.currentStreak >= 14 && !hasAchievement('streak-14')) {
      checkAchievement('streak-14');
    }
    if (updated.currentStreak >= 30 && !hasAchievement('streak-30')) {
      checkAchievement('streak-30');
    }
    if (updated.currentStreak >= 100 && !hasAchievement('streak-100')) {
      checkAchievement('streak-100');
    }

    return updated;
  }, [hasAchievement, checkAchievement]);

  // Update settings
  const updateSettings = useCallback((newSettings) => {
    const updated = storageService.saveSettings(newSettings);
    if (updated) {
      setSettings(updated);
    }
    return updated;
  }, []);

  // Check time-based achievements
  const checkTimeAchievements = useCallback(() => {
    const hour = new Date().getHours();

    // Night owl (after 10 PM)
    if (hour >= 22 && !hasAchievement('night-owl')) {
      checkAchievement('night-owl');
    }

    // Early bird (before 7 AM)
    if (hour < 7 && !hasAchievement('early-bird')) {
      checkAchievement('early-bird');
    }
  }, [hasAchievement, checkAchievement]);

  // Get all achievements with unlock status
  const getAllAchievementsWithStatus = useCallback(() => {
    return achievements.map(achievement => ({
      ...achievement,
      unlocked: !!userAchievements[achievement.id],
      unlockedAt: userAchievements[achievement.id]?.unlockedAt || null
    }));
  }, [userAchievements]);

  // Export data
  const exportData = useCallback(() => {
    return storageService.exportData();
  }, []);

  // Import data
  const importData = useCallback((data) => {
    const success = storageService.importData(data);
    if (success) {
      setProfile(storageService.getProfile());
      setUserAchievements(storageService.getAchievements());
      setStreak(storageService.getStreak());
      setSettings(storageService.getSettings());
      setXPProgress(storageService.getXPToNextLevel());
    }
    return success;
  }, []);

  // Clear all data
  const clearAllData = useCallback(() => {
    const success = storageService.clearAllData();
    if (success) {
      setProfile(storageService.getProfile());
      setUserAchievements({});
      setStreak(storageService.getStreak());
      setSettings(storageService.getSettings());
      setXPProgress(storageService.getXPToNextLevel());
    }
    return success;
  }, []);

  const value = {
    // State
    profile,
    achievements: userAchievements,
    streak,
    settings,
    xpProgress,

    // Actions
    updateDisplayName,
    addXP,
    checkAchievement,
    hasAchievement,
    updateStreak,
    updateSettings,
    checkTimeAchievements,
    getAllAchievementsWithStatus,
    exportData,
    importData,
    clearAllData,
  };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export default UserContext;
