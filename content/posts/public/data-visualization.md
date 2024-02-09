---
title: "Data visualization"
description: "Good standard practices to follow when visualizing data"
date: "2024-01-27"
---

Humans are often better at interpreting messages graphically compared to numerically. It is therefor important to create good figures. Plots are useful for summarization and showing trends in data.

## Creating good figures

Here are some things to consider when creating a plot:

- **Be sparing**: When choosing to employ visualizations, they should support the messsage and aid in communication.

- **Keep It Simple Stupid (KISS)**: It is often better with a simple plot rather than a cluttered one.

- Minimize unnecessary elements and decoration

  - Some plotting tools may include unnecessary and disturbing elements by default.
  - Gridlines, boxes, secondary ticks, etc. may be unnecessary sometimes.

- Use the same fonts as in the text that the plot will be placed in (Check out LaTeX mode in matplotlib)

- Produce vector graphics (e.g. PDF) rather than a PNG to keep plot looking sharp even when zooming in.

## Lie Factor

Minimizing the lie factor is important to avoid misleading plots.

- $\text{Lie Factor} = \frac{\text{size of an effect in the graphic}}{\text{size of the effect in the data}}$
- Present the actual data, not just interpolations.
- Use appropriate scale for the figure
- Show tick labels
- Show the origin

- Do not use 3D charts or pie charts, they are hard to interpret.
