#!/bin/bash
# Move images to static folder and update markdown paths

move_images_to_static() {
    echo -e "${YELLOW}[4/6] Moving images to static folder...${NC}"
    local image_count=0
    
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
}

update_image_paths() {
    echo -e "${YELLOW}[5/6] Updating image paths in markdown files...${NC}"
    local markdown_count=0
    
    find "$CONTENT_DIR" -type f -name "*.md" -print0 | \
         while IFS= read -r -d '' md; do
        # Check if file contains any image references
        if grep -qE "!\[.*\]\([^)]*\.(${IMAGE_EXTENSIONS})\)" "$md"; then
            # Use perl for more robust replacement that handles spaces and special characters
            # This extracts just the filename (basename) from any path and converts to /images/filename
            perl -i -pe "s{!\[([^\]]*)\]\((?:[^)]*/)*(([^/\)]+)\.(${IMAGE_EXTENSIONS}))\)}{![\$1](/images/\$2)}g" "$md"
            echo "  Updated: $(basename "$md")"
            ((markdown_count++)) || true
        fi
    done
    
    echo -e "${GREEN}  Updated $markdown_count markdown file(s)${NC}"
}
