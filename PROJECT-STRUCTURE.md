# Project File Structure Template

Create these files in the following order:

## 1. Project Setup Files

### package.json
```json
{
  "name": "part107-study",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.20.0",
    "firebase": "^10.7.0",
    "framer-motion": "^10.16.0",
    "lucide-react": "^0.294.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "@vitejs/plugin-react": "^4.2.0",
    "autoprefixer": "^10.4.16",
    "postcss": "^8.4.32",
    "tailwindcss": "^3.3.6",
    "vite": "^5.0.0"
  }
}
```

### vite.config.js
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

### tailwind.config.js
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'faa-blue': '#003366',
        'faa-gold': '#FFD700',
        'sky-light': '#87CEEB',
        'success': '#22c55e',
        'warning': '#f59e0b',
        'danger': '#ef4444',
      },
      fontFamily: {
        'display': ['Poppins', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
    },
  },
  plugins: [],
}
```

### postcss.config.js
```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

### index.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/drone-icon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Part 107 Study Hub - Pass Your Drone Pilot Test</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700;800&display=swap" rel="stylesheet">
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

---

## 2. Source Files Structure

```
src/
├── main.jsx
├── App.jsx
├── index.css
├── components/
│   ├── auth/
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   └── ProtectedRoute.jsx
│   ├── common/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── LoadingSpinner.jsx
│   │   ├── ProgressBar.jsx
│   │   ├── Modal.jsx
│   │   └── Toast.jsx
│   ├── study/
│   │   ├── QuestionCard.jsx
│   │   ├── HelpButton.jsx
│   │   ├── ExplanationPanel.jsx
│   │   ├── FigureViewer.jsx
│   │   ├── AnswerFeedback.jsx
│   │   └── CategorySelector.jsx
│   ├── modes/
│   │   ├── FlashcardMode.jsx
│   │   ├── QuizMode.jsx
│   │   ├── PracticeTestMode.jsx
│   │   ├── MatchingGameMode.jsx
│   │   ├── SpeedRoundMode.jsx
│   │   ├── TeachMeMode.jsx
│   │   └── ScenarioMode.jsx
│   └── dashboard/
│       ├── UserDashboard.jsx
│       ├── ProgressChart.jsx
│       ├── CategoryProgress.jsx
│       ├── Achievements.jsx
│       └── StudyStreak.jsx
├── contexts/
│   ├── AuthContext.jsx
│   └── ProgressContext.jsx
├── data/
│   ├── questions/
│   │   ├── index.js
│   │   ├── performance.js
│   │   ├── airspace.js
│   │   ├── airportOperations.js
│   │   ├── weather.js
│   │   ├── humanFactors.js
│   │   └── regulations.js
│   ├── figures/
│   │   └── figureIndex.js
│   └── achievements.js
├── hooks/
│   ├── useQuestions.js
│   ├── useProgress.js
│   ├── useTimer.js
│   └── useAchievements.js
├── pages/
│   ├── Home.jsx
│   ├── Dashboard.jsx
│   ├── Study.jsx
│   ├── Categories.jsx
│   ├── Profile.jsx
│   ├── Leaderboard.jsx
│   └── Settings.jsx
├── services/
│   ├── firebase.js
│   └── progressService.js
└── utils/
    ├── shuffleArray.js
    ├── calculateScore.js
    ├── formatTime.js
    └── constants.js
```

---

## 3. Key File Contents

### src/main.jsx
```jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { AuthProvider } from './contexts/AuthContext'
import { ProgressProvider } from './contexts/ProgressContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <ProgressProvider>
          <App />
        </ProgressProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
```

### src/index.css
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --color-primary: #0066CC;
  --color-secondary: #1A1A2E;
  --color-accent: #FFD700;
  --color-success: #22C55E;
  --color-error: #EF4444;
  --color-warning: #F59E0B;
}

body {
  font-family: 'Inter', sans-serif;
  @apply bg-gray-50 text-gray-900;
}

h1, h2, h3, h4, h5, h6 {
  font-family: 'Poppins', sans-serif;
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  @apply bg-gray-100;
}

::-webkit-scrollbar-thumb {
  @apply bg-gray-300 rounded-full;
}

::-webkit-scrollbar-thumb:hover {
  @apply bg-gray-400;
}

/* Utility classes */
@layer utilities {
  .text-gradient {
    @apply bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent;
  }
  
  .card-shadow {
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 
                0 2px 4px -1px rgba(0, 0, 0, 0.06),
                0 0 0 1px rgba(0, 0, 0, 0.02);
  }
  
  .card-hover {
    @apply transition-all duration-200 hover:shadow-lg hover:-translate-y-1;
  }
}
```

### src/App.jsx
```jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Study from './pages/Study';
import Categories from './pages/Categories';
import Profile from './pages/Profile';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ProtectedRoute from './components/auth/ProtectedRoute';
import LoadingSpinner from './components/common/LoadingSpinner';

function App() {
  const { currentUser, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="large" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={!currentUser ? <Login /> : <Navigate to="/dashboard" />} />
          <Route path="/register" element={!currentUser ? <Register /> : <Navigate to="/dashboard" />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/study/:mode" element={<Study />} />
          <Route path="/study/:mode/:category" element={<Study />} />
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
          <Route 
            path="/profile" 
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            } 
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
```

---

## 4. Data Files

### src/data/questions/index.js
```javascript
import { performanceQuestions } from './performance';
import { airspaceQuestions } from './airspace';
import { airportOperationsQuestions } from './airportOperations';
import { weatherQuestions } from './weather';
import { humanFactorsQuestions } from './humanFactors';
import { regulationsQuestions } from './regulations';

export const allQuestions = [
  ...performanceQuestions,
  ...airspaceQuestions,
  ...airportOperationsQuestions,
  ...weatherQuestions,
  ...humanFactorsQuestions,
  ...regulationsQuestions,
];

export const questionsByCategory = {
  performance: performanceQuestions,
  airspace: airspaceQuestions,
  'airport-operations': airportOperationsQuestions,
  weather: weatherQuestions,
  'human-factors': humanFactorsQuestions,
  regulations: regulationsQuestions,
};

export const categories = [
  {
    id: 'performance',
    name: 'Performance & Weight/Balance',
    icon: 'Scale',
    color: 'blue',
    description: 'Density altitude, load factors, CG limits, and aircraft performance',
    questionCount: performanceQuestions.length,
  },
  {
    id: 'airspace',
    name: 'Airspace',
    icon: 'MapPin',
    color: 'purple',
    description: 'Airspace classifications, sectional charts, and TFRs',
    questionCount: airspaceQuestions.length,
  },
  {
    id: 'airport-operations',
    name: 'Airport Operations',
    icon: 'Plane',
    color: 'green',
    description: 'Runway markings, taxiway signs, and radio communications',
    questionCount: airportOperationsQuestions.length,
  },
  {
    id: 'weather',
    name: 'Weather',
    icon: 'Cloud',
    color: 'cyan',
    description: 'METARs, TAFs, cloud types, and weather hazards',
    questionCount: weatherQuestions.length,
  },
  {
    id: 'human-factors',
    name: 'Human Factors & ADM',
    icon: 'Brain',
    color: 'orange',
    description: 'Aeronautical decision making, hazardous attitudes, and fitness',
    questionCount: humanFactorsQuestions.length,
  },
  {
    id: 'regulations',
    name: 'Regulations',
    icon: 'FileText',
    color: 'red',
    description: 'Part 107 rules, registration, and operating requirements',
    questionCount: regulationsQuestions.length,
  },
];

export const getRandomQuestions = (count, categoryId = null) => {
  const source = categoryId ? questionsByCategory[categoryId] : allQuestions;
  const shuffled = [...source].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

export const getQuestionById = (id) => {
  return allQuestions.find(q => q.id === id);
};
```

---

## 5. Firebase Configuration

### src/services/firebase.js
```javascript
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// IMPORTANT: Replace with your Firebase config
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
```

### .env.local (create this file - DO NOT commit to git)
```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

---

## 6. Public Assets

Create these directories:
```
public/
├── figures/           # Place extracted FAA figures here
├── icons/             # App icons
└── sounds/            # Sound effects for gamification (optional)
```
