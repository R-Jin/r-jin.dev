---
title: Level 0 - Level 1
date: 2026-02-09T21:11:06+01:00
draft: false
tags:
- OTW
- Bandit
- Linux
categories:
- Writeup
description: Bandit
showToc: true
TocOpen: false
---

## Challenge Information

* **Platform:** OverTheWire (Bandit)
* **Difficulty:** Easy
* **Category:** Linux

## Overview

The password for the next level is stored in a file called **readme** located in the home directory. Use this password to log into bandit1 using SSH. Whenever you find a password for a level, use SSH (on port 2220) to log into that level and continue the game.

## Solution

SSH into machine on port 2220 with password `bandit0`.

````bash
ssh -p 2220 bandit0@bandit.labs.overthewire.org
````

Use `cat` command on readme to get the password.

````bash
cat readme
````

## Lessons Learned

* How to use `cat`.

## Tools Used

* `ssh`
* `cat`
