---
title: Level 18 - Level 19
date: 2026-02-19T19:25:15+01:00
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

The password for the next level is stored in a file readme in the homedirectory. Unfortunately, someone has modified .bashrc to log you out when you log in with SSH.

## Solution

SSH into machine on port 2220 with password from previous level.

````bash
ssh -p 2220 bandit18@bandit.labs.overthewire.org
````

But when you do you immediately get logged out with bye bye message.

What we can do instead is to let SSH run a command instead of opening interactive shell. So we can `cat` the readme for example.

````bash
ssh -p 2220 bandit18@bandit.labs.overthewire.org "cat readme"
````

## Lessons Learned

* Running commands using SSH.

## Tools Used

* `ssh`
* `cat`
* `ls`
