---
title: Facts (HTB)
date: 2026-03-06T17:12:53+01:00
draft: true
tags:
- Linux
categories:
- Writeup
description: Easy Machine.
showToc: true
TocOpen: false
---

## Challenge Information

* **Platform:** \[HackTheBox\]
* **Difficulty:** Easy
* **Category:** Linux

## Overview

Brief description of the challenge.

## Reconnaissance

Run `nmap`

````bash
nmap -p- -sC 10.129.1.99
````

````
Starting Nmap 7.95 ( https://nmap.org ) at 2026-03-06 16:22 UTC
Nmap scan report for 10.129.1.99
Host is up (0.026s latency).
Not shown: 65532 closed tcp ports (conn-refused)
PORT      STATE SERVICE
22/tcp    open  ssh
| ssh-hostkey:
|   256 4d:d7:b2:8c:d4:df:57:9c:a4:2f:df:c6:e3:01:29:89 (ECDSA)
|_  256 a3:ad:6b:2f:4a:bf:6f:48:ac:81:b9:45:3f:de:fb:87 (ED25519)
80/tcp    open  http
|_http-title: Did not follow redirect to http://facts.htb/
54321/tcp open  unknown

Nmap done: 1 IP address (1 host up) scanned in 8.77 seconds
````

Scan found `http` port open with redirect to `http://facts.htb/`. We can add this to `/etc/hosts` so browser can resolve the hostname.

````bash
echo "10.129.1.99 facts.htb" | sudo tee -a /etc/hosts
````

## Exploitation

Step-by-step exploitation process.

### Initial Access

How you gained initial access.

### Privilege Escalation

How you escalated privileges (if applicable).

## Solution

The final solution or flag capture method.

````bash
# Final commands or code
````

## Flag

````
flag{example_flag_here}
````

## Lessons Learned

* Keytakeaway1
* Keytakeaway2
* Keytakeaway3

## Tools Used

* Tool1
* Tool2
* Tool3
