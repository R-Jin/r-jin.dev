---
title: Level 1 - Level 2
date: 2026-02-09T21:21:06+01:00
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

The password for the next level is stored in a file called **-** located in the home directory

## Solution

SSH into machine on port 2220 with password from previous level.

````bash
ssh -p 2220 bandit1@bandit.labs.overthewire.org
````

Use `cat` command on file `-`. Since `-` is reserved we need to use `./-` to get the password.

````bash
cat ./-
````

## Lessons Learned

* Using `cat` on weird file name.

## Tools Used

* `ssh`
* `cat`
