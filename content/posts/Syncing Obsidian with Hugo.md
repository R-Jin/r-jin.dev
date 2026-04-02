---
title: Syncing Obsidian with Hugo
date: 2026-02-18T12:50:17+01:00
draft: false
tags:
- Obsidian
- Hugo
categories:
- Blog
author: Ryan Jin
description: Using Obsidian and Hugo to create blog posts seamlessly.
showToc: true
TocOpen: false
ShowReadingTime: true
ShowBreadCrumbs: true
ShowPostNavLinks: true
ShowWordCount: true
---

As a developer, I’m constantly consuming technical blogs. Eventually, I felt inspired to start my own space to document my learning process and share the things I find interesting.

Since **Obsidian** is already my go-to for daily note-taking, I wanted a seamless way to turn those private notes into public posts. For the blog itself, I settled on **Hugo** using the [PaperMod](https://github.com/adityatelange/hugo-PaperMod) theme.

## The Goal

Write a post in Obsidian, hit a hotkey, and have it immediately sync to my Hugo project.

## The Setup

* **[obsidian-export](https://github.com/zoni/obsidian-export):** A Rust-based CLI that handles converting Obsidian-style Markdown (like Wikilinks) into standard Markdown that Hugo understands.
* **[obsidian-shellcommands](https://github.com/Taitava/obsidian-shellcommands):** An Obsidian community plugin that allows you to trigger local terminal scripts directly from the command palette.

## The Sync Script

The following script clears my Hugo `content` folder to prevent "ghost files" (deleted notes that stay in the build) and then exports my dedicated blog folder from my Obsidian vault.

````bash
#!/bin/bash
# Clear the content folder first to avoid ghost files
rm -rf <hugo project path>/content/*

# Export from the Obsidian vault to the Hugo content directory
obsidian-export \
    <path of obsidian folder to sync> \
    <hugo project path>/content
````

using obsidian-shellcommands plugin I bound the hotkey `ctrl + s` to run this script.
