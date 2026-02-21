---
title: Level 4 - Level 5
date: 2026-02-10T21:11:06+01:00
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

The password for the next level is stored in the only human-readable file in the **inhere** directory. Tip: if your terminal is messed up, try the “reset” command.

## Solution

SSH into machine on port 2220 with password from previous level.

````bash
ssh -p 2220 bandit4@bandit.labs.overthewire.org
````

Use `file` command with `-i` flag to see type of the files. Find the file with ascii charset.

````bash
file -i ./-file07
````

Then `cat` the file

````bash
cat ./-file07
````

![Pasted image 20260210094638.png](/images/Pasted%20image%2020260210094638.png)

## Lessons Learned

* Using the `file` command to get more details about files.

## Tools Used

* `ssh`
* `cat`
* `file`
