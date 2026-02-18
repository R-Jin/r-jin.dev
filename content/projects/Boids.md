---
title: Boids
date: 2022-08-27T21:39:17+01:00
draft: false
tags: []
categories:
- Project
description: Flocking behavior in Python
showToc: true
TocOpen: true
cover:
  image: /images/boids.gif
  alt: boids simulation
  caption: ''
  hiddenInSingle: false
---

The Boids simulation is an interesting way to observe the flocking behavior seen in for example birds and fish. With this simulation, you can experiment with different parameters and see how they affect the flocking behavior.

## How it works

The behavior of the boids follows three rules:

* **Separation**: Boids steer to avoid crowding their neighbors.
* **Alignment**: Boids steer towards the average heading of their neighbors.
* **Cohesion**: Boids steer to move towards the average position of their neighbors.

These rules are applied to each boid, resulting in the flocking behavior that is observed.

## Features

Customize the simulation by modifying the `factor` variable in the `separation`, `alignment` and `cohesion` functions that are defined in the `Boid.py` file.

## Links

* **Repository:** [GitHub](https://github.com/R-Jin/Boids)

## Installation

Need to have pygame installed:

````bash
pip install pygame
````

Clone the repo:

````bash
# Installation instructions
git clone https://github.com/R-Jin/Boids.git
````

## Usage

````bash
cd Boids
python main.py
````
