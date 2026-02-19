---
title: Level 15 - Level 16
date: 2026-02-19T18:32:59+01:00
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

The password for the next level can be retrieved by submitting the password of the current level to **port 30001 on localhost** using SSL/TLS encryption.

**Helpful note: Getting “DONE”, “RENEGOTIATING” or “KEYUPDATE”? Read the “CONNECTED COMMANDS” section in the manpage.**

## Solution

SSH into machine on port 2220 with password from previous level.

````bash
ssh -p 2220 bandit15@bandit.labs.overthewire.org
````

Begin by seeing if port 30001 is open using `nmap`.

````bash
nmap -p30001 localhost
````

![Pasted image 20260219184019.png](/images/Pasted%20image%2020260219184019.png)

It is open so now we can try to connect to it using using SSL/TLS encryption. This can be done with `openssl s_client` command.

````bash
openssl s_client localhost:30001
````

There will be a lot of output but at the bottom you will see `read R BLOCK`. Here input the password to get the next levels password.

![Pasted image 20260219184955.png](/images/Pasted%20image%2020260219184955.png)

## Lessons Learned

* Use `openssl s_client` to connect using SSL/TLS encryption.

## Tools Used

* `ssh`
* `nc`
* `openssl s_client`
