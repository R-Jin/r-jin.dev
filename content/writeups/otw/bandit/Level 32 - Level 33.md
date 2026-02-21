---
title: Level 32 - Level 33
date: 2026-02-21T00:01:52+01:00
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

After all this `git` stuff, it’s time for another escape. Good luck!

## Solution

SSH into machine on port 2220 with password from previous level.

````bash
ssh -p 2220 bandit32@bandit.labs.overthewire.org
````

Immediately upon login we are greeted with a message and everything we input into the shell gets turned to uppercase.

![Pasted image 20260221002703.png](/images/Pasted%20image%2020260221002703.png)

Somethings we can access are environment variables since they are always uppercase.

One such variable that we can use is the `$0` variable which tells you the identity of what is currently being run.

When we pass in `$0` to the uppercase shell it converts my input to uppercase and then passes it to the actual shell binary. This means that `$0` is gonna resolve to the shell program, run it and bring us to a regular shell.

In the regular shell we can do a `ls -la` to see what is in this host.

![Pasted image 20260221004220.png](/images/Pasted%20image%2020260221004220.png)

We see that the `uppershell` is owned by `bandit33` with the `SUID` permission active. This means that anyone of executes this program will do it under user that owns this file in this case `bandit33`. This also probably means that we are user `bandit33` based on the previous uppercase shell we got put into when logging in to the machine. We can confirm this by running `whoami`.

![Pasted image 20260221004639.png](/images/Pasted%20image%2020260221004639.png)

Indeed we are `bandit33` and we can therefor access the password in `/etc/bandit_pass/bandit33`.

````bash
cat /etc/bandit_pass/bandit33
````

## Lessons Learned

* SUID permissions.
* Positional arguments.

## Tools Used

* `ssh`
