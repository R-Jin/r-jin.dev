#!/bin/bash
# Clear the content folder first to avoid ghost files
rm -rf /home/r-jin/code/r-jin/content/*

# Run the export
# --hard-linebreaks is often good for Obsidian users
obsidian-export "/mnt/c/Users/Ryan/Documents/Second Brain/6. Blog" /home/r-jin/code/r-jin/content