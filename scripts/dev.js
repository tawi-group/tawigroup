#!/usr/bin/env node

/**
 * Development server script for Tawi Group website
 * Cross-platform compatible with proper error handling
 */

import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, '..');

// Set development environment
process.env.NODE_ENV = 'development';

console.log('🚀 Starting Tawi Group development server...');
console.log(`📁 Project root: ${projectRoot}`);
console.log(`🌐 Environment: ${process.env.NODE_ENV}`);

function startServer() {
  // Try different approaches to start tsx
  const commands = [
    ['pnpm', ['exec', 'tsx', 'server/index.ts']],
    ['npx', ['tsx', 'server/index.ts']],
    ['node', ['--loader', 'tsx/esm', 'server/index.ts']],
    ['node', ['node_modules/tsx/dist/cli.mjs', 'server/index.ts']]
  ];

  let currentCommand = 0;

  function tryNextCommand() {
    if (currentCommand >= commands.length) {
      console.error('❌ All methods failed to start the development server');
      console.error('💡 Try running: pnpm install && pnpm run dev');
      process.exit(1);
    }

    const [command, args] = commands[currentCommand];
    console.log(`▶️  Attempting: ${command} ${args.join(' ')}`);

    const child = spawn(command, args, {
      stdio: 'inherit',
      cwd: projectRoot,
      env: process.env,
      shell: process.platform === 'win32'
    });

    child.on('error', (error) => {
      console.log(`⚠️  Method ${currentCommand + 1} failed: ${error.message}`);
      currentCommand++;
      setTimeout(tryNextCommand, 100);
    });

    child.on('exit', (code) => {
      if (code === 0) {
        console.log('✅ Development server started successfully');
      } else {
        console.log(`⚠️  Method ${currentCommand + 1} exited with code ${code}`);
        currentCommand++;
        setTimeout(tryNextCommand, 100);
      }
    });
  }

  tryNextCommand();
}

// Handle graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down development server...');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Received SIGTERM, shutting down gracefully...');
  process.exit(0);
});

startServer();