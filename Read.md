# Codewars Solution: Multiples of 3 or 5

## Description
This is a JavaScript solution to a classic programming challenge, originally inspired by [Project Euler Problem 1](https://projecteuler.net/problem=1). The problem requires finding the sum of all natural numbers below a given number that are multiples of 3 or 5.

## Problem Statement
Given an integer `n`, return the sum of all numbers below `n` that are multiples of 3 or 5. If `n` is negative, return `0`.

### Example
```
Input: 10
Multiples of 3 or 5 below 10: [3, 5, 6, 9]
Sum: 23
Output: 23
```

## Solution Approach
- Iterate through all numbers below `n`.
- Check if a number is a multiple of `3` or `5`.
- Add it to the sum if it meets the condition.
- Ensure that if `n` is negative, the function returns `0`.

## Code Implementation
```javascript
const solution = (number) =>{
    if (number < 0) return 0; // If the number is negative, return 0

    let multiples = []; // Array to store valid multiples

    for (let i = 1; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            multiples.push(i); // Add the multiple to the array
        }
    }

    return multiples.reduce((sum, num) => sum + num, 0); // Sum up the array
  
}
```

## Usage
Call the function with a positive integer:
```javascript
console.log(solution(10)); // Output: 23
console.log(solution(20)); // Output: 78
console.log(solution(-5)); // Output: 0
```

## Notes
- This function runs in **O(n) time complexity**, iterating through each number below `n` once.
- It ensures numbers that are multiples of both 3 and 5 are counted only once.
- Inspired by **Project Euler Problem 1**.

## Author
Solution written by **Kevork Lepedjian** as part of a **Codewars** challenge.

javascript