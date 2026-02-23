---
title: r-jin.dev
date: 2026-01-16T21:27:53+01:00
draft: false
tags:
- Hugo
- Bash
- Web
categories:
- Project
description: The current page :D
showToc: true
TocOpen: false
cover:
  image: /images/r-jin.png
  alt: personal page
  caption: ''
  hiddenInSingle: false
---

This is my personal blog where I share:

* Technical writeups from CTFs and HTB Labs
* Programming tutorials and insights
* Project showcases

Since I am a heavy user of the Obsidian notetaking app the goal was to make it sync with my Hugo project with hotkeys within obsidian so I don't have to leave the program to publish the posts.

## Tech Stack

* Hugo
* Bash script
* Obsidian

## How it works

I type my notes in Obsidian using markdown. I press a hotkey and all my files syncs to my Hugo project along with the images linked to these notes I want to post.

This is done with an Obsidian plugin called **[obsidian-shellcommands](https://github.com/Taitava/obsidian-shellcommands)** that can call bash scripts using a hotkey. Then I have another hotkey set to automatically commit and push to my GitHub which is tracked by my hosting provider Netlify. Netlify builds the Hugo site whenever it detects a change on my GitHub repo.

![sync.gif](/images/sync.gif)
