# Matchmaker Dashboard MVP

A modern matchmaking dashboard built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Google Gemini AI**. The platform enables matchmakers to manage customer profiles, view detailed biodata, generate intelligent match suggestions, and receive AI-powered compatibility insights.

---

## Features

### Authentication

* Matchmaker login page
* Protected dashboard routes
* Session-based access control

### Customer Dashboard

* View all assigned customers
* Search customers by name
* Filter customers by city
* View customer profile details

### Detailed Customer Profiles

Each customer profile contains:

* Personal Information
* Contact Details
* Education Details
* Professional Information
* Marital Status
* Religion & Caste
* Languages Known
* Family Details
* Relocation Preference
* Pet Preference
* Children Preference

### Matchmaking Engine

#### Male Customer Logic

Matches are ranked based on:

* Female profiles only
* Younger age
* Shorter height
* Lower income
* Matching children preferences

#### Female Customer Logic

Matches are ranked based on:

* Male profiles only
* Profession compatibility
* Shared values
* Relocation preferences
* Pet preferences
* Age compatibility

### AI Compatibility Insights

Google Gemini AI generates:

* Compatibility explanations
* Match reasoning
* Personalized matchmaking insights

### Notes System

* Save meeting notes
* Track customer interactions
* Store matchmaking observations

### Match Actions

* Send Match functionality
* Compatibility scoring
* Match ranking system

---

## Tech Stack

### Frontend

* Next.js 15
* React
* TypeScript
* Tailwind CSS
* Shadcn UI

### Backend

* Next.js API Routes

### AI

* Google Gemini API

### Data

* Static JSON Database
* Generated Indian Customer Profiles

### Deployment

* Vercel

---

## Project Structure

```bash
src/
│
├── app/
│   ├── api/
│   │   ├── ai-intro/
│   │   └── matches/
│   │
│   ├── dashboard/
│   │   └── customer/[id]/
│   │
│   ├── login/
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── LoginForm.tsx
│   ├── CustomerCard.tsx
│   ├── CustomerDetails.tsx
│   ├── MatchCard.tsx
│   ├── MatchScore.tsx
│   ├── NotesSection.tsx
│   ├── SearchBar.tsx
│   ├── DashboardHeader.tsx
│   └── AICompatibility.tsx
│
├── data/
│   ├── customer.json
│   └── matchPool.json
│
├── hooks/
│   └── useMatches.ts
│
├── lib/
│   ├── ai.ts
│   ├── gemini.ts
│   ├── matchAlgorithm.ts
│   └── utils.ts
│
├── scripts/
│   └── generateProfiles.ts
│
└── types/
    └── customer.ts
```

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
cd matchmaker-dashboard
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Application will be available at:

```bash
http://localhost:3000
```

---

## Environment Variables

Create a `.env.local` file:

```env
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

---

## Generate Dummy Profiles

Generate 200 Indian customer profiles:

```bash
npx tsx src/scripts/generateProfiles.ts
```

---

## Demo Credentials

```text
Username: matchmaker
Password: 123456
```

---

## AI Integration

The application uses Google Gemini AI to generate compatibility insights between customer profiles and suggested matches.

Example:

> "This match shows strong compatibility due to aligned family values, relocation preferences, and long-term relationship goals."

---

## Matching Algorithm

The matchmaking engine combines:

* Rule-based compatibility scoring
* Gender-specific matching criteria
* Preference alignment
* AI-generated reasoning

Profiles are ranked by compatibility score and presented as suggested matches.

---

## Future Enhancements

* Real database integration (MongoDB/PostgreSQL)
* Role-based authentication
* Match history tracking
* Advanced AI recommendations
* Email integration
* Customer status workflow
* Admin dashboard
* Real-time notifications

---

## Assumptions

* Static JSON is used instead of a production database.
* Authentication is simplified for MVP demonstration.
* AI compatibility explanations are generated using Gemini AI.
* Matching logic follows assignment specifications and common matrimonial industry practices.

---

## Author

**Anuj Verma**

B.Tech, IIIT Bhopal

Full Stack Developer | React | Next.js | Node.js | TypeScript
