# Mayank Rajpoot — Full Stack Developer Portfolio

A modern personal portfolio website built with **React**, **Vite**, and **Vanilla CSS**. Designed and engineered for Full Stack Developer internship evaluations, demonstrating solid frontend fundamentals, responsive design principles, component architecture, and interactive UX.

---

## 🌟 Live Demo & Local Preview

- **Local Development URL:** `http://127.0.0.1:5173/`
- **Build Status:** Production ready (zero dependencies on heavy CSS frameworks, optimized assets)

---

## 🚀 Key Highlights & Evaluation Criteria

| Evaluation Area | Implementation Details |
| :--- | :--- |
| **HTML / Frontend Fundamentals** | Semantic HTML5 structure (`<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>`), SEO metadata, Open Graph tags, ARIA attributes. |
| **CSS & Responsive Architecture** | Vanilla CSS design system using CSS custom properties (`:root`), Flexbox, CSS Grid, mobile-first breakpoints (desktop, tablet, mobile), glassmorphism, and subtle micro-animations. |
| **Component Architecture** | Modular React component hierarchy (`Navbar`, `Hero`, `About`, `Skills`, `Projects`, `ProjectModal`, `Contact`, `Footer`). |
| **JavaScript Functionality** | Category filtering for projects and skills, live interactive form validation, smooth scroll tracking, clipboard copy interactions with tooltip state, and modal deep-dives. |
| **Design Aesthetics** | Curated color palette (`#050816`, `#0B1120`, `#8B5CF6`, `#06B6D4`), Inter typography, 3D developer isometric artwork, and vector UI illustrations. |
| **Form Validation** | Robust client-side validation for required fields, RFC email pattern matching, character length checks, live error clearance, and accessible status states. |

---

## 📂 Project Structure

```text
shadowfox/
├── public/
│   ├── assets/
│   │   └── hero-visual.jpg      # 3D developer isometric visual
│   ├── projects/
│   │   ├── pg-mitra.svg         # Student accommodation UI mockup
│   │   ├── findmyblood.svg      # Blood donation platform UI mockup
│   │   ├── pantrypal.svg        # Smart pantry manager UI mockup
│   │   ├── safebite.svg         # AI toxicity scanner concept UI mockup
│   │   └── kiddysolutions.svg   # Digital solutions landing UI mockup
│   └── favicon.svg              # Custom MR monogram favicon
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Sticky glassmorphic navbar & mobile drawer
│   │   ├── Navbar.css
│   │   ├── Hero.jsx             # Hero section with animated floating badges
│   │   ├── Hero.css
│   │   ├── About.jsx            # Two-column layout with education & metrics
│   │   ├── About.css
│   │   ├── Skills.jsx           # Categorized skill cards with filter tabs
│   │   ├── Skills.css
│   │   ├── Projects.jsx         # Responsive project cards & category tabs
│   │   ├── Projects.css
│   │   ├── ProjectModal.jsx     # Deep-dive architecture & feature modal
│   │   ├── ProjectModal.css
│   │   ├── Contact.jsx          # Frontend validated contact form & copy actions
│   │   ├── Contact.css
│   │   ├── Footer.jsx           # Brand info, quick links & back-to-top
│   │   ├── Footer.css
│   │   └── Icons.jsx            # Custom SVG icon set (GitHub, LinkedIn, etc.)
│   ├── data/
│   │   └── portfolioData.js     # Centralized, authentic data source
│   ├── App.jsx                  # Main application container
│   ├── App.css
│   ├── index.css                # Global design system & tokens
│   └── main.jsx                 # React root entry point
├── index.html                   # HTML template with SEO tags & fonts
├── vercel.json                  # Turnkey Vercel SPA routing configuration
├── netlify.toml                 # Turnkey Netlify deployment configuration
├── package.json
└── vite.config.js
```

---

## 🛠️ Getting Started Locally

### Prerequisites
- Node.js (v18 or higher recommended)
- npm (v9 or higher)

### 1. Clone or Open Workspace
```bash
cd /Users/mayank/Desktop/shadowfox
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Local Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 4. Create Production Build
To verify production bundle compilation:
```bash
npm run build
```
The optimized bundle will be generated in the `dist/` directory.

### 5. Preview Production Build Locally
```bash
npm run preview
```

---

## 🚢 Deployment Guide

### Option A: Deploy to Vercel (Recommended)

#### Method 1: Using Vercel Web Dashboard
1. Push your repository to GitHub (`https://github.com/mayankrajpoot/shadowfox` or your portfolio repo name).
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **"Add New..."** > **"Project"**.
4. Import your GitHub repository.
5. Vercel will automatically detect **Vite**:
   - **Framework Preset:** Vite
   - **Root Directory:** `./`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
6. Click **Deploy**. The site will go live with an automatic HTTPS URL. The included `vercel.json` ensures smooth client-side routing.

#### Method 2: Using Vercel CLI
```bash
npm i -g vercel
vercel login
vercel
```

---

### Option B: Deploy to Netlify

#### Method 1: Using Netlify Web Dashboard
1. Go to [netlify.com](https://netlify.com) and log in.
2. Click **"Add new site"** > **"Import an existing project"**.
3. Select your GitHub repository.
4. Netlify will read `netlify.toml` automatically:
   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist`
5. Click **Deploy Site**.

#### Method 2: Using Netlify CLI
```bash
npm i -g netlify-cli
netlify login
netlify deploy --prod
```

---

## 📬 Contact & Portfolio Owner Information

- **Name:** Mayank Rajpoot
- **Role:** Full Stack Developer
- **Location:** Mathura, Uttar Pradesh, India
- **Email:** [mayankrajpoot.dev@gmail.com](mailto:mayankrajpoot.dev@gmail.com)
- **GitHub:** [github.com/mayankrajpoot](https://github.com/mayankrajpoot)
- **LinkedIn:** [linkedin.com/in/mayank-rajpoot](https://linkedin.com/in/mayank-rajpoot)
