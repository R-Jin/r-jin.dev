---
title: "Binary heap, heapsort and priority queues"
description: "A explanation of the heap datastructure and its use cases"
date: "2023-12-25"
draft: true
---

In general the heap is a tree data structure. There are two different types of heaps, **min-heap** and **max-heap**.

In a **min-heap** each node is smaller or equal to its children and in a **max-heap** each node is greater than or equal to its children.

![Types of heaps](/media/types-of-heaps.png)

In a min-heap and max-heap we know that the root is the smallest or greatest element respectively. The time complexity of extracting the root element is $O(1)$.

## Binary heap

A binary heap respects two properties:

**Complete binary tree:** A binary tree where every layer is filled except maybe the last one which must have all its elements as far to the left as possible.

**Heap property:** Each node is smaller or equal to its children if it is a min-heap and each node is greater or equal to its children if it is a max-heap.

![Binary Heap](/media/binary-heap.png)

Here are two examples of invalid binary-heaps:

![Invalid since upper layer not filled](/media/binary-heap-invalid2.png)

![Invalid since bottom nodes are not pushed to the left](/media/binary-heap-invalid1.png)

### Storing the binary heap in an array

Since a binary heap is a complete binary tree it is possible to store the tree inside an array, which is more efficient.
This is possible because the related nodes can be found based on the current node index.

![](/media/binary-heap-array.png)

## Binary heap operations

There are five main operations a binary heap needs to be able to handle.

| Insert      | Get min/max | Extract min/max | Update | Build |
| ----------- | ----------- | --------------- | ------ | ----- |
| $O(log(n))$ |             |                 |        |       |

In order to keep the heap property two more operations are needed, **sift-up** and **sift-down**.

**Sift-up:** When the node that we want to reposition is at the bottom sift-up is used. The sift-up operation
swaps the element with its parent if it is smaller than its parent. It stops when the parent is larger.

**Sift-down:** When the node that we want to reposition is at the root sift-down is used. Sift-down checks its children and swaps if the children is smaller than itself. It stops when both children are larger.

Both of these operations moves the node by one level in the heap each iteration. This means that the number of iterations depend on the height of the heap. Since a binary heap is a complete tree and complete trees are always balanced, the time complexity of both of these iterations are $O(log(n))$.

### Insert

To insert a new element into the heap place the element in the end of the array. This might break the heap property, therefore the sift-up operation is applied to the element. The time complexity of the insert operation is therefore $O(log(n))$.

### Get min/max

To get the min/max from a heap is very efficient, since the target value will always be the root node. The time complexity of this operation is $O(1)$.

### Extract min/max
