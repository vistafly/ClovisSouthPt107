// Achievements Definition
// Badges and milestones for gamification

export const achievements = [
  // Getting Started
  {
    id: 'first-flight',
    name: 'First Flight',
    description: 'Complete your first study session',
    icon: 'Plane',
    xpReward: 50,
    category: 'milestone',
    rarity: 'common'
  },
  {
    id: 'preflight-complete',
    name: 'Preflight Complete',
    description: 'Answer your first 10 questions',
    icon: 'CheckCircle',
    xpReward: 75,
    category: 'milestone',
    rarity: 'common'
  },

  // Accuracy Achievements
  {
    id: 'perfect-landing',
    name: 'Perfect Landing',
    description: 'Get 100% on any quiz with 10+ questions',
    icon: 'Target',
    xpReward: 100,
    category: 'accuracy',
    rarity: 'uncommon'
  },
  {
    id: 'smooth-operator',
    name: 'Smooth Operator',
    description: 'Answer 10 questions correctly in a row',
    icon: 'TrendingUp',
    xpReward: 75,
    category: 'accuracy',
    rarity: 'uncommon'
  },
  {
    id: 'sharpshooter',
    name: 'Sharpshooter',
    description: 'Maintain 80%+ accuracy over 50 questions',
    icon: 'Crosshair',
    xpReward: 150,
    category: 'accuracy',
    rarity: 'rare'
  },
  {
    id: 'perfectionist',
    name: 'Perfectionist',
    description: 'Get 100% on 5 different quizzes',
    icon: 'Star',
    xpReward: 250,
    category: 'accuracy',
    rarity: 'epic'
  },

  // Category Mastery
  {
    id: 'performance-pro',
    name: 'Performance Pro',
    description: 'Answer all Performance questions correctly at least once',
    icon: 'Gauge',
    xpReward: 200,
    category: 'mastery',
    rarity: 'rare'
  },
  {
    id: 'airspace-ace',
    name: 'Airspace Ace',
    description: 'Answer all Airspace questions correctly at least once',
    icon: 'Map',
    xpReward: 200,
    category: 'mastery',
    rarity: 'rare'
  },
  {
    id: 'airport-expert',
    name: 'Airport Expert',
    description: 'Answer all Airport Operations questions correctly at least once',
    icon: 'PlaneTakeoff',
    xpReward: 200,
    category: 'mastery',
    rarity: 'rare'
  },
  {
    id: 'weather-wizard',
    name: 'Weather Wizard',
    description: 'Answer all Weather questions correctly at least once',
    icon: 'Cloud',
    xpReward: 200,
    category: 'mastery',
    rarity: 'rare'
  },
  {
    id: 'human-whisperer',
    name: 'Human Whisperer',
    description: 'Answer all Human Factors questions correctly at least once',
    icon: 'Brain',
    xpReward: 200,
    category: 'mastery',
    rarity: 'rare'
  },
  {
    id: 'regulation-ruler',
    name: 'Regulation Ruler',
    description: 'Answer all Regulations questions correctly at least once',
    icon: 'Scale',
    xpReward: 200,
    category: 'mastery',
    rarity: 'rare'
  },
  {
    id: 'category-master',
    name: 'Category Master',
    description: 'Complete all questions in any single category',
    icon: 'Award',
    xpReward: 300,
    category: 'mastery',
    rarity: 'epic'
  },
  {
    id: 'all-categories',
    name: 'Complete Pilot',
    description: 'Complete all questions in ALL categories',
    icon: 'Trophy',
    xpReward: 1000,
    category: 'mastery',
    rarity: 'legendary'
  },

  // Speed Achievements
  {
    id: 'speed-demon',
    name: 'Speed Demon',
    description: 'Answer 10 questions correctly in 60 seconds',
    icon: 'Zap',
    xpReward: 150,
    category: 'speed',
    rarity: 'rare'
  },
  {
    id: 'quick-thinker',
    name: 'Quick Thinker',
    description: 'Get 5 correct answers in Speed Round with >2 seconds remaining each',
    icon: 'Timer',
    xpReward: 100,
    category: 'speed',
    rarity: 'uncommon'
  },
  {
    id: 'combo-king',
    name: 'Combo King',
    description: 'Achieve a 10x combo in Speed Round',
    icon: 'Flame',
    xpReward: 200,
    category: 'speed',
    rarity: 'epic'
  },

  // Streak Achievements
  {
    id: 'streak-3',
    name: 'Getting Started',
    description: 'Study 3 days in a row',
    icon: 'Calendar',
    xpReward: 50,
    category: 'streak',
    rarity: 'common'
  },
  {
    id: 'streak-7',
    name: 'Week Warrior',
    description: 'Study 7 days in a row',
    icon: 'Flame',
    xpReward: 150,
    category: 'streak',
    rarity: 'uncommon'
  },
  {
    id: 'streak-14',
    name: 'Two Week Titan',
    description: 'Study 14 days in a row',
    icon: 'Flame',
    xpReward: 300,
    category: 'streak',
    rarity: 'rare'
  },
  {
    id: 'streak-30',
    name: 'Monthly Master',
    description: 'Study 30 days in a row',
    icon: 'Crown',
    xpReward: 500,
    category: 'streak',
    rarity: 'epic'
  },
  {
    id: 'streak-100',
    name: 'Century Club',
    description: 'Study 100 days in a row',
    icon: 'Medal',
    xpReward: 1500,
    category: 'streak',
    rarity: 'legendary'
  },

  // Time-Based Achievements
  {
    id: 'night-owl',
    name: 'Night Owl',
    description: 'Study after 10 PM',
    icon: 'Moon',
    xpReward: 50,
    category: 'time',
    rarity: 'common'
  },
  {
    id: 'early-bird',
    name: 'Early Bird',
    description: 'Study before 7 AM',
    icon: 'Sun',
    xpReward: 50,
    category: 'time',
    rarity: 'common'
  },
  {
    id: 'weekend-warrior',
    name: 'Weekend Warrior',
    description: 'Study on both Saturday and Sunday',
    icon: 'Calendar',
    xpReward: 75,
    category: 'time',
    rarity: 'common'
  },

  // Practice Test Achievements
  {
    id: 'test-taker',
    name: 'Test Taker',
    description: 'Complete your first practice test',
    icon: 'FileText',
    xpReward: 100,
    category: 'test',
    rarity: 'common'
  },
  {
    id: 'passing-grade',
    name: 'Passing Grade',
    description: 'Score 70% or higher on a practice test',
    icon: 'CheckCircle',
    xpReward: 150,
    category: 'test',
    rarity: 'uncommon'
  },
  {
    id: 'honor-roll',
    name: 'Honor Roll',
    description: 'Score 90% or higher on a practice test',
    icon: 'Award',
    xpReward: 300,
    category: 'test',
    rarity: 'rare'
  },
  {
    id: 'test-ace',
    name: 'Test Ace',
    description: 'Score 100% on a full 60-question practice test',
    icon: 'Trophy',
    xpReward: 500,
    category: 'test',
    rarity: 'legendary'
  },
  {
    id: 'test-veteran',
    name: 'Test Veteran',
    description: 'Complete 10 practice tests',
    icon: 'Shield',
    xpReward: 250,
    category: 'test',
    rarity: 'epic'
  },

  // Study Mode Achievements
  {
    id: 'flashcard-fan',
    name: 'Flashcard Fan',
    description: 'Review 50 flashcards',
    icon: 'Layers',
    xpReward: 75,
    category: 'modes',
    rarity: 'common'
  },
  {
    id: 'match-maker',
    name: 'Match Maker',
    description: 'Complete 5 matching games',
    icon: 'Grid',
    xpReward: 75,
    category: 'modes',
    rarity: 'common'
  },
  {
    id: 'scenario-solver',
    name: 'Scenario Solver',
    description: 'Complete 10 scenario mode decisions',
    icon: 'GitBranch',
    xpReward: 100,
    category: 'modes',
    rarity: 'uncommon'
  },
  {
    id: 'all-modes',
    name: 'Jack of All Trades',
    description: 'Try all 7 study modes',
    icon: 'Compass',
    xpReward: 150,
    category: 'modes',
    rarity: 'uncommon'
  },

  // Volume Achievements
  {
    id: 'hundred-questions',
    name: 'Century Mark',
    description: 'Answer 100 questions total',
    icon: 'Hash',
    xpReward: 100,
    category: 'volume',
    rarity: 'common'
  },
  {
    id: 'five-hundred-questions',
    name: 'High Flyer',
    description: 'Answer 500 questions total',
    icon: 'TrendingUp',
    xpReward: 250,
    category: 'volume',
    rarity: 'uncommon'
  },
  {
    id: 'thousand-questions',
    name: 'Knowledge Seeker',
    description: 'Answer 1000 questions total',
    icon: 'BookOpen',
    xpReward: 500,
    category: 'volume',
    rarity: 'rare'
  }
];

// Get achievement by ID
export const getAchievementById = (id) => {
  return achievements.find(a => a.id === id) || null;
};

// Get achievements by category
export const getAchievementsByCategory = (category) => {
  return achievements.filter(a => a.category === category);
};

// Get achievements by rarity
export const getAchievementsByRarity = (rarity) => {
  return achievements.filter(a => a.rarity === rarity);
};

// Rarity colors for UI
export const rarityColors = {
  common: { bg: 'bg-gray-100', text: 'text-gray-600', border: 'border-gray-300' },
  uncommon: { bg: 'bg-green-100', text: 'text-green-600', border: 'border-green-300' },
  rare: { bg: 'bg-blue-100', text: 'text-blue-600', border: 'border-blue-300' },
  epic: { bg: 'bg-purple-100', text: 'text-purple-600', border: 'border-purple-300' },
  legendary: { bg: 'bg-yellow-100', text: 'text-yellow-600', border: 'border-yellow-300' }
};

// Category labels
export const categoryLabels = {
  milestone: 'Milestones',
  accuracy: 'Accuracy',
  mastery: 'Category Mastery',
  speed: 'Speed',
  streak: 'Streaks',
  time: 'Time-Based',
  test: 'Practice Tests',
  modes: 'Study Modes',
  volume: 'Volume'
};

export default achievements;
