# Content Management Guide

This guide explains how to create and manage content on your Hugo site.

## Site Structure

Your site is organized into the following sections:

- **Blog** (`/posts/`) - Articles, tutorials, and thoughts
- **Projects** (`/projects/`) - Project showcases and portfolio items
- **Writeups** (`/writeups/`) - CTF challenge writeups
- **About** (`/about/`) - Static about page
- **CV** (`/cv/`) - Your curriculum vitae with PDF download

## Creating New Content

### Blog Posts

Create a new blog post:

```bash
hugo new posts/my-new-post.md
```

This creates a file at `content/posts/my-new-post.md` with the following frontmatter:

```yaml
---
title: "My New Post"
date: 2026-02-18T10:00:00-05:00
draft: false
tags: []
categories: []
author: "Ryan Jin"
description: ""
showToc: true
TocOpen: false
ShowReadingTime: true
ShowBreadCrumbs: true
ShowPostNavLinks: true
ShowWordCount: true
---
```

**Tips:**
- Set `draft: false` when ready to publish
- Add relevant `tags` like `["python", "tutorial", "security"]`
- Add `categories` like `["Tutorial", "Security"]`
- Write a compelling `description` for SEO and summaries

### Projects

Create a new project:

```bash
hugo new projects/my-project.md
```

The project archetype includes sections for:
- Tech stack
- Features
- Installation instructions
- Usage examples
- Links to repository and demo
- Lessons learned

**Example tags:** `["python", "web", "security", "docker"]`

### CTF Writeups

Create a new writeup:

```bash
hugo new writeups/htb-machine-name.md
# or
hugo new writeups/thm-room-name.md
```

The writeup archetype includes sections for:
- Challenge information (platform, difficulty, category)
- Overview
- Reconnaissance
- Exploitation
- Solution
- Flag
- Lessons learned
- Tools used

**Important:** Use consistent tagging:
- Platform: `["hackthebox"]`, `["tryhackme"]`, `["ctftime"]`
- Difficulty: Use categories like `["Easy"]`, `["Medium"]`, `["Hard"]`
- Challenge type: `["web"]`, `["pwn"]`, `["crypto"]`, `["forensics"]`

**Example:**
```yaml
tags: ["hackthebox", "linux", "web", "sqli"]
categories: ["Medium"]
```

## Frontmatter Fields Explained

### Common Fields

- `title` - Post/page title (appears in heading and listings)
- `date` - Publication date (determines sort order)
- `draft` - If `true`, won't appear in production builds
- `tags` - Array of tags for filtering content
- `categories` - Array of categories for organizing content
- `description` - Short summary (used in listings and SEO)
- `author` - Author name (defaults to "Ryan Jin")

### Display Options

- `showToc: true` - Show table of contents
- `TocOpen: false` - TOC collapsed by default
- `ShowReadingTime: true` - Display estimated reading time
- `ShowBreadCrumbs: true` - Show breadcrumb navigation
- `ShowPostNavLinks: true` - Show prev/next post links
- `ShowWordCount: true` - Display word count

## Working with Tags and Categories

### Tags

Tags are used for cross-section filtering. For example:
- A blog post tagged `["python"]`
- A project tagged `["python"]`
- A writeup tagged `["python"]`

All three will appear at `/tags/python/`

**Best Practices:**
- Use lowercase for consistency
- Use hyphens for multi-word tags: `["web-security"]`
- Be specific: `["sqli"]` is better than just `["web"]`

### Categories

Categories are broader classifications:
- Blog: `["Tutorial"]`, `["Opinion"]`, `["Security"]`
- Writeups: `["Easy"]`, `["Medium"]`, `["Hard"]`
- Projects: `["Security Tools"]`, `["Web Apps"]`

## Publishing Content

### Set Draft Status

When you're ready to publish, ensure `draft: false` in the frontmatter:

```yaml
draft: false
```

### Build and Preview

Preview your site locally:

```bash
hugo server -D  # Include drafts
hugo server     # Published content only
```

Visit `http://localhost:1313` to view your site.

### Build for Production

Generate static files:

```bash
hugo
```

This creates the `public/` directory with your static site.

## Updating Static Pages

### About Page

Edit `content/about.md` to update your personal bio and information.

### CV Page

1. Edit `content/cv.md` to update your CV content
2. Replace `static/cv/ryan-jin-cv.pdf` with your actual CV PDF file

The CV page includes a download button that links to the PDF file.

## Adding to the Menu

Edit `hugo.yaml` to modify the top menu. The menu is defined at line 118:

```yaml
menu:
  main:
    - identifier: blog
      name: Blog
      url: /posts/
      weight: 10
```

**Fields:**
- `identifier` - Unique ID for the menu item
- `name` - Display text
- `url` - Link URL
- `weight` - Sort order (lower numbers appear first)

## File Organization

```
content/
├── posts/              # Blog posts
│   ├── _index.md       # Listing page customization
│   └── *.md            # Individual posts
├── projects/           # Projects
│   ├── _index.md       # Listing page customization
│   └── *.md            # Individual projects
├── writeups/           # CTF writeups
│   ├── _index.md       # Listing page customization
│   └── *.md            # Individual writeups
├── about.md            # About page
└── cv.md               # CV page

static/
└── cv/
    └── ryan-jin-cv.pdf # CV PDF file
```

## Tips and Best Practices

### Writing Good Descriptions

Good descriptions help with:
- SEO (search engines)
- Social media previews
- Site listings

Keep descriptions:
- 50-160 characters
- Descriptive but concise
- Focused on the "what" and "why"

### Using Code Blocks

Hugo supports syntax highlighting:

\`\`\`python
def hello_world():
    print("Hello, world!")
\`\`\`

Supported languages: `python`, `javascript`, `bash`, `go`, `yaml`, `dockerfile`, etc.

### Adding Images

Place images in the `static/` directory:

```
static/
└── images/
    └── screenshot.png
```

Reference in markdown:

```markdown
![Alt text](/images/screenshot.png)
```

### Internal Links

Link to other pages on your site:

```markdown
[Check out my projects](/projects/)
[Read my writeup](/writeups/htb-keeper/)
```

## Common Workflows

### Publishing a CTF Writeup

1. Complete the challenge and take notes
2. Create the writeup file: `hugo new writeups/htb-machine.md`
3. Fill in all sections from your notes
4. Add appropriate tags: platform, OS, techniques
5. Set category to difficulty: `["Medium"]`
6. Set `draft: false`
7. Preview with `hugo server`
8. Build and deploy

### Updating Your CV

1. Edit `content/cv.md` with new information
2. Generate a new PDF of your CV
3. Replace `static/cv/ryan-jin-cv.pdf`
4. Update the "Last Updated" date at the bottom
5. Build and deploy

## Getting Help

- Hugo Documentation: https://gohugo.io/documentation/
- PaperMod Theme: https://github.com/adityatelange/hugo-PaperMod
- Hugo Markdown Guide: https://www.markdownguide.org/tools/hugo/

## Quick Reference

```bash
# Create new content
hugo new posts/my-post.md
hugo new projects/my-project.md
hugo new writeups/htb-machine.md

# Preview site
hugo server -D        # With drafts
hugo server           # Published only

# Build site
hugo                  # Generates public/ directory

# View site structure
tree content/         # See all content files
ls -la content/posts/ # List all posts
```

---

For questions or issues, refer to the Hugo documentation or check the PaperMod theme wiki.
