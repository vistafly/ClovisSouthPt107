import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Trophy,
  Flame,
  Target,
  Clock,
  TrendingUp,
  Award,
  ChevronRight,
  BookOpen,
  Gauge,
  Map,
  PlaneTakeoff,
  Cloud,
  Brain,
  Scale
} from 'lucide-react';
import { Card, Button, ProgressBar, CircularProgress } from '../components/common';
import { useUser } from '../contexts/UserContext';
import { useProgress } from '../contexts/ProgressContext';
import { categories, getTotalQuestionCount } from '../data/questions';

// Map category IDs to icons
const categoryIcons = {
  'performance': Gauge,
  'airspace': Map,
  'airport-operations': PlaneTakeoff,
  'weather': Cloud,
  'human-factors': Brain,
  'regulations': Scale,
};

const Dashboard = () => {
  const { profile, streak, xpProgress, getAllAchievementsWithStatus } = useUser();
  const { getOverallStats, getAllCategoryProgress, getWeakCategories, getCompletionPercentage } = useProgress();

  const stats = getOverallStats();
  const categoryProgress = getAllCategoryProgress();
  const weakCategories = getWeakCategories();
  const completion = getCompletionPercentage();
  const allAchievements = getAllAchievementsWithStatus();
  const unlockedAchievements = allAchievements.filter(a => a.unlocked);
  const recentAchievements = unlockedAchievements
    .sort((a, b) => new Date(b.unlockedAt) - new Date(a.unlockedAt))
    .slice(0, 3);

  return (
    <div className="container-app py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-display font-bold text-gray-900 mb-2">
          Welcome back, {profile.displayName}!
        </h1>
        <p className="text-gray-600">
          You&apos;re a <span className="font-medium text-blue-600">{profile.rank}</span> - keep up the great work!
        </p>
      </div>

      {/* Top Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card className="bg-gradient-to-br from-blue-600 to-blue-700 text-white">
          <div className="flex items-center gap-3">
            <Trophy className="w-8 h-8 opacity-80" />
            <div>
              <p className="text-blue-100 text-sm">Total XP</p>
              <p className="text-2xl font-bold">{profile.xp}</p>
            </div>
          </div>
          <div className="mt-3">
            <div className="flex justify-between text-xs text-blue-100 mb-1">
              <span>Level {profile.level}</span>
              <span>{xpProgress.toNext} XP to next</span>
            </div>
            <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
              <div
                className="h-full bg-white rounded-full transition-all"
                style={{ width: `${xpProgress.progress}%` }}
              />
            </div>
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white">
          <div className="flex items-center gap-3">
            <Flame className="w-8 h-8 opacity-80" />
            <div>
              <p className="text-orange-100 text-sm">Current Streak</p>
              <p className="text-2xl font-bold">{streak.currentStreak} days</p>
            </div>
          </div>
          <p className="mt-3 text-xs text-orange-100">
            Longest: {streak.longestStreak} days
          </p>
        </Card>

        <Card>
          <div className="flex items-center gap-3">
            <Target className="w-8 h-8 text-green-500" />
            <div>
              <p className="text-gray-500 text-sm">Accuracy</p>
              <p className="text-2xl font-bold text-gray-900">{stats.accuracy}%</p>
            </div>
          </div>
          <p className="mt-3 text-xs text-gray-500">
            {stats.totalCorrect} / {stats.totalAnswered} correct
          </p>
        </Card>

        <Card>
          <div className="flex items-center gap-3">
            <BookOpen className="w-8 h-8 text-purple-500" />
            <div>
              <p className="text-gray-500 text-sm">Questions Done</p>
              <p className="text-2xl font-bold text-gray-900">{stats.totalAnswered}</p>
            </div>
          </div>
          <p className="mt-3 text-xs text-gray-500">
            of {getTotalQuestionCount()} total
          </p>
        </Card>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Category Progress */}
          <Card>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Category Progress</h2>
              <Link to="/categories" className="text-sm text-blue-600 hover:text-blue-700">
                View All
              </Link>
            </div>

            <div className="space-y-4">
              {categories.map((cat) => {
                const progress = categoryProgress.find(p => p.id === cat.id);
                const Icon = categoryIcons[cat.id] || Brain;
                const hasQuestions = cat.questions && cat.questions.length > 0;
                const percent = hasQuestions && progress
                  ? Math.round((progress.uniqueQuestions / cat.questionCount) * 100)
                  : 0;

                return (
                  <div key={cat.id} className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-gray-600" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium text-gray-900 truncate">
                          {cat.shortName}
                        </span>
                        <span className="text-xs text-gray-500">
                          {hasQuestions ? `${progress?.uniqueQuestions || 0}/${cat.questionCount}` : 'Coming Soon'}
                        </span>
                      </div>
                      <ProgressBar
                        value={percent}
                        size="sm"
                        color={progress?.accuracy >= 70 ? 'success' : 'primary'}
                        animate={false}
                      />
                    </div>
                    {hasQuestions && (
                      <Link to={`/study/quiz?category=${cat.id}`}>
                        <Button variant="ghost" size="sm">
                          <ChevronRight className="w-4 h-4" />
                        </Button>
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>
          </Card>

          {/* Weak Areas */}
          {weakCategories.length > 0 && (
            <Card>
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Areas to Improve
              </h2>
              <div className="space-y-3">
                {weakCategories.map((cat) => {
                  const Icon = categoryIcons[cat.id] || Brain;
                  return (
                    <Link
                      key={cat.id}
                      to={`/study/quiz?category=${cat.id}`}
                      className="flex items-center gap-4 p-3 rounded-xl bg-red-50 hover:bg-red-100 transition-colors"
                    >
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-red-600" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-gray-900">{cat.shortName}</p>
                        <p className="text-sm text-red-600">{cat.accuracy}% accuracy</p>
                      </div>
                      <Button variant="ghost" size="sm" className="text-red-600">
                        Practice
                      </Button>
                    </Link>
                  );
                })}
              </div>
            </Card>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Overall Progress */}
          <Card className="text-center">
            <h3 className="text-sm font-medium text-gray-500 mb-4">Overall Completion</h3>
            <CircularProgress
              value={completion}
              size={140}
              strokeWidth={10}
              color={completion >= 70 ? 'success' : 'primary'}
              label="Complete"
            />
            <p className="mt-4 text-sm text-gray-600">
              {completion >= 70
                ? "Great progress! You're ready for the exam."
                : "Keep studying to improve your score!"}
            </p>
          </Card>

          {/* Recent Achievements */}
          <Card>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900">Achievements</h3>
              <span className="text-xs text-gray-500">
                {unlockedAchievements.length} / {allAchievements.length}
              </span>
            </div>

            {recentAchievements.length > 0 ? (
              <div className="space-y-3">
                {recentAchievements.map((achievement) => (
                  <div
                    key={achievement.id}
                    className="flex items-center gap-3 p-2 rounded-lg bg-amber-50"
                  >
                    <div className="w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                      <Award className="w-4 h-4 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {achievement.name}
                      </p>
                      <p className="text-xs text-gray-500">+{achievement.xpReward} XP</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-500 text-center py-4">
                Start studying to unlock achievements!
              </p>
            )}

            <Link to="/achievements" className="block mt-4">
              <Button variant="outline" fullWidth size="sm">
                View All Achievements
              </Button>
            </Link>
          </Card>

          {/* Quick Actions */}
          <Card>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <Link to="/study/quiz">
                <Button variant="primary" fullWidth>
                  Continue Studying
                </Button>
              </Link>
              <Link to="/study/practice-test">
                <Button variant="outline" fullWidth>
                  Take Practice Test
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
