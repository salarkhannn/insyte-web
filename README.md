# Insyte

Desktop analytics for data professionals who need speed, depth, and control.

**Website:** https://useinsyte.vercel.app

## What is Insyte?

Insyte is a desktop-native analytics application built for analysts and data teams who work with local data. It combines the analytical depth of tools like Tableau and Power BI with a modern, keyboard-driven workflow and AI-assisted querying.

### Core Capabilities

- **AI Copilot** — Ask questions in natural language, get charts and insights
- **High-performance processing** — Polars-based backend handles large datasets
- **Multiple visualization types** — Bar, Line, Area, Pie, Scatter, and more
- **Multi-format import** — CSV, Excel, JSON with instant column inspection
- **Project persistence** — Save complete sessions with sheets, visuals, and query history
- **Export options** — CSV, Excel, PDF output

### Architecture

- Desktop app built with Tauri (Rust + Web)
- Polars for data processing
- React frontend with AG Grid
- Local-first: your data stays on your machine

## This Repository

This repo contains the marketing website for Insyte.

### Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS 4

### Development

```bash
npm install
npm run dev
```

### Production

```bash
npm run build
npm start
```

## Status

Currently in private development. Join the waitlist at https://useinsyte.vercel.app for early access.

## Links

- [Desktop App Repository](https://github.com/salarkhannn/insyte)
- [Changelog](https://useinsyte.vercel.app/changelog)
