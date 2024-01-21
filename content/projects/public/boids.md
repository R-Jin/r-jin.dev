---
title: 'Boids'
metaTitle: 'Boids'
metaDesc: 'Boids simulation'
date: '2022-08-27'
tags: 
    - Python
    - Pygame
---

The Boids simulation is an interesting way to observe the flocking behavior seen in 
for example birds and fish. With this simulation, you can experiment with different
parameters and see how they affect the flocking behavior.

![The simulation](/media/boids.gif)

# How it works
The behavior of the boids follows three rules:

- **Separation**: Boids steer to avoid crowding their neighbors.
- **Alignment**: Boids steer towards the average heading of their neighbors.
- **Cohesion**: Boids steer to move towards the average position of their neighbors.

These rules are applied to each boid, resulting in the flocking behavior that is observed.

# Customization
You can customize the simulation by modifying the `factor` variable in the `separation`,
`alignment` and `cohesion` functions that are defined in the `Boid.py` file.

[The source code for simulation is available on GitHub](https://github.com/R-Jin/Boids)