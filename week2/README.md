# Week 2: Binary Search Algorithm
This week, we will be learning about the Binary Search Algorithm. We will be covering the following topics:
- What is the Binary Search Algorithm?
- How does the Binary Search Algorithm work?
- Implementations of the Binary Search Algorithm in different programming languages (C and JavaScript).

## What is the Binary Search Algorithm?
Binary Search Algorithm is a searching algorithm used to find the position of a target value within a sorted
array. It works by comparing the target value with the middle element of the array. If they are equal, the 
algorithm returns the position of the middle element. Otherwise, the search continues either on the left or 
right half of the array, depending on whether the target value is less than or greater than the middle element.
This process is repeated until the target value is found or all elements have been searched.

## How does the Binary Search Algorithm work?
Here's how the Binary Search Algorithm works:
1. Find the middle element of the array
2. Compare the middle element with the target value
3. If the middle element is equal to the target value, return its position
4. If the target value is less than the middle element, search in the left half of the array
5. If the target value is greater than the middle element, search in the right half of the array
6. Repeat the process until the target value is found or all elements have been searched

## Implementations
### C Implementation:
You can find the C implementation of Binary Search Algorithm in the [binary_search.c](https://github.com/mcakyerima/Data_Structures_and_algorithms_with_C/blob/main/week2/binary_search.c) file.
The implementation takes a sorted array and a target value as input, and returns the position
of the target value within the array. If the target value is not found, the function returns -1.

### JavaScript Implementation

You can find the JavaScript implementation of Binary Search Algorithm in the [binary_search.js](https://github.com/mcakyerima/Data_Structures_and_algorithms_with_C/blob/main/week2/binary_search.js)   file.
The implementation takes a sorted array and a target value as input, and returns the position of the 
target value within the array. If the target value is not found, the function returns -1. 
You can run the JavaScript implementation from the command line using the following syntax:

```node binary_search.js <sorted_array> <target_value>```


For example, to find the position of the target value 6 within the array [1, 3, 5, 6, 9], you would run
the following command:

``` node binary_search.js 1 3 5 6 9 6 ```

This would output the following:

``` Index of 6 is 3 in array [1, 3, 5, 6, 9] ```

If the target value is not found in the array, the output would look like this:

``` No result for 8 in the array [1, 3, 5, 6, 9] ```

## Linear Search Algorithm

Linear search is a simple algorithm used to find an element in a list or array by sequentially checking each element until the target element is found or the end of the list is reached. It has a time complexity of O(n), where n is the length of the list or array.

## Implementations
- C: [linear_search.c](https://github.com/mcakyerima/Data_Structures_and_algorithms_with_C/blob/main/week2/linear_search.c)
- JavaScript: [linear_search.js](https://github.com/mcakyerima/Data_Structures_and_algorithms_with_C/blob/main/week2/linear_search.js)

## Conclusion
In this week's lesson, we learned about the Binary Search Algorithm and its implementation in C and JavaScript. 
The Binary Search Algorithm is an important algorithm in computer science, and it is used in many applications
such as searching, sorting, and data analysis. We hope that you have found this lesson informative and useful, 
and we encourage you to practice implementing the Binary Search Algorithm in different programming languages.




