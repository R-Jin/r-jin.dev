#!/bin/bash
# Process cover images from frontmatter

process_cover_images() {
    echo -e "${YELLOW}[3.5/6] Processing cover images from frontmatter...${NC}"
    local cover_count=0
    
    find "$CONTENT_DIR" -type f -name "*.md" -print0 | while IFS= read -r -d '' md; do
        # Extract frontmatter and parse cover.image field
        cover_image=$(awk '/^---$/{i++}i==1' "$md" | yq eval '.cover.image // ""' 2>/dev/null)
        
        # Skip if empty, null, or not a string
        if [ -z "$cover_image" ] || [ "$cover_image" == "null" ] || [ "$cover_image" == "''" ] || [ "$cover_image" == '""' ]; then
            continue
        fi
        
        # Extract filename from path (handles /images/file.png or just file.png)
        filename=$(basename "$cover_image")
        
        # Skip if it doesn't look like an image
        if ! [[ "$filename" =~ \.(${IMAGE_EXTENSIONS})$ ]]; then
            continue
        fi
        
        # Check if image already exists in static/images
        if [ -f "$STATIC_IMAGES/$filename" ]; then
            continue  # Already copied
        fi
        
        # Try to find the image in Attachments folder
        img_source="$OBSIDIAN_VAULT/Attachments/$filename"
        
        if [ -f "$img_source" ]; then
            cp "$img_source" "$STATIC_IMAGES/$filename"
            echo "  Copied cover: $filename (from $(basename "$md"))"
            ((cover_count++)) || true
        else
            echo -e "${RED}  Warning: Cover image not found: $filename (referenced in $(basename "$md"))${NC}"
        fi
    done
    
    echo -e "${GREEN}  Copied $cover_count cover image(s)${NC}"
}
