# Part 107 Study Website - Complete Build Instructions for Claude Code

## Project Overview

Build a comprehensive FAA Part 107 drone pilot certification study website designed for high school students. The application should be engaging, modern, and include multiple innovative study modes with Firebase authentication and progress tracking.

---

## Table of Contents

1. [Project Setup](#1-project-setup)
2. [Firebase Configuration](#2-firebase-configuration)
3. [Question Database Structure](#3-question-database-structure)
4. [Core Features to Implement](#4-core-features-to-implement)
5. [Study Modes](#5-study-modes)
6. [UI/UX Requirements](#6-uiux-requirements)
7. [Component Structure](#7-component-structure)
8. [Data Files](#8-data-files)
9. [Testing & Deployment](#9-testing--deployment)

---

## 1. Project Setup

### Tech Stack
- **Frontend**: React 18+ with Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM v6
- **Authentication & Database**: Firebase (Auth + Firestore)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **State Management**: React Context API

### Initial Setup Commands
```bash
npm create vite@latest part107-study -- --template react
cd part107-study
npm install
npm install react-router-dom firebase lucide-react framer-motion
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Tailwind Configuration
Update `tailwind.config.js`:
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
    },
  },
  plugins: [],
}
```

### Project Structure
```
src/
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
│   │   └── Modal.jsx
│   ├── study/
│   │   ├── QuestionCard.jsx
│   │   ├── HelpButton.jsx
│   │   ├── ExplanationPanel.jsx
│   │   ├── FigureViewer.jsx
│   │   └── AnswerFeedback.jsx
│   ├── modes/
│   │   ├── FlashcardMode.jsx
│   │   ├── QuizMode.jsx
│   │   ├── PracticeTestMode.jsx
│   │   ├── MatchingGameMode.jsx
│   │   ├── FillBlankMode.jsx
│   │   ├── SpeedRoundMode.jsx
│   │   └── TeachMeMode.jsx
│   └── dashboard/
│       ├── UserDashboard.jsx
│       ├── ProgressChart.jsx
│       ├── CategoryProgress.jsx
│       └── Achievements.jsx
├── contexts/
│   ├── AuthContext.jsx
│   └── ProgressContext.jsx
├── data/
│   ├── questions/
│   │   ├── performance.js
│   │   ├── airspace.js
│   │   ├── airport-operations.js
│   │   ├── weather.js
│   │   ├── human-factors.js
│   │   └── regulations.js
│   ├── figures/
│   │   └── figureIndex.js
│   └── explanations/
│       └── detailedExplanations.js
├── hooks/
│   ├── useQuestions.js
│   ├── useProgress.js
│   └── useTimer.js
├── pages/
│   ├── Home.jsx
│   ├── Dashboard.jsx
│   ├── Study.jsx
│   ├── Categories.jsx
│   ├── Profile.jsx
│   └── Settings.jsx
├── services/
│   ├── firebase.js
│   └── progressService.js
├── utils/
│   ├── shuffleArray.js
│   ├── calculateScore.js
│   └── formatTime.js
├── App.jsx
├── main.jsx
└── index.css
```

---

## 2. Firebase Configuration

### Firebase Setup
Create `src/services/firebase.js`:
```javascript
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  // User will add their own Firebase config here
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
```

### Firestore Data Structure
```
users/
  {userId}/
    profile/
      displayName: string
      email: string
      createdAt: timestamp
      lastLogin: timestamp
    progress/
      {categoryId}/
        totalQuestions: number
        correctAnswers: number
        incorrectAnswers: number
        questionsAnswered: []  // Array of question IDs
        lastStudied: timestamp
    achievements/
      {achievementId}/
        unlockedAt: timestamp
        name: string
    settings/
      darkMode: boolean
      soundEffects: boolean
      studyReminders: boolean
```

---

## 3. Question Database Structure

### Question Object Schema
Each question should follow this structure:
```javascript
{
  id: "perf-001",                    // Unique ID (category-number)
  category: "performance",           // Category slug
  categoryName: "Performance & Weight/Balance",
  question: "Question text here...",
  options: [
    { id: "A", text: "Option A text" },
    { id: "B", text: "Option B text" },
    { id: "C", text: "Option C text" }
  ],
  correctAnswer: "B",
  explanation: "Detailed explanation of why B is correct...",
  hint: "A shorter hint to help without giving away the answer",
  figureRef: "figure-2" | null,      // Reference to figure if needed
  difficulty: "easy" | "medium" | "hard",
  tags: ["density-altitude", "propeller"],
  relatedQuestions: ["perf-002", "perf-008"],
  faaReference: "14 CFR 107.xx"      // Optional FAA regulation reference
}
```

### Categories
1. **Performance & Weight/Balance** (`performance`)
   - Density altitude
   - Load factors
   - Center of gravity
   - Stalls
   - Propeller efficiency

2. **Airspace** (`airspace`)
   - Class A, B, C, D, E, G airspace
   - Special use airspace
   - Reading sectional charts
   - TFRs

3. **Airport Operations** (`airport-operations`)
   - Runway markings
   - Taxiway signs
   - Traffic patterns
   - Radio communications
   - NOTAMs

4. **Weather** (`weather`)
   - Cloud types
   - Fronts
   - TAFs and METARs
   - Density altitude weather effects
   - Thunderstorms

5. **Human Factors** (`human-factors`)
   - ADM (Aeronautical Decision Making)
   - Hazardous attitudes
   - IMSAFE checklist
   - Hyperventilation
   - CRM

6. **Regulations** (`regulations`)
   - Part 107 rules
   - Registration requirements
   - Reporting requirements
   - Waivers
   - Remote ID

---

## 4. Core Features to Implement

### 4.1 Authentication System
- Email/password registration and login
- Google sign-in option
- Password reset functionality
- Protected routes for authenticated users
- Guest mode (limited features without account)

### 4.2 Progress Tracking
Track and display:
- Overall progress percentage
- Category-specific progress
- Questions answered correctly/incorrectly
- Study streaks (consecutive days studied)
- Time spent studying
- Weak areas identification

### 4.3 Help System
Each question must have:
1. **Hint Button** - Shows a subtle hint without revealing the answer
2. **Explanation Button** - Available after answering, shows full explanation
3. **"Why Wrong?" Button** - If answered incorrectly, explains why each wrong answer is wrong
4. **Related Topics Link** - Links to related questions for deeper learning
5. **FAA Reference** - Shows the actual regulation when applicable

### 4.4 Figure Handling
- Create placeholder components for figures
- Display figure reference prominently when question requires one
- Allow zoom/pan on figures
- Include figure legend/key

```javascript
// Figure placeholder structure
const figures = {
  "figure-1": {
    title: "Angle of Attack Diagram",
    description: "Shows the acute angle A representing angle of attack",
    placeholder: true,  // Set to false when actual image is added
    imagePath: "/figures/figure-1.png"
  },
  "figure-2": {
    title: "Load Factor Chart",
    description: "Chart showing load factor vs bank angle",
    placeholder: true,
    imagePath: "/figures/figure-2.png"
  },
  // ... more figures
};
```

---

## 5. Study Modes

### 5.1 Flashcard Mode
- Show question on front, answer + explanation on back
- Swipe or click to flip
- Mark as "Know it" or "Need practice"
- Spaced repetition algorithm for review scheduling

### 5.2 Quiz Mode
- Multiple choice with immediate feedback
- Progress bar showing question number
- Timer optional
- Show explanation after each answer
- Score at the end with review of missed questions

### 5.3 Practice Test Mode
- Simulates actual FAA test conditions
- 60 questions randomly selected
- 2-hour time limit
- 70% passing score
- No hints during test
- Full review with explanations at end

### 5.4 Matching Game Mode (Innovative - for HS students)
- Match terms to definitions
- Match scenarios to correct actions
- Timed for gamification
- Leaderboard for competitive students

### 5.5 Fill in the Blank Mode
- Remove key terms from questions/explanations
- Student must recall the correct term
- Helps with memorization

### 5.6 Speed Round Mode (Innovative - for HS students)
- Quick-fire questions
- 10 seconds per question
- Earn points for speed + accuracy
- Combo multiplier for consecutive correct answers
- Sound effects and visual feedback
- Daily challenges

### 5.7 "Teach Me" Mode (Innovative - for HS students)
- AI-style conversational learning
- Breaks down complex topics into simple explanations
- Uses analogies relevant to teens (e.g., comparing airspace to video game zones)
- Interactive diagrams
- "Explain like I'm 5" option for difficult concepts

### 5.8 Scenario Mode
- Real-world drone operation scenarios
- "What would you do?" format
- Multiple decision points
- Consequences shown for each choice

---

## 6. UI/UX Requirements

### Design Philosophy
- **Modern and Clean**: Not boring or "government-like"
- **Gamified**: Progress bars, achievements, streaks
- **Mobile-First**: Responsive design, works on phones
- **Accessible**: High contrast, readable fonts, screen reader friendly
- **Engaging**: Animations, transitions, satisfying feedback

### Color Scheme
```css
:root {
  --primary: #0066CC;      /* Sky blue - trust, aviation */
  --secondary: #1A1A2E;    /* Dark navy - professionalism */
  --accent: #FFD700;       /* Gold - achievement */
  --success: #22C55E;      /* Green - correct */
  --error: #EF4444;        /* Red - incorrect */
  --warning: #F59E0B;      /* Orange - caution */
  --background: #F8FAFC;   /* Light gray */
  --card: #FFFFFF;         /* White cards */
  --text: #1F2937;         /* Dark text */
  --text-muted: #6B7280;   /* Gray text */
}
```

### Typography
- Headings: Poppins (bold, modern)
- Body: Inter (readable, clean)
- Code/Technical: JetBrains Mono

### Visual Elements
- Rounded corners (border-radius: 12px for cards)
- Subtle shadows for depth
- Gradient backgrounds for headers
- Icon-rich interface (Lucide icons)
- Micro-animations on interactions

### Gamification Elements
1. **XP System**: Earn XP for every correct answer
2. **Levels**: Progress through pilot ranks (Student → Private → Commercial → ATP)
3. **Achievements**: Unlock badges for milestones
4. **Streaks**: Track consecutive study days
5. **Leaderboard**: Optional competitive element

### Achievement Examples
- "First Flight" - Complete first study session
- "Perfect Landing" - Get 100% on a quiz
- "Night Owl" - Study after 10 PM
- "Early Bird" - Study before 7 AM
- "Category Master" - Complete all questions in a category
- "Speed Demon" - Answer 10 questions in under 60 seconds
- "Comeback Kid" - Improve score by 20% on retry
- "Consistent Flyer" - 7-day study streak

---

## 7. Component Structure

### Key Components to Build

#### QuestionCard.jsx
```jsx
// Props: question, onAnswer, showHint, showExplanation
// Features:
// - Displays question text
// - Shows figure if referenced
// - Renders answer options
// - Animates on selection
// - Shows correct/incorrect feedback
```

#### HelpButton.jsx
```jsx
// Props: type ('hint' | 'explain' | 'reference'), content, onClick
// Features:
// - Pulsing animation to draw attention
// - Tooltip preview
// - Modal for full content
```

#### ProgressBar.jsx
```jsx
// Props: current, total, label, color, animated
// Features:
// - Smooth fill animation
// - Percentage display
// - Optional label
```

#### StudyModeSelector.jsx
```jsx
// Displays all study modes as cards
// Shows which modes are locked (for guests)
// Recommended mode based on progress
```

#### CategoryCard.jsx
```jsx
// Props: category, progress, questionCount
// Features:
// - Icon for category
// - Progress ring
// - Question count
// - Click to study
```

---

## 8. Data Files

### Create the Question Data Files

The questions are provided in the original documents. Transform them into this format:

**Example: `/src/data/questions/performance.js`**
```javascript
export const performanceQuestions = [
  {
    id: "perf-001",
    category: "performance",
    categoryName: "Performance & Weight/Balance",
    question: "What effect does high density altitude have on the efficiency of a UA propeller?",
    options: [
      { id: "A", text: "Propeller efficiency is increased." },
      { id: "B", text: "Propeller efficiency is decreased." },
      { id: "C", text: "Density altitude does not affect propeller efficiency." }
    ],
    correctAnswer: "B",
    explanation: "High density altitude means the air is less dense (thinner). A propeller works by accelerating air molecules. When there are fewer air molecules (thinner air), the propeller has less 'stuff' to push against, making it less efficient. Think of it like trying to swim in water versus air - water gives more resistance to push against.",
    hint: "Think about what 'density' means - how much 'stuff' is in the air for the propeller to push.",
    figureRef: null,
    difficulty: "medium",
    tags: ["density-altitude", "propeller", "performance"],
    relatedQuestions: ["perf-008", "perf-018"],
    faaReference: null
  },
  // ... more questions
];
```

### Figure Index File
**`/src/data/figures/figureIndex.js`**
```javascript
export const figures = {
  "figure-1": {
    id: "figure-1",
    title: "Angle of Attack Diagram",
    description: "Diagram showing the relationship between chord line and relative wind",
    faaReference: "FAA-CT-8080-2H, Figure 1",
    placeholder: true,
    imagePath: "/figures/figure-1.png",
    usedInQuestions: ["perf-013", "perf-014"]
  },
  "figure-2": {
    id: "figure-2",
    title: "Load Factor Chart",
    description: "Chart showing load factor (G forces) at various bank angles",
    faaReference: "FAA-CT-8080-2H, Figure 2",
    placeholder: true,
    imagePath: "/figures/figure-2.png",
    usedInQuestions: ["perf-007", "perf-010", "perf-012", "perf-031", "perf-032"]
  },
  // Continue for all figures referenced in the questions...
  // Figures commonly referenced:
  // Figure 12 - METAR examples
  // Figure 15 - TAF examples
  // Figure 19 - Weather Prognostic Chart
  // Figure 20-26 - Sectional Chart excerpts
  // Figure 31 - Coeur d'Alene chart
  // Figure 48-50 - Airport diagrams
  // Figure 52 - Lincoln Municipal
  // Figure 59 - Military Training Routes
  // Figure 65 - Runway/Taxiway signs
  // Figure 69 - Corpus Christi area
  // Figure 71 - Georgetown Airport area
  // Figure 74-76 - Restricted areas
  // Figure 78 - Sioux City area
};
```

---

## 9. Testing & Deployment

### Testing Checklist
- [ ] All questions load correctly
- [ ] Authentication flows work (register, login, logout, reset password)
- [ ] Progress saves to Firebase
- [ ] All study modes function correctly
- [ ] Figure placeholders display properly
- [ ] Responsive design works on mobile
- [ ] Explanations show after each question
- [ ] Help buttons work correctly
- [ ] Timer functions in Practice Test mode
- [ ] Score calculations are accurate
- [ ] Achievements unlock correctly

### Deployment Options
1. **Vercel** (Recommended for React/Vite)
   ```bash
   npm install -g vercel
   vercel
   ```

2. **Firebase Hosting**
   ```bash
   npm install -g firebase-tools
   firebase login
   firebase init hosting
   npm run build
   firebase deploy
   ```

3. **Netlify**
   - Connect GitHub repo
   - Build command: `npm run build`
   - Publish directory: `dist`

---

## Additional Notes for Claude Code

### Priority Order
1. Set up project structure and routing
2. Implement authentication (Firebase)
3. Create question data files from provided content
4. Build QuestionCard and basic Quiz mode
5. Add progress tracking
6. Implement remaining study modes
7. Add gamification elements
8. Polish UI/UX
9. Test thoroughly

### Key Reminders
- Every question MUST have an explanation
- Include hint for every question
- Questions with figure references need clear "See Figure X" callouts
- Make explanations student-friendly (avoid jargon, use analogies)
- Test on mobile devices
- Keep loading times fast

### External Resources
- FAA Testing Supplement (figures): https://www.faa.gov/training_testing/testing/supplements
- Direct PDF link: https://www.faa.gov/sites/faa.gov/files/training_testing/testing/supplements/sport_rec_private_akts.pdf
- Part 107 Summary: https://www.faa.gov/sites/faa.gov/files/2021-08/Part_107_Summary.pdf

---

## Questions Data Location

All questions are provided in separate files in this instruction package:
- `questions-performance.js` - 37 questions on Performance & Weight/Balance
- `questions-airspace.js` - 60 questions on Airspace
- `questions-airport-ops.js` - 60 questions on Airport Operations
- `questions-weather.js` - 60 questions on Weather
- `questions-human-factors.js` - 30 questions on Human Factors/ADM
- `questions-regulations.js` - 60 questions on Part 107 Regulations

Total: ~307 questions
