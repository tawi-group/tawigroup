#!/usr/bin/env node

/**
 * Build script for Tawi Group website
 * Handles both development and production builds with proper cross-platform support
 */

import { spawn } from 'child_process';
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, '..');

// Configuration
const isDev = process.env.NODE_ENV === 'development';
const isProduction = process.env.NODE_ENV === 'production';

console.log('🚀 Building Tawi Group website...');
console.log(`📝 Environment: ${process.env.NODE_ENV || 'development'}`);
console.log(`📁 Project root: ${projectRoot}`);

async function ensureDirectoryExists(dir) {
  try {
    await fs.access(dir);
  } catch {
    await fs.mkdir(dir, { recursive: true });
    console.log(`📁 Created directory: ${dir}`);
  }
}

async function runCommand(command, args, options = {}) {
  return new Promise((resolve, reject) => {
    console.log(`▶️  Running: ${command} ${args.join(' ')}`);
    
    const child = spawn(command, args, {
      stdio: 'inherit',
      cwd: projectRoot,
      env: { ...process.env, ...options.env },
      shell: process.platform === 'win32',
      ...options
    });

    child.on('error', (error) => {
      console.error(`❌ Command failed: ${error.message}`);
      reject(error);
    });

    child.on('exit', (code) => {
      if (code === 0) {
        console.log(`✅ Command completed successfully`);
        resolve();
      } else {
        console.error(`❌ Command exited with code ${code}`);
        reject(new Error(`Command failed with exit code ${code}`));
      }
    });
  });
}

async function buildFrontend() {
  console.log('\n🎨 Building frontend...');
  try {
    await runCommand('pnpm', ['exec', 'vite', 'build'], {
      env: { NODE_ENV: 'production' }
    });
    console.log('✅ Frontend build completed');
  } catch (error) {
    console.error('❌ Frontend build failed:', error.message);
    throw error;
  }
}

async function buildBackend() {
  console.log('\n🔧 Building backend...');
  try {
    await ensureDirectoryExists(path.join(projectRoot, 'dist'));
    
    await runCommand('pnpm', ['exec', 'esbuild', 'server/index.ts', 
      '--platform=node', 
      '--packages=external', 
      '--bundle', 
      '--format=esm', 
      '--outdir=dist'
    ]);
    console.log('✅ Backend build completed');
  } catch (error) {
    console.error('❌ Backend build failed:', error.message);
    throw error;
  }
}

async function runDevelopmentServer() {
  console.log('\n🔄 Starting development server...');
  try {
    await runCommand('pnpm', ['exec', 'tsx', 'server/index.ts'], {
      env: { NODE_ENV: 'development' }
    });
  } catch (error) {
    console.error('❌ Development server failed:', error.message);
    throw error;
  }
}

async function main() {
  try {
    if (isDev) {
      await runDevelopmentServer();
    } else {
      await buildFrontend();
      await buildBackend();
      console.log('\n🎉 Build completed successfully!');
      console.log('📦 Frontend assets built to: dist/');
      console.log('🔧 Backend compiled to: dist/index.js');
    }
  } catch (error) {
    console.error('\n💥 Build process failed:', error.message);
    process.exit(1);
  }
}

main();