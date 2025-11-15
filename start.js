#!/usr/bin/env node

// Simple startup script to bypass npm issues
import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Set environment
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

console.log('🚀 Starting Tawi Group application...');
console.log(`📝 Environment: ${process.env.NODE_ENV}`);

// Try to use tsx directly
const tsxPath = path.join(__dirname, 'node_modules', '.bin', 'tsx');
const serverPath = path.join(__dirname, 'server', 'index.ts');

const child = spawn('node', [tsxPath, serverPath], {
  stdio: 'inherit',
  env: { ...process.env },
  shell: true
});

child.on('error', (error) => {
  console.error('❌ Failed to start server:', error.message);
  process.exit(1);
});

child.on('exit', (code) => {
  console.log(`🔄 Server exited with code ${code}`);
  if (code !== 0) {
    process.exit(code);
  }
});