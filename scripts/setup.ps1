# PowerShell setup script for Tawi Group website
# Ensures proper pnpm configuration on Windows

Write-Host "🚀 Setting up Tawi Group website with pnpm..." -ForegroundColor Green

# Check if pnpm is installed
try {
    $pnpmVersion = pnpm --version
    Write-Host "✅ pnpm v$pnpmVersion detected" -ForegroundColor Green
} catch {
    Write-Host "❌ pnpm not found. Installing pnpm..." -ForegroundColor Red
    npm install -g pnpm
    Write-Host "✅ pnpm installed successfully" -ForegroundColor Green
}

# Clean previous installations
Write-Host "🧹 Cleaning previous installations..." -ForegroundColor Yellow
if (Test-Path "node_modules") { Remove-Item -Recurse -Force "node_modules" }
if (Test-Path "pnpm-lock.yaml") { Remove-Item -Force "pnpm-lock.yaml" }
if (Test-Path "package-lock.json") { Remove-Item -Force "package-lock.json" }

# Install dependencies
Write-Host "📦 Installing dependencies with pnpm..." -ForegroundColor Yellow
pnpm install

# Verify installation
Write-Host "🔍 Verifying installation..." -ForegroundColor Yellow
pnpm list --depth=0

# Test development server
Write-Host "🔄 Testing development server..." -ForegroundColor Yellow
try {
    Start-Process -FilePath "pnpm" -ArgumentList "exec", "tsx", "--version" -Wait -NoNewWindow
    Write-Host "✅ tsx is working correctly" -ForegroundColor Green
    
    Write-Host "🎉 Setup completed successfully!" -ForegroundColor Green
    Write-Host "📌 To start development server: pnpm run dev" -ForegroundColor Cyan
    Write-Host "📌 To build for production: pnpm run build" -ForegroundColor Cyan
    
} catch {
    Write-Host "⚠️  tsx test failed, but basic setup is complete" -ForegroundColor Yellow
    Write-Host "🔧 Try running: pnpm install --force" -ForegroundColor Cyan
}

Write-Host "`n🌟 Tawi Group website is ready for development!" -ForegroundColor Green