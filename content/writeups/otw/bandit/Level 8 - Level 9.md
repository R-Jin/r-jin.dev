---
title: Level 8 - Level 9
date: 2026-02-13T12:21:06+01:00
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

The password for the next level is stored in the file **data.txt** and is the only line of text that occurs only once

## Solution

SSH into machine on port 2220 with password from previous level.

````bash
ssh -p 2220 bandit8@bandit.labs.overthewire.org
````

For this we can use command `uniq -c` that gives all lines once and their count. `uniq` only works if duplicates are adjacent to each other. Therefore we first sort the lines in `data.txt` using `sort` command. Lastly we find the line with a count of 1 by using `grep` with `"1 "`.

````bash
cat data.txt | sort | uniq -c | grep "1 "
````

![Pasted image 20260213102310.png](/images/Pasted%20image%2020260213102310.png)

## Lessons Learned

* Use `uniq` to get all rows with no duplicates.
* Use `sort` command.

## Tools Used

* `ssh`
* `grep`
* `uniq`
* `sort`
