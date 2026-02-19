---
title: Level 13 - Level 14
date: 2026-02-19T17:19:17+01:00
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

The password for the next level is stored in **/etc/bandit_pass/bandit14 and can only be read by user bandit14**. For this level, you don’t get the next password, but you get a private SSH key that can be used to log into the next level. Look at the commands that logged you into previous bandit levels, and find out how to use the key for this level.

## Solution

SSH into machine on port 2220 with password from previous level.

````bash
ssh -p 2220 bandit13@bandit.labs.overthewire.org
````

We need to SSH into user bandit14 using the private SSH key. We can use the `-i` flag to provide a private key.

Begin by copying over the private key to local computer since OTW does not allow nested remote connections. This can be done by copying the content within the private key and creating a new file with the copied content on local machine.

SSH refuses to use a private key with too open permissions so we must restrict it. This can be done with `chmod`.

````bash
chmod 600 sshkey.private
````

Now on local machine we can run:

````bash
ssh -p 2220 -i ./sshkey.private bandit14@bandit.labs.overthewire.org
````

Then use `cat` to get the password:

````bash
cat /etc/bandit_pass/bandit14
````

## Lessons Learned

* How to use a private key to connect with SSH using `-i`.
* SSH requires the private key to have restricted permissions.
* Do not nest SSH connections.
* Using `chmod` to change permissions on a file.

## Tools Used

* `ssh`
* `chmod`
* `cat`
