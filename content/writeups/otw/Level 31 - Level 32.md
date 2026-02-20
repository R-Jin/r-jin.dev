---
title: Level 31 - Level 32
date: 2026-02-20T23:50:34+01:00
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

There is a git repository at `ssh://bandit31-git@bandit.labs.overthewire.org/home/bandit31-git/repo` via the port `2220`. The password for the user `bandit31-git` is the same as for the user `bandit31`.

From your local machine (not the OverTheWire machine!), clone the repository and find the password for the next level. This needs git installed locally on your machine.

## Solution

Clone the repo

````bash
git clone ssh://bandit31-git@bandit.labs.overthewire.org:2220/home/bandit31-git/repo
````

Looking at the `README.md`

![Pasted image 20260220235326.png](/images/Pasted%20image%2020260220235326.png)

So lets create a file `key.txt` with the content `"May I come in?"` to the `master` branch. After creating the file we need to stage the file and commit it before pushing. We also need to remove `*.txt` from the `.gitignore` file to stop git from ignoring `.txt` files.

````bash
git add key.txt
git commit -m "Ask for key"
git push
````

## Lessons Learned

* Pushing to commits to a remote repository.

## Tools Used

* `ssh`
* `git`
