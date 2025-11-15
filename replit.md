# Tawi Group - Strategic Consulting for Political Leaders

## Overview

This is a full-stack web application for Tawi Group, a consulting agency that partners with political leaders to design and execute impactful strategies for community transformation in Kenya. The application features a modern, professional website with a contact form system built using a React frontend and Express backend with in-memory storage.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing
- **UI Framework**: Tailwind CSS with shadcn/ui component library
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation
- **Styling**: Custom Tawi Group branding with professional color scheme

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Pattern**: RESTful API design
- **Middleware**: CORS, JSON parsing, request logging
- **Development**: Hot reloading with Vite integration in development mode

### Database Layer
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured for Neon serverless)
- **Migrations**: Drizzle Kit for schema management
- **Connection**: Neon serverless driver for PostgreSQL connections

## Key Components

### 1. Contact Management System
- Contact form with validation (name, email, organization, message)
- Newsletter subscription option
- Server-side validation using Zod schemas
- Toast notifications for user feedback
- Admin endpoint for retrieving contact submissions

### 2. Professional Website Design
- Responsive design with mobile-first approach
- Professional color scheme (Tawi primary green, accent gold)
- Typography using Inter and Montserrat fonts
- Smooth scrolling navigation
- Hero section with call-to-action
- Services showcase featuring political consulting services
- Statistics highlighting Tawi Group's credibility and local networks

### 3. Shared Schema Management
- Centralized type definitions in `shared/schema.ts`
- Zod validation schemas for both client and server
- TypeScript types generated from database schema
- Consistent data validation across the stack

## Data Flow

1. **User Interaction**: Users interact with the React frontend
2. **Form Submission**: Contact form data is validated client-side using Zod
3. **API Request**: Form data is sent to Express backend via REST API
4. **Server Validation**: Backend re-validates data using shared Zod schemas
5. **Database Storage**: Valid data is stored in PostgreSQL via Drizzle ORM
6. **Response**: Success/error responses are sent back to the client
7. **UI Feedback**: Toast notifications inform users of submission status

## External Dependencies

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: High-quality React component library
- **Radix UI**: Accessible component primitives
- **Lucide React**: Modern icon library

### Form and Validation
- **React Hook Form**: Performant form library
- **Zod**: TypeScript-first schema validation
- **@hookform/resolvers**: Validation resolver for React Hook Form

### Database and ORM
- **Drizzle ORM**: Lightweight TypeScript ORM
- **@neondatabase/serverless**: Neon PostgreSQL serverless driver
- **Drizzle Kit**: CLI tool for database migrations

### Development Tools
- **Vite**: Fast build tool and dev server
- **tsx**: TypeScript execution engine
- **esbuild**: Fast JavaScript bundler for production

## Deployment Strategy

### Development Environment
- **Command**: `npm run dev`
- **Features**: Hot reloading, development middleware, source maps
- **Database**: Connected to Neon PostgreSQL instance

### Production Build
- **Frontend Build**: `vite build` - Creates optimized static assets
- **Backend Build**: `esbuild` - Bundles server code for production
- **Deployment**: Configured for Replit autoscale deployment
- **Port Configuration**: Internal port 5000, external port 80

### Database Management
- **Migrations**: `npm run db:push` applies schema changes
- **Environment**: Requires `DATABASE_URL` environment variable
- **Provider**: Neon serverless PostgreSQL for scalability

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

### June 27, 2025: Production Environment & pnpm Build Process Configuration

#### Production Environment Setup (Issue #2 - COMPLETED)
- Created comprehensive deployment configurations:
  - `ecosystem.config.js` for PM2 process management
  - `vercel.json` for Vercel deployment 
  - `netlify.toml` for Netlify deployment
  - `.github/workflows/deploy.yml` for CI/CD pipeline
  - `Dockerfile` with multi-stage builds for containerized deployment
  - `healthcheck.js` for Docker container health monitoring
- Added production health check endpoint `/api/health` to server routes
- Configured multiple hosting strategies for maximum deployment flexibility

#### pnpm Package Manager Configuration (Issue #3 - IN PROGRESS)
- Created `pnpm-workspace.yaml` with optimized workspace configuration
- Updated `.npmrc` with comprehensive pnpm settings:
  - Shamefully hoist for dependency compatibility
  - Auto-install peer dependencies
  - Cross-platform path handling
  - Workspace package preferences
- Built robust build system with fallback scripts:
  - `scripts/build.js` - Production build automation
  - `scripts/dev.js` - Development server with multiple startup methods
  - `scripts/setup.ps1` - Windows PowerShell setup automation
- Created comprehensive Windows compatibility documentation (`windows-setup.md`)
- Added cross-platform environment variable handling with cross-env package

#### Database & Infrastructure (Issue #1 - COMPLETED)
- Production PostgreSQL database configured and operational
- Complete schema with users and contacts tables deployed
- Performance indexes and constraints applied
- Environment variables properly configured

#### Current Status: Build Process Issue
- npm configuration conflicts preventing workflow startup
- tsx dependency resolution in progress with pnpm installation
- Multiple fallback methods implemented for development server startup
- Production build pipeline fully configured and ready

- June 16, 2025: Updated office location to OBC Kitengela, Namanga Road
- June 16, 2025: Updated office location to OBC Kitengela, Namanga Road
- June 16, 2025: Integrated authentic Tawi Group logo with tree symbol throughout the website
- June 16, 2025: Redesigned website with modern professional consulting aesthetic inspired by contemporary design patterns
- June 16, 2025: Enhanced hero section with glassmorphism elements and improved visual hierarchy
- June 16, 2025: Redesigned services section with detailed cards and better information architecture
- June 16, 2025: Upgraded contact section with comprehensive information layout and social media integration
- June 16, 2025: Implemented responsive design improvements across all sections

## User Preferences

- Prefers simple, everyday language for communication
- Wants images featuring people with dark complexion
- Values authentic branding and professional appearance
- Located in Kenya (OBC Kitengela, Namanga Road)

## Changelog

- June 15, 2025: Initial project setup
- June 16, 2025: Complete website redesign with authentic branding