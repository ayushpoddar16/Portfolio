# Ayush Poddar — Portfolio

Modern, ATS-focused, recruiter-attractive portfolio built with the MERN stack.

---

## Folder Structure

```
ayush-portfolio/
├── client/                         ← React + Vite Frontend
│   ├── public/
│   │   ├── resume.pdf              ← PUT YOUR RESUME HERE
│   │   └── favicon.svg
│   ├── src/
│   │   ├── components/
│   │   │   ├── Loader.jsx
│   │   │   ├── ScrollProgress.jsx
│   │   │   ├── CursorGlow.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── DSA.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Footer.jsx
│   │   ├── context/
│   │   │   └── ThemeContext.jsx
│   │   ├── hooks/
│   │   │   └── useCountUp.js
│   │   ├── utils/
│   │   │   └── constants.js        ← Edit this to update all content
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── .env.example
│   └── package.json
│
└── server/                         ← Node + Express Backend (your existing setup)
    ├── controllers/
    │   └── contactController.js
    ├── routes/
    │   └── contactRoutes.js
    ├── middleware/
    │   └── errorHandler.js
    ├── config/
    │   └── db.js
    ├── models/
    │   └── Contact.js
    ├── .env
    ├── server.js
    └── package.json
```

---

## Step-by-Step Setup

### Prerequisites
- Node.js v18+ installed
- npm or yarn
- Git

---

### Step 1 — Clone / Create Project Folder

```bash
mkdir ayush-portfolio
cd ayush-portfolio
# Copy the client/ folder code into this directory
```

---

### Step 2 — Setup Frontend (Client)

```bash
cd client
npm install
```

This installs:
- React 18, Vite
- Framer Motion (animations)
- @tsparticles/react + @tsparticles/slim (particles)
- Tailwind CSS + PostCSS + Autoprefixer
- Axios (API calls)

---

### Step 3 — Add Your Resume

Place your resume PDF at:
```
client/public/resume.pdf
```

---

### Step 4 — Configure Environment Variables (Client)

```bash
cp .env.example .env
```

Edit `.env`:
```env
VITE_API_URL=http://localhost:5000/api
```

> In production, change this to your deployed backend URL.

---

### Step 5 — Setup Backend (Server)

```bash
cd ../server
npm install
```

Create `server/.env`:
```env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/portfolio
EMAIL_USER=ayush16373@gmail.com
EMAIL_PASS=your_gmail_app_password
CLIENT_URL=http://localhost:3000
NODE_ENV=development
```

> For Gmail: Enable 2FA → Go to Google Account → Security → App Passwords → Generate one.

---

### Step 6 — Run Development Servers

**Terminal 1 — Backend:**
```bash
cd server
npm run dev
# Runs on http://localhost:5000
```

**Terminal 2 — Frontend:**
```bash
cd client
npm run dev
# Runs on http://localhost:3000
```

Open http://localhost:3000 in your browser.

---

### Step 7 — Customization

All portfolio content lives in ONE file:
```
client/src/utils/constants.js
```

Edit:
- `PERSONAL` — name, email, links, bio
- `SKILLS` — your tech stack
- `EXPERIENCE` — internships, education
- `PROJECTS` — your project cards
- `DSA_COUNTERS` — LeetCode, Coding Ninjas counts
- `ACHIEVEMENTS` — awards, milestones

---

## Backend API Contract

The contact form posts to:
```
POST /api/contact
Body: { name, email, subject, message }
Response: { success: true, message: "..." }
```

Your backend `contactController.js` should:
1. Save to MongoDB
2. Send email via Nodemailer
3. Return JSON response

---

## Production Build

```bash
# Build frontend
cd client
npm run build
# Output in client/dist/

# Deploy dist/ to Netlify / Vercel / Render static
# Deploy server/ to Render / Railway / VPS
```

---

## Deployment Guide

### Frontend → Vercel (Recommended)
1. Push `client/` folder to GitHub
2. Connect to Vercel
3. Set `VITE_API_URL` in Vercel Environment Variables → your backend URL
4. Deploy

### Frontend → Netlify
1. Build command: `npm run build`
2. Publish directory: `dist`
3. Add environment variables in Netlify dashboard

### Backend → Render
1. Push `server/` folder to GitHub
2. Create Web Service on Render
3. Add all `.env` variables in Render Environment
4. Start command: `node server.js`

---

## Features

- Loader screen with progress animation
- Floating pill navbar with dark/light toggle
- Particle background (tsParticles)
- Typed text animation (custom hook)
- Scroll progress bar (Framer Motion)
- Cursor glow effect
- Reveal-on-scroll animations
- Animated number counters
- Project cards with hover effects
- Contact form with backend integration
- Fully responsive (mobile-first)
- SEO meta tags
- Resume download button
- Dark / Light mode with localStorage persistence

---

## Tech Stack

| Layer | Tech |
|---|---|
| Frontend | React 18 + Vite |
| Styling | Tailwind CSS + Inline styles |
| Animation | Framer Motion |
| Particles | tsParticles |
| Backend | Node.js + Express.js |
| Database | MongoDB + Mongoose |
| Email | Nodemailer |
| Deployment | Vercel + Render |

---

Built by Ayush Poddar · Jabalpur Engineering College · 2025
