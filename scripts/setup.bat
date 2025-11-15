@echo off
REM Windows setup script for Tawi Group project
echo Setting up Tawi Group project on Windows...

REM Check if pnpm is installed
pnpm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Installing pnpm...
    npm install -g pnpm
) else (
    echo pnpm is already installed
)

REM Install dependencies
echo Installing dependencies with pnpm...
pnpm install

REM Check TypeScript
echo Checking TypeScript configuration...
pnpm run check

echo Setup completed! You can now run:
echo   pnpm run dev    - Start development server
echo   pnpm run build  - Build for production
echo   pnpm run db:push - Push database schema
pause