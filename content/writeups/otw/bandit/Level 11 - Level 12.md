---
title: Level 11 - Level 12
date: 2026-02-16T15:31:06+01:00
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

The password for the next level is stored in the file **data.txt**, where all lowercase (a-z) and uppercase (A-Z) letters have been rotated by 13 positions

## Solution

SSH into machine on port 2220 with password from previous level.

````bash
ssh -p 2220 bandit11@bandit.labs.overthewire.org
````

For this we can use the `tr` command to translate each character by 13 positions. Like so `'A-Za-z' 'N-ZA-Mn-za-m'`. This translates `'A'` to `'N'` and so on.

````bash
cat data.txt | tr 'A-Za-z' 'N-ZA-Mn-za-m'
````

![Pasted image 20260216222907.png](/images/Pasted%20image%2020260216222907.png)

## Lessons Learned

* Use `tr` to translate characters.

## Tools Used

* `ssh`
* `cat`
* `tr`
