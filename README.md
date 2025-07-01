# Fizjo+ - Professional Physiotherapy Services

<p align="center">
  <img src="src/assets/logo.svg" alt="Fizjo+ Logo" width="200"/>
</p>

<p align="center">
  <strong>Modern physiotherapy clinic website for Michał Ćwik's practice in Kraków</strong>
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#tech-stack">Tech Stack</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#development">Development</a> •
  <a href="#deployment">Deployment</a> •
  <a href="#contributing">Contributing</a>
</p>

## 📋 Overview

Fizjo+ is a modern, responsive single-page application (SPA) designed for a professional physiotherapy clinic. The website offers comprehensive information about physiotherapy services, enables easy appointment booking through Booksy integration, and provides full internationalization support for Polish and English languages.

### 🎯 Key Business Features

- **Service Showcase**: Interactive carousel presenting 9 different physiotherapy specializations
- **Appointment Booking**: Seamless integration with Booksy platform for online scheduling
- **Multi-language Support**: Full Polish and English translations for international clients
- **Mobile-First Design**: Optimized experience across all devices
- **PWA Capabilities**: Installable as a progressive web app for better performance

## 🛠️ Tech Stack

### Frontend Framework

- **React 18.3.1** - UI library
- **TypeScript 5.6.2** - Type safety and better DX
- **Vite** - Lightning-fast build tool
- **TanStack Router** - Type-safe routing with hash-based navigation
- **TanStack Query** - Powerful data synchronization

### UI & Styling

- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/ui** - High-quality, accessible component library
- **Radix UI** - Unstyled, accessible component primitives
- **Framer Motion** - Production-ready animation library
- **Embla Carousel** - Lightweight carousel library

### State & Forms

- **Jotai** - Primitive and flexible state management
- **React Hook Form** - Performant forms with easy validation
- **Zod** - TypeScript-first schema validation

### Development Tools

- **ESLint** - Code quality and consistency
- **Prettier** - Code formatting
- **Husky** - Git hooks for quality control
- **Commitlint** - Conventional commit messages
- **Stylelint** - CSS/SCSS linting

### Internationalization

- **i18next** - Full-featured i18n framework
- **react-i18next** - React bindings for i18next

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm
- Git

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/fizjo-plus.git
cd fizjo-plus
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

## 💻 Development

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run dev:host     # Start dev server with network access

# Building
npm run build        # Build for production
npm run preview      # Preview production build

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint issues
npm run format       # Format code with Prettier
npm run type-check   # Run TypeScript compiler check

# Git Hooks (automatically run)
npm run prepare      # Setup Husky
```

### Project Structure

```
fizjo-plus/
├── src/
│   ├── assets/          # Static assets (images, icons, logos)
│   ├── components/
│   │   ├── layout/      # Layout components (Header, Footer)
│   │   ├── shared/      # Reusable components
│   │   ├── ui-library/  # Base UI components (shadcn/ui)
│   │   └── views/       # Page views and sections
│   ├── constants/       # App constants and configurations
│   ├── hooks/          # Custom React hooks
│   ├── locales/        # Translation files
│   │   ├── en/         # English translations
│   │   └── pl/         # Polish translations
│   ├── routes/         # Route definitions
│   ├── styles/         # Global styles
│   ├── types/          # TypeScript type definitions
│   └── utils/          # Utility functions
├── public/             # Static public assets
└── sql/               # Database schemas
```

### Key Components

#### Layout Components

- `Header` - Main navigation with language selector
- `Footer` - Contact info and quick links
- `BooksyButton` - CTA for appointment booking

#### Service Components

- `ServicesSection` - Carousel showcasing all services
- `ServiceCard` - Individual service presentation
- `FirstVisitSection` - Timeline of first appointment process

#### Shared Components

- `LanguageSelector` - Dropdown for language switching
- `RichTrans` - Translation component with HTML support
- `Timeline` - Visual timeline component

### Coding Standards

- Use TypeScript for all new code
- Follow ESLint and Prettier configurations
- Write semantic, accessible HTML
- Use Tailwind utilities for styling
- Implement responsive design patterns
- Ensure all text is internationalized

## 🌍 Internationalization

The app supports Polish (default) and English. Translation files are located in `src/locales/`.

### Adding Translations

1. Add key to both `src/locales/pl/translation.json` and `src/locales/en/translation.json`
2. Use the translation in components:

```tsx
import { useTranslation } from "react-i18next";

function MyComponent() {
  const { t } = useTranslation();
  return <h1>{t("myKey")}</h1>;
}
```

## 📦 Deployment

### Build for Production

```bash
npm run build
```

The build output will be in the `dist/` directory.

### Deployment Platforms

The app is configured for static hosting and works well with:

- GitHub Pages (hash routing enabled)
- Netlify
- Vercel
- Any static file server

### Commit Convention

We use [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` New features
- `fix:` Bug fixes
- `docs:` Documentation changes
- `style:` Code style changes
- `refactor:` Code refactoring
- `test:` Test additions/changes
- `chore:` Build process or auxiliary tool changes

## 📄 License

This project is proprietary software. All rights reserved.

## 👥 Team

- **Developer**: Jakub Wójcik
- **Physiotherapist**: Michał Ćwik

## 📞 Support

For technical issues, please open an issue on GitHub.
For business inquiries, contact through the website.
