---
title: Level 29 - Level 30
date: 2026-02-20T23:27:21+01:00
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

There is a git repository at `ssh://bandit29-git@bandit.labs.overthewire.org/home/bandit29-git/repo` via the port `2220`. The password for the user `bandit29-git` is the same as for the user `bandit29`.

From your local machine (not the OverTheWire machine!), clone the repository and find the password for the next level. This needs git installed locally on your machine.

## Solution

Clone the repository

````bash
git clone ssh://bandit29-git@bandit.labs.overthewire.org:2220/home/bandit29-git/repo
````

Look in `README.md` and see

![Pasted image 20260220233120.png](/images/Pasted%20image%2020260220233120.png)

We can see if there are any production branches in this repository using `git branch -a`. `-a` flag also lists remote branches.

````bash
git branch -a
````

![Pasted image 20260220233348.png](/images/Pasted%20image%2020260220233348.png)

Here we can see that there are a few branches. Lets checkout `remotes/origin/dev`.

````bash
git checkout remotes/origin/dev
````

Now we can `cat` the `README.md` and get the password.

## Lessons Learned

* Find remote branches using `git branch -a`.

## Tools Used

* `ssh`
* `git`
