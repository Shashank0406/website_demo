# ShashankVerse

Personal portfolio website built with React, Vite, and Tailwind CSS.

Website: [www.shashankkurakula.com](https://www.shashankkurakula.com)

## Overview

This site includes:

- Home page with hero, motion, and quick navigation cards
- About page with profile and education
- Work page with experience, skills, and tools/stack
- Projects page with featured and additional repositories
- Blog page with Medium articles

## Tech Stack

- React
- Vite
- Tailwind CSS
- React Router

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```text
src/
  components/   UI sections and shared layout pieces
  pages/        Route-level pages
  data/         Central content data
  theme/        Legacy folder if present
public/         Static assets
dist/           Generated production build
```

## Content Editing

Main content is managed in:

- `src/data/siteContent.js`

Main page sections are in:

- `src/components/Hero.jsx`
- `src/components/AboutSection.jsx`
- `src/components/WorkSection.jsx`
- `src/components/ProjectsSection.jsx`
- `src/components/BlogSection.jsx`

## Notes

- `index.html` in the project root is the Vite source entry.
- `dist/` is generated output and can be recreated with `npm run build`.
