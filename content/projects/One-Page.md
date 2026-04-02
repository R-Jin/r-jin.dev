---
title: One-Page
date: 2021-12-06T21:27:53+01:00
draft: false
tags:
- JavaScript
- API
categories:
- Project
description: Custom start page
showToc: true
TocOpen: false
cover:
  image: /images/One-Page.png
  alt: start page
  caption: ''
  hiddenInSingle: false
---

One-Page is a custom start page that helps you start your web browsing session right! With One-Page, you'll have all the necessary information you need in one place, including the current time and temperature, as well as quick links to your favorite websites.

To add a little inspiration to your day, One-Page also features a random quote to motivate you as you begin your day.

## Tech Stack

* ReactJS
* Styled Components
* [OpenWeatherAPI](https://openweathermap.org/api)
* [Quotable API](https://github.com/lukePeavey/quotable)
* fetch API

## Links

* **Repository:** [GitHub](https://github.com/R-Jin/One-page)

## Installation

````bash
# Installation instructions
git clone https://github.com/R-Jin/One-page.git
cd One-page
npm install
````

To make the weather widget work create a openweathermap account and create a API key. Create a `.env` file in the root of the project check out the `.env.example`.

To edit the weather location. Change the `city` variable in `src/api.js`. The city codes are available on [openweatherapi](https://openweathermap.org/).

Change artwork in `src/misc/artwork/` and change the file name to `artwork.jpg`.

Edit the links in `src/components/Links/Links.js`.

## Usage

For testing on local server run:

````bash
npm run start
````

When done editing the files run:

````bash
npm run build
````

## Lessons Learned

* Writing frontend and handle state with ReactJS.
* Fetching data from API using the fetch API.
* Keeping API keys secret using `.env` file
