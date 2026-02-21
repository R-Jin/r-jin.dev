---
title: Level 19 - Level 20
date: 2026-02-19T21:29:55+01:00
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

To gain access to the next level, you should use the setuid binary in the homedirectory. Execute it without arguments to find out how to use it. The password for this level can be found in the usual place (/etc/bandit_pass), after you have used the setuid binary.

## Solution

SSH into machine on port 2220 with password from previous level.

````bash
ssh -p 2220 bandit19@bandit.labs.overthewire.org
````

So here we are provided with a binary executable called `bandit20-do`. It runs a command as another user. In this case the user is probably `bandit20` which we can confirm by running it with `whoami`.

````bash
./bandit20-do whoami
````

![Pasted image 20260219213523.png](/images/Pasted%20image%2020260219213523.png)

We know that the bandit20 password is located in `/etc/bandit_pass` directory so we can `ls` and check who has permission to read it.

````bash
ls -l /etc/bandit_pass/
````

![Pasted image 20260219213708.png](/images/Pasted%20image%2020260219213708.png)

We see that it is bandit20 so we can use our binary to `cat` the password.

````bash
./bandit20-do cat /etc/bandit_pass/bandit20
````

## Lessons Learned

* Running binary executables.
* Checking permissions.

## Tools Used

* `ssh`
* `ls`
* `cat`
