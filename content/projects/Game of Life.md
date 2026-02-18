---
title: Game of Life
date: 2021-08-26T21:18:22+01:00
draft: false
tags:
- Python
categories:
- Project
description: John Conway's cellular automaton
showToc: true
TocOpen: true
cover:
  image: /images/gol.gif
  alt: game of life
  caption: Simulation of Game of Life
  hiddenInSingle: false
---

The Game of Life is a cellular automaton simulation created by mathematician John Conway in 1970. It simulates the birth, death and survival of cells on a grid.

## How it works

The rules are:

* Any live cell with fewer than two live neighbors dies, as if by underpopulation.
* Any live cell with two or three live neighbors lives on to the next generation.
* Any live cell with more than three live neighbors dies, as if by overpopulation.
* Any live cell with exactly three live neighbors becomes a live cell, as if by reproduction.

These rules are applied to each cell on the grid in a repetitive manner, and the resulting pattern is observed. The Game of Life can exhibit fascinating patterns from seemingly simple starting patterns.

## Links

* **Repository:** [GitHub](https://github.com/R-Jin/Game-of-Life)

## Installation

````bash
# Installation instructions
git clone https://github.com/R-Jin/Game-of-Life.git
````

## Usage

````bash
# Usage examples
python main.py
````

Use mouse left click to toggle between living and dead cells and `<space>` to start and pause the simulation.
