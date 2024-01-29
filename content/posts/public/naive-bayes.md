---
title: "Naive Bayesian Classifier"
description: "An explanation of naive bayesian classifiers"
date: "2024-01-29"
draft: true
---

There are two commonly used types of Naive Bayesian Classifiers: the **Multinomial Naive Bayes Classifier** and the **Gausian Naive Bayes Classifier**.

## Multinomial Naive Bayes Classifier

In order to understand how Multinomial Naive Bayes works we are gonna use an email spam filter as an example.
The spam filter works by making a histogram of all occuring words for both normal mails and spam mails.
Using this histogram it is now possible to calculate the probability of a word occuring given that it was in a
normal mail or spam mail. This is denoted mathematically as $P(\text{Word} | \text{Normal})$ and $P(\text{Word} | \text{Spam})$ respectively.
Since these probabilities are calculated using discrete values (words), they are also called **likelihoods**.
