---
title: Level 6 - Level 7
date: 2026-02-13T10:21:06+01:00
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

The password for the next level is stored **somewhere on the server** and has all of the following properties:

* owned by user bandit7
* owned by group bandit6
* 33 bytes in size

## Solution

SSH into machine on port 2220 with password from previous level.

````bash
ssh -p 2220 bandit6@bandit.labs.overthewire.org
````

Use `find` command with `-size` flag to specify file size. Use `-exec` flag to execute `ls -al {} \;`  that gives the permissions and `grep` lines with "bandit7 bandit6".

````bash
find / -size 33c 2>/dev/null -exec ls -al {} \; | grep "bandit7 bandit6"
cat /var/lib/dpkg/info/bandit7.password
````

![Pasted image 20260213101415.png](/images/Pasted%20image%2020260213101415.png)

## Lessons Learned

* Using the `find` chained with other commands such as `ls`.
* Use `grep` to filter for rows.

## Tools Used

* `ssh`
* `cat`
* `grep`
* `find`
* `ls`
