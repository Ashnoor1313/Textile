# Textilia | Premium B2B Textile Platform

Textilia is a state-of-the-art, high-fidelity B2B digital experience engineered for a premium textile manufacturer and exporter. Built with a luxurious design language, it showcases certified organic weaves, high-performance technical fabrics, and circular supply chain analytics for global apparel and retail brands.

The platform combines a highly polished, interactive React client with an optimized Node.js / Express backend to provide a production-ready system for handling trade inquiries and request-for-quote (RFQ) pipelines.

---

## Key Features

### 1. Premium Visual Design System
- **Luxury Aesthetics**: Rich dark mode backdrop (`#0B0F19`) accented with copper-gold tones (`#D4A373`) and glassmorphism layouts.
- **Dynamic Satin Canvas Backdrop**: An interactive HTML5 Canvas element renders mathematical flows of silk/satin threads in the hero section, offering high-framerate ambient movement.
- **Micro-Animations**: Hover states, smooth card-lifts, sliding badges, and transitions built using `framer-motion`, `gsap`, and CSS variables.
- **Typography**: Editorial layout utilising `Playfair Display` serif headers and highly legible `Inter` body text.

### 2. ESG & Supply Chain Impact Calculator
- An interactive calculator that dynamically models ecological savings based on fabric quantities and material blends (e.g., GOTS certified organic cotton, European flax linen, GRS recycled polyester).
- Computes metrics including water saved (liters), carbon prevented (kg CO₂), and energy saved (kWh).

### 3. Integrated B2B RFQ (Request for Quote) Engine
- **Robust Client Validation**: Real-time form checks ensuring mandatory B2B fields are formatted correctly.
- **Automated Email Dispatch**: Sends custom HTML emails using `nodemailer`:
  - **B2B Client Receipt**: An elegant Apple-styled B2B receipt confirming the RFQ specifications.
  - **Sales Team Alert**: A styled dark-themed notification to sales staff containing full representative details, target country, MOQ, and GSM specifications.
- **API Anti-Abuse Protection**: Configured with `express-rate-limit` to prevent spam (max 15 requests per 15 minutes per IP address).
- **Offline Resiliency Fallback**: If the server API is unreachable, the client transitions to offline mode, writing the inquiry to browser `localStorage` and notifying the user.

---

## Technical Architecture

The codebase is organized as a monorepo containing two main directories:

```
Textile/
├── frontend/             # Vite + React Client
│   ├── src/
│   │   ├── sections/     # Hero.jsx, InquiryForm.jsx, Sustainability.jsx, etc.
│   │   └── index.css     # Tailored CSS variables & modern class utilities
│   └── package.json
├── server/               # Express REST API Server
│   ├── controllers/      # Inquiry controllers (fs-based mock database)
│   ├── routes/           # Routing with anti-spam middleware
│   ├── services/         # Nodemailer services (SMTP handling)
│   └── package.json
├── package.json          # Root Monorepo Commands
└── README.md
```

### Stack Components:
- **Frontend**: React 19, Vite, Tailwind CSS v4, Framer Motion, Lucide React, Lenis (Smooth scroll).
- **Backend**: Node.js, Express, Cors, Helmet (Security), Compression (Performance), Express Rate Limit, Nodemailer.

---

## Production Optimizations Implemented

To ensure the site is fully optimized for production, the following updates have been configured:

1. **Root scripts orchestration**: A root-level `package.json` coordinates automatic dependency installation and frontend building. This simplifies hosting on platforms like Render, Heroku, or AWS Amplify.
2. **Reverse Proxy Trust**: Enabled `app.set('trust proxy', 1)` in the Express backend, ensuring the rate limiter correctly reads the user's real IP instead of the hosting provider's load balancer IP.
3. **Response Compression (Gzip)**: Integrated the `compression` middleware to optimize file transfer sizes of static files, CSS, and JS bundles.
4. **Enhanced Security Headers (Helmet)**: Integrated `helmet` with custom Content Security Policies (CSP) to block malicious scripts and code injection while allowing standard elements like Google Fonts (`fonts.googleapis.com` and `fonts.gstatic.com`).
5. **Configurable CORS**: Configured dynamic origin mapping based on a `CLIENT_URL` environment variable to prevent cross-origin issues in production.
6. **Dynamic API Routing**: Replaced hardcoded localhost URL strings in the React client with dynamic base URL resolution utilizing Vite env configurations (`import.meta.env.VITE_API_BASE_URL`), allowing the application to run seamlessly on same-origin hosts or remote deployments.

---

## Installation & Local Setup

Ensure you have [Node.js](https://nodejs.org/) (v18+) installed.

### 1. Install dependencies
From the root of the project, run:
```bash
npm run install:all
```
This automatically triggers `npm install` inside both the `frontend/` and `server/` folders.

### 2. Configure environment variables
Copy the server variables file to `.env`:
```bash
cp server/.env.example server/.env
```
Open `server/.env` and update the following if necessary:
- `PORT`: Server port (default: 5000).
- `SMTP_USER` / `SMTP_PASS`: Your email credentials. If left as `placeholder`, the mailer automatically provisions free Ethereal Sandbox accounts for test submissions.

### 3. Run in Development Mode
To run the server and client concurrently:
- Run the backend server:
  ```bash
  npm run dev:server
  ```
- Run the React development server:
  ```bash
  npm run dev
  ```

---

## Deployment Walkthrough (e.g., Render / Heroku)

Because of the root-level scripts, deploying is a breeze.

### Deployment settings:
- **Build Command**: `npm run install:all && npm run build`
- **Start Command**: `npm start`
- **Environment Variables**:
  - `NODE_ENV`: `production`
  - `PORT`: `5000` (or leave empty if automatically assigned)
  - `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` (for email RFQ delivery)
  - `CLIENT_URL` (optional: the URL of your frontend if hosted separately)

*Note: In production mode (`NODE_ENV=production`), the Node.js server automatically serves the compiled React assets located in `frontend/dist` and handles single-page app (SPA) routing.*
