---
title: Level 21 - Level 22
date: 2026-02-19T22:06:40+01:00
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

A program is running automatically at regular intervals from **cron**, the time-based job scheduler. Look in **/etc/cron.d/** for the configuration and see what command is being executed.

## Solution

SSH into machine on port 2220 with password from previous level.

````bash
ssh -p 2220 bandit21@bandit.labs.overthewire.org
````

Look for configuration in `/etc/cron.d/`

````bash
ls -la /etc/cron.d/
````

![Pasted image 20260219223312.png](/images/Pasted%20image%2020260219223312.png)

We see `cronjob_bandit22` looks promising!

Next we `cat` this config to see what command is being executed.

````bash
cat /etc/cron.d/cronjob_bandit22
````

![Pasted image 20260219223459.png](/images/Pasted%20image%2020260219223459.png)

We see that `/usr/bin/cronjob_bandit22.sh` is being executed.

We can try to run the script but when I tried I did not have permission.

Let's `cat` this script instead to see what it does.

````bash
cat /usr/bin/cronjob_bandit22.sh
````

![Pasted image 20260219223703.png](/images/Pasted%20image%2020260219223703.png)

It redirects the password of bandit22 to the file `/tmp/t7O6lds9S0RqQh9aMcz6ShpAoZKF7fgv`.

So now all we have to do to get password is to `cat` this file.

## Lessons Learned

* `cat` scripts to see what they do you don't always have to run them to get the information you need.

## Tools Used

* `ssh`
* `cat`
* `ls`
