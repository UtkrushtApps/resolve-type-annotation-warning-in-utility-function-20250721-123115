#!/bin/bash
set -e

if [ ! -d "node_modules" ]; then
  echo "Installing Node.js dependencies..."
  npm install
fi

if [ ! -d "dist" ]; then
  echo "Building the TypeScript project..."
  npx tsc
fi

echo "Install script completed successfully."
