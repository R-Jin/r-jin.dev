---
title: Level 5 - Level 6
date: 2026-02-10T21:21:06+01:00
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

The password for the next level is stored in a file somewhere under the **inhere** directory and has all of the following properties:

* human-readable
* 1033 bytes in size
* not executable

## Solution

SSH into machine on port 2220 with password from previous level.

````bash
ssh -p 2220 bandit5@bandit.labs.overthewire.org
````

Use `find` command with `-size` flag to specify file size and `-executable` for files that have user have execute permission for.  Then we can use `file -i` to find file with charset ascii.

````bash
find inhere/ -size 1033c \! -executable
file -i inhere/maybehere07/.file2
cat inhere/maybehere07/.file2
````

![Pasted image 20260213001153.png](/images/Pasted%20image%2020260213001153.png)

## Lessons Learned

* Using the `find` command to find files.

## Tools Used

* `ssh`
* `cat`
* `file`
* `find`
