---
title: Level 27 - Level 28
date: 2026-02-20T22:59:42+01:00
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

There is a git repository at `ssh://bandit27-git@bandit.labs.overthewire.org/home/bandit27-git/repo` via the port `2220`. The password for the user `bandit27-git` is the same as for the user `bandit27`.

From your local machine (not the OverTheWire machine!), clone the repository and find the password for the next level. This needs git installed locally on your machine.

## Solution

Clone the git repo with `git clone` command.

````bash
git clone ssh://bandit27-git@bandit.labs.overthewire.org:2220/home/bandit27-git/repo
````

 > 
 > **Note**: port added to the repository.

![Pasted image 20260220230418.png](/images/Pasted%20image%2020260220230418.png)

Inside the cloned repository `repo` there is a `README` file with the password.

## Lessons Learned

* Clone remote repository using `git`

## Tools Used

* `ssh`
* `git clone`
