#!/bin/bash
# Clean up unused images from static/images/

cleanup_unused_images() {
    echo -e "${YELLOW}[6/6] Cleaning up unused images...${NC}"
    cd "$HUGO_ROOT"
    used_images=$(mktemp)
    all_images=$(mktemp)
    
    # Extract all image references from markdown files
    if [ -d "$CONTENT_DIR" ]; then
        # Get embedded images from markdown content
        grep -roE "/images/[^)]+\\.(${IMAGE_EXTENSIONS})" "$CONTENT_DIR" 2>/dev/null | \
             sed 's|.*:/images/||; s|/images/||' | \
             # Decode URL encoding
             perl -pe 's/%([0-9A-Fa-f]{2})/chr(hex($1))/eg' > "$used_images" || true
        
        # Also get cover images from frontmatter
        find "$CONTENT_DIR" -type f -name "*.md" -print0 | while IFS= read -r -d '' md; do
            cover_image=$(awk '/^---$/{i++}i==1' "$md" | yq eval '.cover.image // ""' 2>/dev/null)
            if [ -n "$cover_image" ] && [ "$cover_image" != "null" ] && [ "$cover_image" != "''" ] && [ "$cover_image" != '""' ]; then
                # Extract filename from path
                basename "$cover_image"
            fi
        done >> "$used_images" 2>/dev/null || true
        
        # Sort and deduplicate
        sort -u "$used_images" -o "$used_images"
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
}
