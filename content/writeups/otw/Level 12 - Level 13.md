---
title: Level 12 - Level 13
date: 2026-02-16T16:31:06+01:00
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

The password for the next level is stored in the file **data.txt**, which is a hexdump of a file that has been repeatedly compressed. For this level it may be useful to create a directory under /tmp in which you can work. Use mkdir with a hard to guess directory name. Or better, use the command “mktemp -d”. Then copy the datafile using cp, and rename it using mv (read the manpages!)

## Solution

SSH into machine on port 2220 with password from previous level.

````bash
ssh -p 2220 bandit12@bandit.labs.overthewire.org
````

From the text we now that `data.txt` is a hexdump of a file that has been repeatedly compressed. We therefore can assume that we need to revert the hexdump and repeatedly decompress the file.

Start of by going to a directory where we have read and write permissions. For this we can use command `mktemp -d` to create a temporary directory and copy `data.txt` into. Here we can work with read and write permissions.

````bash
mktemp -d
cp data.txt <created tmp dir>
cd <created tmp dir>
````

![Pasted image 20260219152608.png](/images/Pasted%20image%2020260219152608.png)

To reverse the hexdump we can use the command `xxd -r` and write it into a output file.

````bash
xxd -r data.txt compressed
````

![Pasted image 20260219152821.png](/images/Pasted%20image%2020260219152821.png)

Now we can check the file type of the compressed file using `file`.

````bash
file compressed
````

![Pasted image 20260219153004.png](/images/Pasted%20image%2020260219153004.png)

Here we see that it is gzip compressed data so we need to decompress using `gzip -d`. Before we do that we need to rename the file, using `mv`, so that file extension contains `.gz` in order for gzip to recognize the file.

````bash
mv compressed data.gz
gzip -d data.gz
````

![Pasted image 20260219153417.png](/images/Pasted%20image%2020260219153417.png)

Repeat this process until the file is fully decompressed. It may use different compression tools (e.g. bzip2, tar) so you need to search up those tools and also what file extensions they use.

## Lessons Learned

* Reverse hexdump using `xxd`.
* Decompressing files.

## Tools Used

* `ssh`
* `cat`
* `xxd`
* `mv`
* `gzip`
* `bzip2`
* `tar`
* `file`
