---
title: Level 17 - Level 18
date: 2026-02-19T19:15:58+01:00
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

There are 2 files in the homedirectory: **passwords.old and passwords.new**. The password for the next level is in **passwords.new** and is the only line that has been changed between **passwords.old and passwords.new**

**NOTE: if you have solved this level and see ‘Byebye!’ when trying to log into bandit18, this is related to the next level, bandit19**

## Solution

SSH into machine on port 2220 with credentials from previous level.

````bash
ssh -p 2220 -i ./<credentials> bandit17@bandit.labs.overthewire.org
````

## Lessons Learned

* 

## Tools Used

* `ssh`
