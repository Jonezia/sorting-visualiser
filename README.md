# Sorting Visualiser

A sorting visualiser with vertical bars, made with Reactjs

Parameters:
- Min: Minimum value of bars
- Max: Maximum value of bars
- Count: Number of bars (Warning: Count above 300 not recommended due to instability of bar width)
- Delay: Delay between updating bars

Sorting algorithms:
- Bubble sort
- Selection sort
- Merge sort
- Insertion sort
- Quick sort
- Heap sort

In general, yellow bars are pointers because considered, and red bars indicate swaps.
However, this isn't entirely consistent and I mainly use the colours to draw attention to particular bars.
Some of the algorithms have been modified to use indexes and modify in-place where the standard algorithm wouldn't usually, for example merge sort.

Demo link: https://youtu.be/Odn0Vx4zTtM