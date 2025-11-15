# PowerShell script for development on Windows
Write-Host "Starting Tawi Group development server..." -ForegroundColor Green

# Check if pnpm is available
if (!(Get-Command pnpm -ErrorAction SilentlyContinue)) {
    Write-Host "pnpm not found. Installing pnpm..." -ForegroundColor Yellow
    npm install -g pnpm
}

# Set environment variables for development
$env:NODE_ENV = "development"

# Start development server
try {
    pnpm run dev
} catch {
    Write-Host "Error starting development server: $_" -ForegroundColor Red
    exit 1
}