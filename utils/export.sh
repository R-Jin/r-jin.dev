#!/bin/bash
set -e  # Exit on error

# Color output for better visibility
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${GREEN}Starting Obsidian to Hugo export...${NC}"

# Paths
HUGO_ROOT="/home/r-jin/code/r-jin"
OBSIDIAN_VAULT="/mnt/c/Users/Ryan/Documents/Second Brain"
OBSIDIAN_BLOG="$OBSIDIAN_VAULT/6. Blog"
CONTENT_DIR="$HUGO_ROOT/content"
STATIC_IMAGES="$HUGO_ROOT/static/images"

# Step 1: Clear the content folder first to avoid ghost files
echo -e "${YELLOW}[1/5] Clearing content folder...${NC}"
rm -rf "$CONTENT_DIR"/*

# Step 2: Run obsidian-export
# Use --start-at to export only from 6. Blog, but allow obsidian-export to 
# resolve references to files outside this folder (like Attachments/)
echo -e "${YELLOW}[2/6] Exporting from Obsidian...${NC}"
obsidian-export --start-at "$OBSIDIAN_BLOG" "$OBSIDIAN_VAULT" "$CONTENT_DIR"

# Step 3: Copy images referenced in markdown that weren't copied by obsidian-export
# This handles attachments outside the export path (e.g., vault-level Attachments folder)
echo -e "${YELLOW}[3/6] Copying referenced attachments...${NC}"
attachment_count=0
find "$CONTENT_DIR" -type f -name "*.md" -print0 | while IFS= read -r -d '' md; do
    # Extract image references with relative paths (URL-encoded or not)
    grep -oP '!\[[^\]]*\]\(\K[^)]+\.(?:png|jpg|jpeg|gif|webp|svg|PNG|JPG|JPEG|GIF|WEBP|SVG)' "$md" 2>/dev/null | while read -r img_ref; do
        # Decode URL encoding (%20 -> space, etc.)
        img_ref_decoded=$(echo "$img_ref" | sed 's/%20/ /g; s/%2F/\//g')
        
        # Skip if already an absolute path starting with /
        if [[ "$img_ref_decoded" == /* ]]; then
            continue
        fi
        
        # Resolve relative path from markdown file location
        md_dir=$(dirname "$md")
        img_source="$md_dir/$img_ref_decoded"
        
        # If the image doesn't exist at that relative location, try the vault Attachments folder
        if [ ! -f "$img_source" ]; then
            img_basename=$(basename "$img_ref_decoded")
            img_source="$OBSIDIAN_VAULT/Attachments/$img_basename"
        fi
        
        # Copy to static/images if found
        if [ -f "$img_source" ]; then
            img_basename=$(basename "$img_source")
            if [ ! -f "$STATIC_IMAGES/$img_basename" ]; then
                cp "$img_source" "$STATIC_IMAGES/$img_basename"
                echo "  Copied: $img_basename"
                ((attachment_count++)) || true
            fi
        else
            echo -e "${RED}  Warning: Could not find image: $img_ref_decoded${NC}"
        fi
    done
done
echo -e "${GREEN}  Copied $attachment_count attachment(s)${NC}"

# Step 4: Find and move images to static/images/
echo -e "${YELLOW}[4/6] Moving images to static folder...${NC}"
image_count=0
find "$CONTENT_DIR" -type f \
     \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" \
     -o -name "*.gif" -o -name "*.webp" -o -name "*.svg" \
     -o -name "*.PNG" -o -name "*.JPG" -o -name "*.JPEG" \
     -o -name "*.GIF" -o -name "*.WEBP" -o -name "*.SVG" \) \
     -print0 | while IFS= read -r -d '' img; do
    # Get just the filename
    filename=$(basename "$img")
    
    # Move to static/images/
    mv "$img" "$STATIC_IMAGES/$filename"
    
    echo "  Moved: $filename"
    ((image_count++)) || true
done

echo -e "${GREEN}  Moved $image_count image(s)${NC}"

# Step 5: Update markdown files to reference /images/ instead of relative paths
echo -e "${YELLOW}[5/6] Updating image paths in markdown files...${NC}"
markdown_count=0
find "$CONTENT_DIR" -type f -name "*.md" -print0 | \
     while IFS= read -r -d '' md; do
    # Check if file contains any image references
    if grep -qE '!\[.*\]\([^)]*\.(png|jpg|jpeg|gif|webp|svg|PNG|JPG|JPEG|GIF|WEBP|SVG)\)' "$md"; then
        # Use perl for more robust replacement that handles spaces and special characters
        # This extracts just the filename (basename) from any path and converts to /images/filename
        perl -i -pe 's{!\[([^\]]*)\]\((?:[^)]*/)*(([^/\)]+)\.(png|jpg|jpeg|gif|webp|svg|PNG|JPG|JPEG|GIF|WEBP|SVG))\)}{![$1](/images/$2)}g' "$md"
        echo "  Updated: $(basename "$md")"
        ((markdown_count++)) || true
    fi
done

echo -e "${GREEN}  Updated $markdown_count markdown file(s)${NC}"

# Step 6: Clean up unused images from static/images/
echo -e "${YELLOW}[6/6] Cleaning up unused images...${NC}"
cd "$HUGO_ROOT"
used_images=$(mktemp)
all_images=$(mktemp)

# Extract all image references from markdown files
if [ -d "$CONTENT_DIR" ]; then
    grep -roh '/images/[^)]*\.\(png\|jpg\|jpeg\|gif\|webp\|svg\|PNG\|JPG\|JPEG\|GIF\|WEBP\|SVG\)' "$CONTENT_DIR" 2>/dev/null | \
         sed 's|/images/||' | \
         # Decode URL encoding
         perl -pe 's/%([0-9A-Fa-f]{2})/chr(hex($1))/eg' | \
         sort -u > "$used_images" || true
fi

# List all images in static/images/
if [ -d "$STATIC_IMAGES" ]; then
    ls "$STATIC_IMAGES" 2>/dev/null | sort > "$all_images" || true
fi

# Find images not in use and remove them
removed_count=0
comm -23 "$all_images" "$used_images" | while read -r unused; do
    # Skip backup directory if it exists
    if [ "$unused" != "images.backup" ] && [ -f "$STATIC_IMAGES/$unused" ]; then
        echo "  Removing unused: $unused"
        rm "$STATIC_IMAGES/$unused"
        ((removed_count++)) || true
    fi
done

echo -e "${GREEN}  Removed $removed_count unused image(s)${NC}"

# Cleanup temp files
rm -f "$used_images" "$all_images"

# Remove empty directories from content folder
find "$CONTENT_DIR" -type d -empty -delete 2>/dev/null || true

echo -e "${GREEN}✓ Export complete!${NC}"
echo ""
echo "Summary:"
echo "  - Exported markdown from: $OBSIDIAN_BLOG"
echo "  - Content directory: $CONTENT_DIR"
echo "  - Images directory: $STATIC_IMAGES"
