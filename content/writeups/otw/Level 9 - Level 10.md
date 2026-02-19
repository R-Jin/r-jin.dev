---
title: Level 9 - Level 10
date: 2026-02-13T13:21:06+01:00
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

The password for the next level is stored in the file **data.txt** in one of the few human-readable strings, preceded by several ‘=’ characters.

## Solution

SSH into machine on port 2220 with password from previous level.

````bash
ssh -p 2220 bandit9@bandit.labs.overthewire.org
````

The `data.txt` file is a binary file. So in order to grep we have to pass the `--binary-file=text` flag.

````bash
grep --binary-file=text "====" data.txt
````

![Pasted image 20260213102739.png](/images/Pasted%20image%2020260213102739.png)

## Lessons Learned

* Use `grep` on binary files.

## Tools Used

* `ssh`
* `grep`
