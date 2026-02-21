---
title: Level 7 - Level 8
date: 2026-02-13T11:21:06+01:00
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

The password for the next level is stored in the file **data.txt** next to the word **millionth**

## Solution

SSH into machine on port 2220 with password from previous level.

````bash
ssh -p 2220 bandit7@bandit.labs.overthewire.org
````

Use `grep` to get the line with `millionth` in it.

````bash
grep millionth data.txt
````

![Pasted image 20260213101632.png](/images/Pasted%20image%2020260213101632.png)

## Lessons Learned

* Use `grep` to filter for rows.

## Tools Used

* `ssh`
* `grep`
* `ls`
