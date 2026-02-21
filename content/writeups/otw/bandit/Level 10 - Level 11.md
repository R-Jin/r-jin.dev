---
title: Level 10 - Level 11
date: 2026-02-13T14:31:06+01:00
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

The password for the next level is stored in the file **data.txt**, which contains base64 encoded data

## Solution

SSH into machine on port 2220 with password from previous level.

````bash
ssh -p 2220 bandit10@bandit.labs.overthewire.org
````

File is base64 encoded so we need to decode it using `base64 -d` command.

````bash
base64 -d data.txt
````

![Pasted image 20260213103100.png](/images/Pasted%20image%2020260213103100.png)

## Lessons Learned

* Use `base64 -d` to decode encoded file.

## Tools Used

* `ssh`
* `base64`
