---
title: Level 3 - Level 4
date: 2026-02-10T21:01:06+01:00
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

The password for the next level is stored in a hidden file in the **inhere** directory.

## Solution

SSH into machine on port 2220 with password from previous level.

````bash
ssh -p 2220 bandit3@bandit.labs.overthewire.org
````

Use `ls -a` to show all files even hidden ones. Then cat it.

## Lessons Learned

* Using `ls -a`

## Tools Used

* `ssh`
* `cat`
* `ls`
