import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Plane,
  BookOpen,
  Trophy,
  Clock,
  CheckCircle,
  ChevronRight,
  Zap,
  Brain,
  Target,
  Layers,
  Gauge,
  Map,
  PlaneTakeoff,
  Cloud,
  Scale
} from 'lucide-react';

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
const categoryStyles = {
  'performance': { bg: 'bg-navy-500' },
  'airspace': { bg: 'bg-rust-500' },
  'airport-operations': { bg: 'bg-navy-800' },
  'weather': { bg: 'bg-navy-400' },
  'human-factors': { bg: 'bg-rust-700' },
  'regulations': { bg: 'bg-navy-700' },
};
import { Button, Card } from '../components/common';
import { useUser } from '../contexts/UserContext';
import { useProgress } from '../contexts/ProgressContext';
import { getTotalQuestionCount, categories } from '../data/questions';

const Home = () => {
  const { profile, streak } = useUser();
  const { getCompletionPercentage, getOverallStats } = useProgress();

  const stats = getOverallStats();
  const completion = getCompletionPercentage();
  const totalQuestions = getTotalQuestionCount();

  const features = [
    {
      icon: BookOpen,
      title: '307 Practice Questions',
      description: 'Comprehensive question bank covering all Part 107 topics'
    },
    {
      icon: Zap,
      title: '7 Study Modes',
      description: 'Quiz, Flashcards, Practice Tests, Speed Rounds, and more'
    },
    {
      icon: Target,
      title: 'Progress Tracking',
      description: 'Track your accuracy, streaks, and weak areas'
    },
    {
      icon: Trophy,
      title: 'Achievements & XP',
      description: 'Earn badges and level up as you learn'
    }
  ];

  const studyModes = [
    {
      name: 'Quiz Mode',
      description: 'Practice with immediate feedback',
      icon: CheckCircle,
      href: '/study/quiz',
      color: 'bg-navy-700'
    },
    {
      name: 'Flashcards',
      description: 'Review concepts quickly',
      icon: Layers,
      href: '/study/flashcards',
      color: 'bg-rust-500'
    },
    {
      name: 'Practice Test',
      description: 'Simulate the real exam',
      icon: Clock,
      href: '/study/practice-test',
      color: 'bg-navy-600'
    },
    {
      name: 'Speed Round',
      description: 'Test your quick thinking',
      icon: Zap,
      href: '/study/speed-round',
      color: 'bg-rust-600'
    }
  ];

  return (
    <div>
      {/* Hero Section - Clean white background with prominent logo */}
      <section className="relative overflow-hidden bg-white border-b border-gray-100">
        <div className="container-app relative py-16 md:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rust-50 text-rust-600 text-sm font-medium mb-6">
                <Plane className="w-4 h-4" />
                FAA Part 107 Certification
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-navy-900 mb-4">
                Ace Your Drone Pilot Certification
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Practice with {totalQuestions} questions, track your progress, and get ready to pass the FAA Remote Pilot exam.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/categories">
                  <Button size="lg" variant="accent" icon={BookOpen}>
                    Start Studying
                  </Button>
                </Link>
                <Link to="/study/practice-test">
                  <Button size="lg" variant="outline" icon={Clock}>
                    Take Practice Test
                  </Button>
                </Link>
              </div>

              {/* Stats Row */}
              {stats.totalAnswered > 0 && (
                <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-3 rounded-xl bg-gray-50">
                    <p className="text-2xl font-bold text-navy-800">{stats.totalAnswered}</p>
                    <p className="text-xs text-gray-500">Questions</p>
                  </div>
                  <div className="text-center p-3 rounded-xl bg-gray-50">
                    <p className="text-2xl font-bold text-navy-800">{stats.accuracy}%</p>
                    <p className="text-xs text-gray-500">Accuracy</p>
                  </div>
                  <div className="text-center p-3 rounded-xl bg-gray-50">
                    <p className="text-2xl font-bold text-rust-500">{streak.currentStreak}</p>
                    <p className="text-xs text-gray-500">Day Streak</p>
                  </div>
                  <div className="text-center p-3 rounded-xl bg-gray-50">
                    <p className="text-2xl font-bold text-rust-500">{profile.xp}</p>
                    <p className="text-xs text-gray-500">Total XP</p>
                  </div>
                </div>
              )}
            </motion.div>

            {/* Right: Logo */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <img
                  src={`${import.meta.env.BASE_URL}images/logo.webp`}
                  alt="Clovis South"
                  className="w-full max-w-md"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-app">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-navy-900 mb-3">
              Everything You Need to Pass
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our study platform is designed specifically for the FAA Part 107 Remote Pilot exam,
              covering all the topics you need to know.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full text-center" padding="lg">
                  <div className="w-12 h-12 bg-navy-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-6 h-6 text-navy-700" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Study Modes Section */}
      <section className="py-16 bg-white">
        <div className="container-app">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-navy-900 mb-3">
              Multiple Ways to Study
            </h2>
            <p className="text-gray-600">
              Choose the study mode that works best for you
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {studyModes.map((mode, index) => (
              <motion.div
                key={mode.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={mode.href}>
                  <Card hover className="h-full group">
                    <div className={`w-10 h-10 ${mode.color} rounded-lg flex items-center justify-center mb-4`}>
                      <mode.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-navy-700 transition-colors">
                      {mode.name}
                    </h3>
                    <p className="text-sm text-gray-600">{mode.description}</p>
                    <div className="mt-4 flex items-center text-rust-500 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      Start <ChevronRight className="w-4 h-4 ml-1" />
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/categories">
              <Button variant="outline" icon={BookOpen}>
                View All Study Options
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container-app">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-display font-bold text-navy-900 mb-3">
              6 Question Categories
            </h2>
            <p className="text-gray-600">
              {totalQuestions} questions covering all Part 107 topics
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((cat) => {
              const Icon = categoryIcons[cat.id] || Brain;
              const styles = categoryStyles[cat.id] || { bg: 'bg-navy-700', hoverBg: '', cardHover: '' };
              return (
                <Link key={cat.id} to={`/study/quiz?category=${cat.id}`}>
                  <Card hover className="flex items-center gap-4 group">
                    <div className={`w-11 h-11 ${styles.bg} rounded-xl flex items-center justify-center shrink-0`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900">{cat.shortName}</h3>
                      <p className="text-sm text-gray-500">{cat.questionCount} questions</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 transition-colors" />
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy-900 text-white">
        <div className="container-app text-center">
          <h2 className="text-3xl font-display font-bold mb-4">
            Ready to Get Certified?
          </h2>
          <p className="text-navy-200 mb-8 max-w-2xl mx-auto">
            Start practicing today and join students who have passed
            their FAA Part 107 exam using our study materials.
          </p>
          <Link to="/categories">
            <Button size="lg" variant="accent" icon={Plane}>
              Start Free Practice
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
