---
title: 'Game of Life'
metaTitle: 'Boids'
metaDesc: "John Conways's cellular automaton"
date: '2021-08-26'
tags: 
    - Python
    - Pygame
---

The Game of Life is a cellular automaton simulation created by mathematician John Conway in 1970.
It simulates the birth, death and survival of cells on a grid.

![ ](/media/gol.gif)

# How it works

The rules are: 

- Any live cell with fewer than two live neighbors dies, as if by underpopulation.
- Any live cell with two or three live neighbors lives on to the next generation.
- Any live cell with more than three live neighbors dies, as if by overpopulation.
- Any live cell with exactly three live neighbors becomes a live cell, as if by reproduction.

These rules are applied to each cell on the grid in a repetitive manner, and the resulting pattern
is observed. The Game of Life can exhibit fascinating patterns from seemingly simple starting patterns.

[The source code for Game of Life is available on GitHub](https://github.com/R-Jin/Game-of-Life)