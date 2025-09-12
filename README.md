# Labor Market Information System (LMIS)

A comprehensive Labor Market Information System built for national demonstration and adoption. This system provides real-time insights into employment landscape, job market analytics, and economic trends.

## Features

- **Real-time Analytics Dashboard** - Employment rates, job vacancies, and skills gap analysis
- **Sector Growth Tracking** - Monitor growth across different economic sectors
- **Geographic Employment Data** - State-wise employment statistics and trends
- **Modern UI/UX** - Built with React, TypeScript, and shadcn/ui components
- **Responsive Design** - Optimized for desktop and mobile devices

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **UI Components**: shadcn/ui, Radix UI, Tailwind CSS
- **State Management**: React Context, TanStack Query
- **Backend**: Supabase
- **Charts**: Recharts
- **Icons**: Lucide React

## Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## Project Structure

- `src/components/` - Reusable UI components
- `src/pages/` - Application pages
- `src/contexts/` - React context providers
- `src/hooks/` - Custom React hooks
- `src/lib/` - Utility functions

## Environment Setup

Create a `.env.local` file in the root directory with your Supabase credentials:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Development

This project is ready for national demonstration and can be easily customized for different regions and requirements.
