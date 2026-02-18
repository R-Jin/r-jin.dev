#!/bin/bash

BLOG_REPO="/home/r-jin/code/r-jin"

cd "$BLOG_REPO" || exit

# Check if there are actually changes to avoid empty commits
if [[ -z $(git status --porcelain) ]]; then
    echo "No changes detected. Skipping push."
    exit 0
fi

# The Git Workflow
echo "Changes detected. Pushing to remote..."
git add .
git commit -m "Content update: $(date +'%Y-%m-%d %H:%M:%S')"
git push

echo "Deployment complete!"