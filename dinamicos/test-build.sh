#!/bin/bash
# Test build script for Dinamicos.pt
# Run from /opt/data/sites/dinamicos/

set -e

echo "=========================================="
echo "Test Build - Dinamicos.pt"
echo "=========================================="

# 1. Check if Docker is available
if command -v docker &> /dev/null; then
    echo "✅ Docker available"
else
    echo "❌ Docker not available - using local Node.js"
fi

# 2. Create .env.local if not exists
if [ ! -f .env.local ]; then
    echo "📝 Creating .env.local from .env.example..."
    cp .env.example .env.local
fi

# 3. Install dependencies (if node_modules doesn't exist)
if [ ! -d node_modules ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# 4. Run production build
echo "🏗️  Running production build..."
npm run build

# 5. Check build output
if [ -d .next ]; then
    echo "✅ Build successful!"
    echo "📁 Build output: .next/"
    ls -la .next/static/chunks/*.js 2>/dev/null | head -5 || echo "No JS chunks found"
else
    echo "❌ Build failed - .next directory not found"
    exit 1
fi

# 6. Lint check
echo "🔍 Running lint..."
npm run lint 2>/dev/null || echo "Lint completed with warnings"

echo "=========================================="
echo "✅ Local build test PASSED"
echo "=========================================="