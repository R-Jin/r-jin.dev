---
title: Level 26 - Level 27
date: 2026-02-20T21:52:29+01:00
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

Good job getting a shell! Now hurry and grab the password for bandit27!

## Solution

In home directory there is `bandit27-do` executable. Lets try running it.

![Pasted image 20260220225036.png](/images/Pasted%20image%2020260220225036.png)

Looks like it is running a command under user bandit27 lets confirm by running `whoami` with this command.

````bash
./bandit27-do whoami
````

![Pasted image 20260220225233.png](/images/Pasted%20image%2020260220225233.png)

That means that we can cat out the password of bandit27 with this binary.

````bash
./bandit27-do cat /etc/bandit_pass/bandit27
````

## Lessons Learned

* Not much tbh :(

## Tools Used

* `ssh`
* `cat`
* `whoami`
