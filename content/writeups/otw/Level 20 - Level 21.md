---
title: Level 20 - Level 21
date: 2026-02-19T21:39:30+01:00
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

There is a setuid binary in the homedirectory that does the following: it makes a connection to localhost on the port you specify as a commandline argument. It then reads a line of text from the connection and compares it to the password in the previous level (bandit20). If the password is correct, it will transmit the password for the next level (bandit21).

**NOTE:** Try connecting to your own network daemon to see if it works as you think

## Solution

SSH into machine on port 2220 with password from previous level.

````bash
ssh -p 2220 bandit20@bandit.labs.overthewire.org
````

Since the command makes a connection and reads a line from the connection we need to create a port that we can listen on. This we can do using `nc` I will use port 4000.

````bash
nc -lp 4000
````

Now we can open up another terminal and run the binary on port 4000.

````bash
./suconnect 4000
````

Now go back to the first window and paste in the password.
Now the window running the binary should read it and send the next password.

![otw level 20.gif](/images/otw%20level%2020.gif)

## Lessons Learned

* Opening and listening to a port using `nc`.

## Tools Used

* `ssh`
* `nc`
