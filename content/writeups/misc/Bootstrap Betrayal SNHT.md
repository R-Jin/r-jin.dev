---
title: Bootstrap Betrayal (SNHT Qualifier)
date: 2026-02-25T00:50:45+01:00
draft: true
tags:
- ctf
- web
- snht
categories:
- Writeup
description: Uses CVE-2033-28432
showToc: true
TocOpen: false
---

## Challenge Information

* **Platform:** [SNHT](https://kval.snht.se/challenges#Bootstrap%20Betrayal-3)
* **Category:** Web

## Overview

An outdated MinIO cluster is running with a critical security vulnerability.  
Your goal is to retrieve the flag. GLHF!

The IT-Ops Portal is accessible at: `http://portal.cfire:8080`

## Reconnaissance

Upon opening the website we are greeted with IT-ops Portal.

![Pasted image 20260225005604.png](/images/Pasted%20image%2020260225005604.png)

In the channel we get information about an "env var leak" and also that the current version of the cluster is **RELEASE.2022-10-24T18-35-07Z**.

When clicking the links to the console they both takes you to `http://minio.cfire:9001/login` login screen.

![Pasted image 20260225010221.png](/images/Pasted%20image%2020260225010221.png)

From the network tab in the console we can find the IP address of the host.

![Pasted image 20260225011009.png](/images/Pasted%20image%2020260225011009.png)

## Exploitation

A google search on `"minio env var leak"` leads to [CVE-2023-28432](https://www.sentinelone.com/blog/cve-2023-28432/) that affects MinIO deployments with versions starting from **RELEASE.2019-12-17T23-16-33Z** to **RELEASE.2023-03-20T20-16-18Z**. This vulnerability exposes environment variables, including MINIO_SECRET_KEY and MINIO_ROOT_PASSWORD.

Here when cluster is started you can browse the web console on `http://your-ip:9001` and the API server on `http://your-ip:9000`.

To get the environment variables you can send a POST request to the endpoint `http://your-ip:9000/minio/bootstrap/v1/verify`.

## Solution

Since the MinIO cluster is within the version range stated in the CVE the plan is to use the CVE to get the environment variables. We then use the credentials, retrieved from the environment variables, to login to the console.

We begin by sending a POST request to the vulnerable endpoint and get the credentials `MINIO_ROOT_PASSWORD` and `MINIO_ROOT_USER`.

````bash
curl -X POST http://10.42.6.207:9000/minio/bootstrap/v1/verify
````

![Pasted image 20260225010707.png](/images/Pasted%20image%2020260225010707.png)

Then we use these credentials to login to the console.

![Pasted image 20260225011440.png](/images/Pasted%20image%2020260225011440.png)

Here we can browse through the different directories to find the flag which is located in the `documents` directory.

![Pasted image 20260225011557.png](/images/Pasted%20image%2020260225011557.png)

## Lessons Learned

* Using a CVE to exploit.
* Sending request with curl.

## Tools Used

* `curl`
