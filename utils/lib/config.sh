#!/bin/bash
# Configuration and shared variables for Obsidian export

# Color output
export GREEN='\033[0;32m'
export YELLOW='\033[1;33m'
export RED='\033[0;31m'
export NC='\033[0m' # No Color

# Paths
export HUGO_ROOT="/home/r-jin/code/r-jin"
export OBSIDIAN_VAULT="/mnt/c/Users/Ryan/Documents/Second Brain"
export OBSIDIAN_BLOG="$OBSIDIAN_VAULT/6. Blog"
export CONTENT_DIR="$HUGO_ROOT/content"
export STATIC_IMAGES="$HUGO_ROOT/static/images"

# Ensure yq is in PATH
export PATH="$HOME/.local/bin:$PATH"

# Supported image extensions
export IMAGE_EXTENSIONS="png|jpg|jpeg|gif|webp|svg|PNG|JPG|JPEG|GIF|WEBP|SVG"
