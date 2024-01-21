---
title: 'One-Page'
metaTitle: 'One-Page'
metaDesc: 'A start page for your web browser'
date: '2021-12-06'
tags: 
    - ReactJS
    - NodeJS
    - Styled Components
---

One-Page is a custom start page that helps you start your web browsing session right!
With One-Page, you'll have all the necessary information you need in one place, including the 
current time and temperature, as well as quick links to your favorite websites. 

To add a little inspiration to your day, One-Page also features a random quote to motivate you 
as you begin your day.

![The start page](/media/One-Page.png)

# Techincal Details
One-Page is written using ReactJS and Styled Components. 

The weather information are fetched using the [OpenWeatherAPI](https://openweathermap.org/api) and the [Quotable API](https://github.com/lukePeavey/quotable) is used to 
retrieve random quotes.

All data is being fetched on the client-side using fetch API which is stored in the state of 
the application and passed down to the components as props.


[The source code for One-Page is available on GitHub](https://github.com/R-Jin/One-page)
