import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Gauge,
  Map,
  PlaneTakeoff,
  Cloud,
  Brain,
  Scale,
  ChevronRight,
  Play
} from 'lucide-react';
import { Card, Button, ProgressBar } from '../components/common';
import { useProgress } from '../contexts/ProgressContext';
import { categories } from '../data/questions';

// Map category IDs to icons
const categoryIcons = {
  'performance': Gauge,
  'airspace': Map,
  'airport-operations': PlaneTakeoff,
  'weather': Cloud,
  'human-factors': Brain,
  'regulations': Scale,
};

// Map category IDs to brand color variations (navy + rust)
const categoryColors = {
  'performance': { bg: 'bg-navy-500' },
  'airspace': { bg: 'bg-rust-500' },
  'airport-operations': { bg: 'bg-navy-800' },
  'weather': { bg: 'bg-navy-400' },
  'human-factors': { bg: 'bg-rust-700' },
  'regulations': { bg: 'bg-navy-700' },
};

const Categories = () => {
  const { getCategoryStats, getAllCategoryProgress } = useProgress();
  const categoryProgress = getAllCategoryProgress();

  return (
    <div className="container-app py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-display font-bold text-navy-900 mb-2">
          Study Categories
        </h1>
        <p className="text-navy-600">
          Choose a category to start studying or take a full practice test
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        <Link to="/study/quiz">
          <Card hover className="flex items-center gap-4 bg-navy-50 border-2 border-navy-200">
            <div className="w-12 h-12 bg-navy-700 rounded-xl flex items-center justify-center">
              <Play className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900">Quick Quiz</h3>
              <p className="text-sm text-gray-600">Random questions from all categories</p>
            </div>
            <ChevronRight className="w-5 h-5 text-navy-700" />
          </Card>
        </Link>

        <Link to="/study/practice-test">
          <Card hover className="flex items-center gap-4 bg-rust-50 border-2 border-rust-200">
            <div className="w-12 h-12 bg-rust-500 rounded-xl flex items-center justify-center">
              <Scale className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900">Practice Test</h3>
              <p className="text-sm text-gray-600">60 questions, 2 hours, just like the real exam</p>
            </div>
            <ChevronRight className="w-5 h-5 text-rust-500" />
          </Card>
        </Link>
      </div>

      {/* Categories Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => {
          const Icon = categoryIcons[category.id] || Brain;
          const colors = categoryColors[category.id] || { bg: 'bg-navy-700' };
          const stats = getCategoryStats(category.id);
          const hasQuestions = category.questions && category.questions.length > 0;
          const completionPercent = hasQuestions
            ? Math.round((stats.uniqueQuestions / category.questionCount) * 100)
            : 0;

          return (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <Card className="h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center shrink-0`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900">{category.name}</h3>
                    <p className="text-sm text-gray-500">{category.questionCount} questions</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-4 flex-1">
                  {category.description}
                </p>

                {/* Progress */}
                {hasQuestions && (
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-500">Progress</span>
                      <span className="font-medium text-gray-900">
                        {stats.uniqueQuestions}/{category.questionCount}
                      </span>
                    </div>
                    <ProgressBar
                      value={completionPercent}
                      color={stats.accuracy >= 70 ? 'success' : 'primary'}
                      size="sm"
                    />
                    {stats.questionsAnswered > 0 && (
                      <p className="text-xs text-gray-500 mt-1">
                        {stats.accuracy}% accuracy
                      </p>
                    )}
                  </div>
                )}

                {/* Actions */}
                <div className="flex gap-2">
                  {hasQuestions ? (
                    <>
                      <Link to={`/study/quiz?category=${category.id}`} className="flex-1">
                        <Button variant="primary" fullWidth size="sm">
                          Study
                        </Button>
                      </Link>
                      <Link to={`/study/flashcards?category=${category.id}`}>
                        <Button variant="outline" size="sm">
                          Flashcards
                        </Button>
                      </Link>
                    </>
                  ) : (
                    <Button variant="ghost" fullWidth size="sm" disabled>
                      Coming Soon
                    </Button>
                  )}
                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>

      {/* Study Modes Info */}
      <div className="mt-12">
        <h2 className="text-xl font-display font-bold text-navy-900 mb-4">
          Other Study Modes
        </h2>
        <div className="grid md:grid-cols-4 gap-4">
          <Link to="/study/flashcards">
            <Card hover padding="sm" className="text-center">
              <h3 className="font-medium text-gray-900">Flashcards</h3>
              <p className="text-xs text-gray-500">Quick review</p>
            </Card>
          </Link>
          <Link to="/study/speed-round">
            <Card hover padding="sm" className="text-center">
              <h3 className="font-medium text-gray-900">Speed Round</h3>
              <p className="text-xs text-gray-500">Timed challenge</p>
            </Card>
          </Link>
          <Link to="/study/matching">
            <Card hover padding="sm" className="text-center">
              <h3 className="font-medium text-gray-900">Matching</h3>
              <p className="text-xs text-gray-500">Memory game</p>
            </Card>
          </Link>
          <Link to="/study/scenario">
            <Card hover padding="sm" className="text-center">
              <h3 className="font-medium text-gray-900">Scenarios</h3>
              <p className="text-xs text-gray-500">Real-world situations</p>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Categories;
