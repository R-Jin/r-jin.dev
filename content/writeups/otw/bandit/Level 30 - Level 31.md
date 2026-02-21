---
title: Level 30 - Level 31
date: 2026-02-20T23:38:46+01:00
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

There is a git repository at `ssh://bandit30-git@bandit.labs.overthewire.org/home/bandit30-git/repo` via the port `2220`. The password for the user `bandit30-git` is the same as for the user `bandit30`.

From your local machine (not the OverTheWire machine!), clone the repository and find the password for the next level. This needs git installed locally on your machine.

## Solution

Clone the repo

````bash
git clone ssh://bandit30-git@bandit.labs.overthewire.org:2220/home/bandit30-git/repo
````

In git we can mark commits with a `tag`. To see all tags run

````bash
git tag
````

![Pasted image 20260220234725.png](/images/Pasted%20image%2020260220234725.png)

We see that there is a tag named `secret`. Lets show the tag

````bash
git show secret
````

![Pasted image 20260220234820.png](/images/Pasted%20image%2020260220234820.png)

## Lessons Learned

* Using git tags.

## Tools Used

* `ssh`
* `git`
