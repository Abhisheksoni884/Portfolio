# Abhishek's Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Vite. Features a full-stack setup with Express backend and custom UI components.

## 🚀 Features

- **Modern Tech Stack**: React 18 + TypeScript + Vite
- **Beautiful UI Components**: Custom Radix UI components with Tailwind CSS
- **Full-Stack Ready**: Express server for backend functionality
- **Dark Mode Support**: Theme context for light/dark mode switching
- **Responsive Design**: Mobile-first approach with custom hooks for responsive behavior
- **Interactive Map**: Custom map component for location display
- **Error Handling**: ErrorBoundary component for graceful error management

## 📦 Tech Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Radix UI** - Accessible UI components
- **Framer Motion** - Animations
- **React Hook Form** - Form handling

### Backend
- **Express** - Node.js server
- **TypeScript** - Type-safe backend

### Development
- **ESBuild** - Bundling
- **Prettier** - Code formatting
- **pnpm** - Package manager

## 🛠️ Installation

```bash
# Install dependencies
pnpm install

# Development
pnpm dev          # Start dev server with hot reload
pnpm build        # Build frontend and backend
pnpm start        # Run production build
pnpm preview      # Preview production build
pnpm check        # Type check with TypeScript
pnpm format       # Format code with Prettier
```

## 📁 Project Structure

```
Portfolio/
├── client/                 # Frontend application
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── contexts/      # React context providers
│   │   ├── hooks/         # Custom React hooks
│   │   ├── pages/         # Page components
│   │   ├── lib/           # Utilities
│   │   ├── App.tsx        # Root component
│   │   └── main.tsx       # Entry point
│   ├── index.html         # HTML template
│   └── vite.config.ts     # Vite configuration
├── server/                # Backend application
│   └── index.ts          # Express server
├── shared/               # Shared constants
└── patches/             # npm patches
```

## 🚀 Deployment

### Option 1: Vercel (Recommended)
```bash
# Install Vercel CLI
pnpm add -g vercel

# Deploy
vercel
```

### Option 2: GitHub Pages (Frontend only)
1. Update `vite.config.ts` base URL
2. Run `pnpm build`
3. Deploy `dist` folder to GitHub Pages

### Option 3: Netlify
```bash
# Install Netlify CLI
pnpm add -g netlify-cli

# Deploy
netlify deploy --prod
```

### Option 4: Self-hosted (VPS/Docker)
```bash
pnpm build
pnpm start
```

## 🔧 Environment Variables

Create a `.env.local` file in the root directory:

```env
VITE_API_URL=http://localhost:5000
# Add other environment variables as needed
```

## 📝 License

MIT License - feel free to use this project!

## 👤 Author

Abhishek Soni

---

**Portfolio Live**: [View Portfolio](https://abhisheksoni.dev)

**GitHub**: [Abhisheksoni884](https://github.com/Abhisheksoni884)
