---
title: Level 2 - Level 3
date: 2026-02-09T21:31:06+01:00
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

The password for the next level is stored in a file called `--spaces in this filename--` located in the home directory

## Solution

SSH into machine on port 2220 with password from previous level.

````bash
ssh -p 2220 bandit2@bandit.labs.overthewire.org
````

Use `cat` command. Since filename contains spaces we need to escape them using `\ `

````bash
cat ./--spaces\ in\ this\ filename--
````

## Lessons Learned

* Using `cat` on filename with spaces.

## Tools Used

* `ssh`
* `cat`
