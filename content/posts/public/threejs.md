---
title: 'Three.js: Part 1 - Setup'
metaTitle: 'ThreeJS'
metaDesc: 'Learning about 3D graphics for the web using Three.js'
date: '2023-11-24'
tags: 
    - 3D Graphics
    - Three.js
---

![](/media/threejslogo.png)

I have long been interested in graphics programming so I decided to begin exploring the world of 3D graphics. 
I opted to go with [Three.js](https://threejs.org/) since it seems to be a good abstraction layer of the 
lower level native WebGL API. In this post I will go through the basic setup of a Three.js project.

# Setup 
In order to run Three.js on a website, we need to run a local server. A very conveniant way of doing
this is using a "build tool". I will use [Vite](https://vitejs.dev/) since it has very fast server starts, 
update speeds and numerous other features. 

Begin by creating a folder for the project and run `npm init` inside the folder.

We can now add our dependencies which for this project setup is `vite` and `three`.
In the same folder run `npm install vite three`.

## Basic website
Now we can create our basic website and add javascript to it.
In the project folder, create a `src` directory and create an `script.js` file and an `index.html` file with the following content:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Three.js project</title>
</head>
<body>
    <h1>Hello world!</h1>
    <script type="module" src="./script.js"></script>
</body>
</html>
```
Notice how the we include `type="module"` in the `script` tag this is important since we will be splitting
files into modules in future parts.

In order to access Three.js we can import the `three` dependency in the `script.js` file by writing:
```js
import * as THREE from 'three'
```
Now we have access to all the core classes of Three.js inside the `THREE` variable.

To run our local server we need to go into the `package.json` file and change the `"scripts"`:
```js
{
  // ...
  "scripts": {
    "dev": "vite",
    "build": "vite build"
  },
  // ...
}
```
To run the server, in the project folder, run `npm run dev`. If we want to build the project run `npm run build`.