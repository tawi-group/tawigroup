# Tawi Group - Strategic Consulting for Political Leaders

A modern, professional website for Tawi Group, a Kenyan consulting agency specializing in political strategy and community transformation. Built with React, TypeScript, and Express.js.

## 🌟 Features

- **Modern Design**: Professional consulting aesthetic with glassmorphism elements
- **Responsive Layout**: Mobile-first design that works on all devices
- **Contact Management**: Integrated contact form with newsletter subscription
- **Political Focus**: Specialized content for political consulting services
- **Authentic Branding**: Custom Tawi Group logo with tree symbol
- **Performance Optimized**: Fast loading with Vite build system

## 🚀 Services Offered

- **Community Project Design**: Strategic planning for grassroots initiatives
- **Constituency Delivery Planning**: Policy implementation and community engagement
- **Campaign Visibility & Voter Mobilization**: Political campaign management
- **Stakeholder Engagement**: Building coalitions and managing relationships

## 🛠️ Technology Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for fast development and builds
- **Tailwind CSS** with shadcn/ui components
- **Wouter** for client-side routing
- **TanStack Query** for server state management
- **React Hook Form** with Zod validation

### Backend
- **Node.js** with Express.js
- **TypeScript** with ES modules
- **Drizzle ORM** for database operations
- **PostgreSQL** with Neon serverless

### Development Tools
- **Hot Module Replacement** for fast development
- **ESBuild** for production bundling
- **Drizzle Kit** for database migrations

## 📋 Prerequisites

- Node.js 18+ installed
- PostgreSQL database (Neon recommended)
- pnpm (recommended) or npm package manager

## 🔧 Installation

### Quick Start (Recommended)
```bash
# Clone the repository
git clone <repository-url>
cd tawi-group-website

# Install pnpm if not already installed
npm install -g pnpm

# Install dependencies
pnpm install

# Set up environment variables (copy .env.example to .env)
DATABASE_URL=your_postgresql_connection_string

# Set up the database
pnpm run db:push
```

### Windows Users
For Windows-specific setup instructions, see [windows-setup.md](./windows-setup.md).

Quick Windows setup:
```cmd
# PowerShell (recommended)
.\scripts\setup.ps1

# Or Command Prompt
.\scripts\setup.bat
```

## 🚀 Development

Start the development server:
```bash
# Using pnpm (recommended)
pnpm run dev

# Using npm
npm run dev

# Windows batch script
.\scripts\dev.bat
```

The application will be available at `http://localhost:5000`

## 📁 Project Structure

```
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── lib/           # Utilities and configurations
│   │   └── assets/        # Static assets
├── server/                # Express backend
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API routes
│   └── storage.ts        # Data storage interface
├── shared/               # Shared types and schemas
│   └── schema.ts        # Database schema and types
└── replit.md           # Project documentation
```

## 🎨 Design Features

- **Professional Color Scheme**: Primary green (#1E372F) with gold accents (#B38629)
- **Typography**: Montserrat for headings, Inter for body text
- **Glassmorphism Effects**: Modern backdrop blur effects
- **Gradient Overlays**: Sophisticated visual depth
- **Responsive Grid**: Flexible layouts for all screen sizes

## 📧 Contact Information

- **Office**: OBC Kitengela, Namanga Road, Kenya
- **Phone**: +254 01 234567
- **Email**: tawi.group.1@gmail.com
- **Social Media**: @tawigroup

## 🔐 Environment Variables

```env
DATABASE_URL=postgresql://user:password@host:port/database
NODE_ENV=development|production
```

## 📦 Build & Deployment

### Development
```bash
# Using pnpm (recommended)
pnpm run dev

# Using npm
npm run dev
```

### Production Build
```bash
# Using pnpm (recommended)
pnpm run build

# Using npm
npm run build
```

### Database Operations
```bash
# Apply schema changes
pnpm run db:push    # or npm run db:push

# TypeScript checking
pnpm run check      # or npm run check
```

### Windows-Specific Commands
```cmd
# Development
.\scripts\dev.bat          # Batch script
.\scripts\dev.ps1          # PowerShell script

# Setup
.\scripts\setup.ps1        # Complete setup script
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary software belonging to Tawi Group. All rights reserved.

## 🙏 Acknowledgments

- Built with modern web technologies for optimal performance
- Designed with accessibility and user experience in mind
- Focused on authentic Kenyan political consulting needs

---

**Tawi Group** - Empowering Leaders, Transforming Communities