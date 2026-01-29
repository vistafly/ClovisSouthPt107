// Question Data Index
// Central export for all question categories

import { performanceQuestions } from './performance';
import { airspaceQuestions } from './airspace';
import { airportOperationsQuestions } from './airportOperations';
import { weatherQuestions } from './weather';
import { humanFactorsQuestions } from './humanFactors';
import { regulationsQuestions } from './regulations';
import { getQuestionHistory } from '../../services/storageService';

// Category metadata with icons (using Lucide icon names)
export const categories = [
  {
    id: 'performance',
    name: 'Performance & Weight/Balance',
    shortName: 'Performance',
    description: 'Density altitude, load factors, CG, stalls, propeller efficiency',
    icon: 'Gauge',
    color: 'blue',
    questionCount: 37,
    questions: performanceQuestions
  },
  {
    id: 'airspace',
    name: 'Airspace',
    shortName: 'Airspace',
    description: 'Airspace classes, sectional charts, TFRs, NOTAMs',
    icon: 'Map',
    color: 'purple',
    questionCount: 60,
    questions: airspaceQuestions
  },
  {
    id: 'airport-operations',
    name: 'Airport Operations',
    shortName: 'Airport Ops',
    description: 'Runway markings, taxiway signs, radio communications, traffic patterns',
    icon: 'PlaneTakeoff',
    color: 'green',
    questionCount: 60,
    questions: airportOperationsQuestions
  },
  {
    id: 'weather',
    name: 'Weather',
    shortName: 'Weather',
    description: 'METARs, TAFs, cloud types, fronts, hazardous weather',
    icon: 'Cloud',
    color: 'cyan',
    questionCount: 60,
    questions: weatherQuestions
  },
  {
    id: 'human-factors',
    name: 'Human Factors & ADM',
    shortName: 'Human Factors',
    description: 'Hazardous attitudes, IMSAFE checklist, aeronautical decision making',
    icon: 'Brain',
    color: 'orange',
    questionCount: 30,
    questions: humanFactorsQuestions
  },
  {
    id: 'regulations',
    name: 'Regulations',
    shortName: 'Regulations',
    description: 'Part 107 rules, registration, waivers, operational requirements',
    icon: 'Scale',
    color: 'red',
    questionCount: 60,
    questions: regulationsQuestions
  }
];

// Get all questions combined
export const getAllQuestions = () => {
  return categories.flatMap(cat => cat.questions);
};

// Get questions by category ID
export const getQuestionsByCategory = (categoryId) => {
  const category = categories.find(cat => cat.id === categoryId);
  return category ? category.questions : [];
};

// Get a single question by ID
export const getQuestionById = (questionId) => {
  const allQuestions = getAllQuestions();
  return allQuestions.find(q => q.id === questionId) || null;
};

// Get random questions (optionally filtered by category)
export const getRandomQuestions = (count, categoryId = null) => {
  let pool = categoryId ? getQuestionsByCategory(categoryId) : getAllQuestions();

  // Shuffle using Fisher-Yates algorithm
  const shuffled = [...pool];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled.slice(0, Math.min(count, shuffled.length));
};

// Get questions by difficulty
export const getQuestionsByDifficulty = (difficulty, categoryId = null) => {
  const questions = categoryId ? getQuestionsByCategory(categoryId) : getAllQuestions();
  return questions.filter(q => q.difficulty === difficulty);
};

// Get questions by tag
export const getQuestionsByTag = (tag, categoryId = null) => {
  const questions = categoryId ? getQuestionsByCategory(categoryId) : getAllQuestions();
  return questions.filter(q => q.tags && q.tags.includes(tag));
};

// Get category by ID
export const getCategoryById = (categoryId) => {
  return categories.find(cat => cat.id === categoryId) || null;
};

// Get total question count
export const getTotalQuestionCount = () => {
  return categories.reduce((total, cat) => total + cat.questionCount, 0);
};

// Get questions that use a specific figure
export const getQuestionsByFigure = (figureRef) => {
  const allQuestions = getAllQuestions();
  return allQuestions.filter(q => q.figureRef === figureRef);
};

// Get "struggle" questions - questions the user has gotten wrong 3+ times
const getStruggleQuestionIds = () => {
  const history = getQuestionHistory();
  const wrongCounts = {};

  history.forEach(entry => {
    if (!entry.isCorrect) {
      wrongCounts[entry.questionId] = (wrongCounts[entry.questionId] || 0) + 1;
    }
  });

  // Return IDs of questions wrong 3+ times
  return new Set(
    Object.entries(wrongCounts)
      .filter(([, count]) => count >= 3)
      .map(([id]) => id)
  );
};

// Smart question selection that prevents duplicates in a session
// Struggle questions (wrong 3+ times) can appear up to 2 times for reinforcement
export const getSmartQuestions = (count, categoryId = null) => {
  const pool = categoryId ? getQuestionsByCategory(categoryId) : getAllQuestions();
  const struggleIds = getStruggleQuestionIds();

  // Build weighted pool: struggle questions can appear twice
  const weightedPool = [];
  pool.forEach(question => {
    weightedPool.push(question);
    // Add struggle questions a second time for potential reinforcement
    if (struggleIds.has(question.id)) {
      weightedPool.push({ ...question, _isRepeat: true });
    }
  });

  // Shuffle using Fisher-Yates
  const shuffled = [...weightedPool];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  // Select questions, tracking how many times each has been picked
  const selected = [];
  const pickedCounts = {};

  for (const question of shuffled) {
    if (selected.length >= count) break;

    const currentCount = pickedCounts[question.id] || 0;
    const isStruggle = struggleIds.has(question.id);
    const maxAllowed = isStruggle ? 2 : 1;

    if (currentCount < maxAllowed) {
      // Remove the internal marker and add struggle flag
      const cleanQuestion = { ...question };
      delete cleanQuestion._isRepeat;
      // Mark struggle questions so UI can display a badge
      if (isStruggle) {
        cleanQuestion.isStruggleQuestion = true;
      }
      selected.push(cleanQuestion);
      pickedCounts[question.id] = currentCount + 1;
    }
  }

  // Final shuffle to mix up any repeated struggle questions
  for (let i = selected.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [selected[i], selected[j]] = [selected[j], selected[i]];
  }

  return selected;
};

export default {
  categories,
  getAllQuestions,
  getQuestionsByCategory,
  getQuestionById,
  getRandomQuestions,
  getSmartQuestions,
  getQuestionsByDifficulty,
  getQuestionsByTag,
  getCategoryById,
  getTotalQuestionCount,
  getQuestionsByFigure
};
