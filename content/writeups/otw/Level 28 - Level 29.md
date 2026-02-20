---
title: Level 28 - Level 29
date: 2026-02-20T23:06:24+01:00
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

There is a git repository at `ssh://bandit28-git@bandit.labs.overthewire.org/home/bandit28-git/repo` via the port `2220`. The password for the user `bandit28-git` is the same as for the user `bandit28`.

From your local machine (not the OverTheWire machine!), clone the repository and find the password for the next level. This needs git installed locally on your machine.

## Solution

Clone the repository.

````bash
git clone ssh://bandit28-git@bandit.labs.overthewire.org:2220/home/bandit28-git/repo
````

In this repo there is a `README.md` file with the following content ծ_Ô.

![Pasted image 20260220231102.png](/images/Pasted%20image%2020260220231102.png)

We can try to see if this repo has any commit history by using `git log`.

![Pasted image 20260220231750.png](/images/Pasted%20image%2020260220231750.png)

This seems to be the case. The commit message suggests that there is a leak in previous commits. Lets checkout an earlier commit.

````bash
git checkout 8b7c
````

Now `cat` the `README.md` and we get the password.

## Lessons Learned

* Looking at different commits.

## Tools Used

* `ssh`
* `git`
