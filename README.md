# AARYA — THE CHANNEL 📺
### An Interactive YouTube-Inspired Professional Portfolio

> **"Building Products. Solving Problems. Creating Impact."**  
> *Product × AI × Engineering × Leadership*

A high-fidelity, interactive personal portfolio website for **Aarya Khabale**, built with the authentic **YouTube desktop dark-mode interface** using Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

---

## 🚀 Quick Vercel Deployment Guide

Hosting this portfolio on **Vercel** takes less than 2 minutes and provides **automatic continuous deployment** every time you push code or content changes to GitHub.

### Step 1: Initialize Git and Push to GitHub

In your local project folder:

```bash
# 1. Initialize git (if not already done)
git init

# 2. Stage all files
git add .

# 3. Create your initial commit
git commit -m "feat: initial YouTube portfolio launch"

# 4. Set main branch
git branch -M main

# 5. Link your GitHub repository (replace with your repo URL)
git remote add origin https://github.com/aaryak/portfolio.git

# 6. Push to GitHub
git push -u origin main
```

### Step 2: Import Project on Vercel

1. Go to [vercel.com](https://vercel.com) and log in with your GitHub account.
2. Click **"Add New..."** -> **"Project"**.
3. Select your `portfolio` repository from the list and click **"Import"**.
4. Vercel automatically detects **Next.js**:
   - **Framework Preset**: Next.js
   - **Build Command**: `next build`
   - **Output Directory**: `.next`
5. Click **"Deploy"**.
6. Within ~60 seconds, your portfolio will be live at `https://portfolio-aaryak.vercel.app` (or your custom domain)!

---

## 🛠️ Modifying Content & Adding Personalized Videos

All portfolio content is decoupled into the `/data` directory for zero-friction editing:

### 1. Adding Personalized Videos 🎥
Whenever you record a video walkthrough for any project (or an introduction trailer):
1. Drop your `.mp4` or `.webm` file into [`public/videos/`](/public/videos/) (e.g. `public/videos/biolens.mp4`).
2. Open [`data/projects.ts`](/data/projects.ts).
3. Add the `videoUrl` field to that project:
   ```ts
   {
     id: "proj-1",
     slug: "biolens",
     title: "BioLens — Mobile Biodiversity Intelligence Platform",
     videoUrl: "/videos/biolens.mp4", // <-- Add your local file or remote URL here!
     ...
   }
   ```
4. The custom player in `/watch/biolens` will automatically play your video with full YouTube controls, scrubber, volume, and fullscreen! If no `videoUrl` is provided, it falls back seamlessly to the animated slide presentation.

### 2. Modifying Profile, Bio & Credentials 👤
Edit [`data/profile.ts`](/data/profile.ts) to update:
- Personal positioning statement
- Channel handle, location, education, and CGPA
- AWS & GCP Certifications
- *"Currently Exploring"* topics shelf

### 3. Modifying Projects & Case Studies 🔬
Edit [`data/projects.ts`](/data/projects.ts) to update:
- Problem statements, technical architecture, and diagrams
- Product decisions and engineering trade-offs
- Measurable impact statistics and verified numbers
- Live demo and GitHub repository links

### 4. Updating Experience & Leadership 💼
Edit [`data/experience.ts`](/data/experience.ts) to update:
- Darukaa.earth internship milestones
- GDG on Campus NMIMS leadership & HackX stats
- Solaris Events & Consultancy operations

### 5. Updating Skills & Tech Stack ⚡
Edit [`data/skills.ts`](/data/skills.ts) to add or adjust competencies under:
- `PRODUCT & DESIGN`
- `LANGUAGES`
- `FRAMEWORKS & LIBRARIES`
- `TOOLS & PLATFORMS`
- `DATABASES`

---

## 💻 Local Development

```bash
# Install dependencies
npm install

# Start development server on localhost:3000
npm run dev

# Run production build check
npm run build

# Start production server
npm start
```

---

## 🎨 Design Tokens & Authentic YouTube Specs

- **Background**: `#0F0F0F`
- **Surfaces**: `#181818` (cards, sidebar, top nav), `#272727` (hover & description box)
- **Borders**: `#303030`
- **Primary Text**: `#F1F1F1`
- **Secondary Text**: `#AAAAAA`
- **Accent**: `#FF0033` (YouTube Red)
- **Typography**: Roboto
