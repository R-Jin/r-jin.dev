#!/bin/bash
# Copy images referenced in markdown content

copy_embedded_images() {
    echo -e "${YELLOW}[3/6] Copying referenced attachments...${NC}"
    local attachment_count=0
    
    find "$CONTENT_DIR" -type f -name "*.md" -print0 | while IFS= read -r -d '' md; do
        # Extract image references with relative paths (URL-encoded or not)
        grep -oP "!\[[^\]]*\]\(\K[^)]+\.(?:$IMAGE_EXTENSIONS)" "$md" 2>/dev/null | while read -r img_ref; do
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
}
