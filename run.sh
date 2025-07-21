#!/bin/bash
set -e

./install.sh

echo "Running the invoice processor script..."
npm run start
