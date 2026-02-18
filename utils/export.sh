#!/bin/bash
set -e  # Exit on error

# Obsidian to Hugo Export Script
# ==============================
# This script exports content from Obsidian vault to Hugo site with full image support:
# - Converts Obsidian markdown to standard markdown
# - Copies embedded images (![[image.png]]) from content and Attachments folder
# - Copies cover images from frontmatter (cover.image field)
# - Updates all image paths to Hugo-compatible /images/ format
# - Cleans up unused images automatically

# Get the directory where this script is located
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
LIB_DIR="$SCRIPT_DIR/lib"

# Source all library modules
source "$LIB_DIR/config.sh"
source "$LIB_DIR/copy-embedded-images.sh"
source "$LIB_DIR/process-cover-images.sh"
source "$LIB_DIR/update-image-paths.sh"
source "$LIB_DIR/cleanup-images.sh"

echo -e "${GREEN}Starting Obsidian to Hugo export...${NC}"

# Step 1: Clear the content folder first to avoid ghost files
echo -e "${YELLOW}[1/6] Clearing content folder...${NC}"
rm -rf "$CONTENT_DIR"/*

# Step 2: Run obsidian-export
# Use --start-at to export only from 6. Blog, but allow obsidian-export to 
# resolve references to files outside this folder (like Attachments/)
echo -e "${YELLOW}[2/6] Exporting from Obsidian...${NC}"
obsidian-export --start-at "$OBSIDIAN_BLOG" "$OBSIDIAN_VAULT" "$CONTENT_DIR"

# Step 3: Copy images referenced in markdown that weren't copied by obsidian-export
copy_embedded_images

# Step 3.5: Process cover images from frontmatter
process_cover_images

# Step 4: Find and move images to static/images/
move_images_to_static

# Step 5: Update markdown files to reference /images/ instead of relative paths
update_image_paths

# Step 6: Clean up unused images from static/images/
cleanup_unused_images

echo -e "${GREEN}✓ Export complete!${NC}"
echo ""
echo "Summary:"
echo "  - Exported markdown from: $OBSIDIAN_BLOG"
echo "  - Content directory: $CONTENT_DIR"
echo "  - Images directory: $STATIC_IMAGES"
