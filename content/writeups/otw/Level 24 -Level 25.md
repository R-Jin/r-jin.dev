---
title: Level 24 -Level 25
date: 2026-02-20T21:16:50+01:00
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

A daemon is listening on port 30002 and will give you the password for bandit25 if given the password for bandit24 and a secret numeric 4-digit pincode. There is no way to retrieve the pincode except by going through all of the 10000 combinations, called brute-forcing.  
You do not need to create new connections each time.

## Solution

SSH into machine on port 2220 with password from previous level.

````bash
ssh -p 2220 bandit24@bandit.labs.overthewire.org
````

Begin by testing the connection using `nc`.

````bash
nc localhost 30002
````

![Pasted image 20260220213854.png](/images/Pasted%20image%2020260220213854.png)

We can try random password to see how it works.

To brute force the pincode we can write a shell script that outputs the password and all the possible pincode combinations separated by a space.

````bash
#!/bin/bash

password=<password for bandit24>

for i in {0..9999};
do
	printf "%s %04d\r\n" "$password" "$i" 
done
````

Save this to `/tmp/brute_force.sh` and give it execute permission using `chmod`.

Then we can pipe this to the `nc` connection and then `grep` on all lines that do not contain `"Wrong"` using `-v` flag.

````bash
/tmp/brute_force.sh | nc localhost 30002 | grep -v Wrong
````

![Pasted image 20260220214208.png](/images/Pasted%20image%2020260220214208.png)

## Lessons Learned

* Piping into `nc` connection.

## Tools Used

* `ssh`
* `nc`
* `printf`
* `grep`
