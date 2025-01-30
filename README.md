# Incorrect Handling of Null and NaN Values in JavaScript Addition Function

This repository demonstrates a common yet subtle bug in JavaScript related to incorrect handling of null and NaN values during addition.

## Bug Description

The `foo` function attempts to add two numbers. However, it incorrectly handles null values and fails to address potential NaN values that might arise from invalid input.

## Bug Reproduction

1. Clone this repository.
2. Open `bug.js`.
3. Run the function `foo` with various inputs (including null and values that could lead to NaN).
4. Observe the unexpected behavior. 

## Solution

The corrected function in `bugSolution.js` shows robust handling for null and NaN values.

## Additional Notes

This issue is a classic example of edge-case handling issues that can occur in JavaScript if not carefully addressed. Always validate your inputs and handle potential errors (like null or NaN) to prevent unexpected behavior and program crashes.