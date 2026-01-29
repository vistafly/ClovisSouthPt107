import { HashRouter, Routes, Route } from 'react-router-dom';
import { UserProvider } from './contexts/UserContext';
import { ProgressProvider } from './contexts/ProgressContext';
import { ToastProvider } from './components/common/Toast';
import Layout from './components/Layout';
import { Home, Dashboard, Categories, Settings } from './pages';
import QuizMode from './components/modes/QuizMode';
import FlashcardMode from './components/modes/FlashcardMode';
import PracticeTestMode from './components/modes/PracticeTestMode';
import SpeedRoundMode from './components/modes/SpeedRoundMode';
import AchievementsPage from './pages/Achievements';

function App() {
  return (
    <HashRouter>
      <UserProvider>
        <ProgressProvider>
          <ToastProvider>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="categories" element={<Categories />} />
                <Route path="settings" element={<Settings />} />

                {/* Study Modes */}
                <Route path="study/quiz" element={<QuizMode />} />
                <Route path="study/flashcards" element={<FlashcardMode />} />
                <Route path="study/practice-test" element={<PracticeTestMode />} />
                <Route path="study/speed-round" element={<SpeedRoundMode />} />

                {/* Placeholder routes for future modes */}
                <Route path="study/matching" element={<ComingSoon mode="Matching Game" />} />
                <Route path="study/teach-me" element={<ComingSoon mode="Teach Me" />} />
                <Route path="study/scenario" element={<ComingSoon mode="Scenario" />} />

                {/* Achievements page */}
                <Route path="achievements" element={<AchievementsPage />} />
              </Route>
            </Routes>
          </ToastProvider>
        </ProgressProvider>
      </UserProvider>
    </HashRouter>
  );
}

// Coming Soon placeholder
function ComingSoon({ mode }) {
  return (
    <div className="container-app py-16 text-center">
      <h1 className="text-3xl font-display font-bold text-gray-900 mb-4">
        {mode} Mode
      </h1>
      <p className="text-gray-600 mb-8">
        This study mode is coming soon! Check back later.
      </p>
      <a href="#/categories" className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors">
        Back to Categories
      </a>
    </div>
  );
}

export default App;
