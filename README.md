# Brand Perception Analyzer Landing Page

A modern, conversion-focused single-page landing app with an interactive AI-powered brand perception analyzer tool.

## Features

- **Interactive Preview Tool**: Enter a domain to get instant AI-powered brand perception analysis
- **Modern UI/UX**: Premium design with glassmorphism, smooth animations, and mobile-first responsive layout
- **Conversion Optimized**: Built with conversion funnel principles, A/B testing hooks, and analytics tracking
- **Accessibility**: WCAG compliant with keyboard navigation, ARIA labels, and reduced-motion support
- **Performance**: Optimized for Lighthouse scores 90+ on all metrics

## Tech Stack

- **Frontend**: React + TypeScript + Vite
- **Styling**: TailwindCSS with custom design system
- **Animations**: Framer Motion
- **Backend**: Vercel Serverless Functions
- **AI**: OpenAI GPT-4 API

## Getting Started

### Prerequisites

- Node.js 20.19+ or 22.12+
- npm or yarn
- OpenAI API key

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file (copy from `.env.example`):
   ```bash
   OPENAI_API_KEY=your_openai_api_key_here
   ```

### Development

Run the development server:
```bash
npm run dev
```

### Build

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## Deployment

### Vercel

1. Push your code to a Git repository
2. Import your repository in Vercel
3. Add environment variable `OPENAI_API_KEY` in Vercel dashboard
4. Deploy

The serverless function will be automatically deployed to `/api/analyze`.

## Project Structure

```
├── src/
│   ├── components/     # React components
│   ├── lib/           # Utilities (API client, analytics, A/B testing)
│   ├── types/         # TypeScript type definitions
│   └── App.tsx        # Main app component
├── api/
│   └── analyze.ts     # Vercel serverless function
└── public/            # Static assets
```

## Environment Variables

- `OPENAI_API_KEY`: Your OpenAI API key (required)
- `VITE_API_URL`: API endpoint URL (defaults to `/api`)

## Features Overview

### Landing Page Sections

1. **Hero**: Interactive domain input with instant analysis
2. **Social Proof**: Trust logos and metrics
3. **Features**: Key capabilities showcase
4. **Benefits**: Value propositions
5. **Testimonials**: Customer quotes
6. **FAQ**: Common questions
7. **Footer**: Links and legal

### Components

- `Hero`: Domain input form with validation
- `LoadingState`: Animated loading state with microcopy
- `ResultsModal`: Glassmorphism modal with brand analysis results
- `SocialProof`: Trust indicators and metrics
- `Features`: Feature cards
- `Benefits`: Value proposition cards
- `Testimonials`: Customer testimonials
- `FAQ`: Accordion-style FAQ
- `ExitIntent`: Exit-intent and idle-delay conversion nudge
- `Footer`: Site footer

### Analytics

Event tracking for:
- Hero interactions
- Form submissions
- Result views
- CTA clicks
- Exit intent triggers

Events are structured for easy integration with GA4, Mixpanel, etc.

### A/B Testing

Built-in hooks for testing:
- Hero copy variants
- CTA text variants
- Modal layout variants

## License

MIT
