function binary_search(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
           } else if (arr[mid] < target) {
           left = mid + 1;
           } else {
           right = mid - 1;
           }
       }

     return -1;
 }

// if running the program from the command line:
// pass the array and target as arguments
// Example: node binary_search.js 1 3 5 7 9 5
// This will search for the target value of 5 in the array [1, 3, 5, 7, 9].

// if not running from the command line:
// Set the array and target value to test the function. eg:
//const arr = [1, 3, 5, 7, 9];
//const target = 7;

// Check if the arr and target are passed as command line arguments
if (process.argv.length > 2) {
  // Get the arr from command line arguments and convert to an array of numbers
  const arr = process.argv.slice(2, -1).map(Number);
  // Get the target from command line argument and convert to a number
  const target = Number(process.argv.slice(-1));

  // Call the binary_search function with the arr and target
  const result = binary_search(arr, target);

  // Check if the result is not -1, then print the index of target in arr
  if (result !== -1) {
    console.log(`index of ${target} is ${result} in array [${arr}]`);
  } else {
    console.log(`no result for ${target} in the array [${arr}]`);
  }

} else {
  // If the arr and target are not passed as command line arguments, then use default values
  const arr = [1, 3, 5, 6, 9];
  const target = 6;

  // Call the binary_search function with the arr and target
  const result = binary_search(arr, target);

  // Check if the result is not -1, then print the index of target in arr
  if (result !== -1) {
    console.log(`index of ${target} is ${result} in array [${arr}]`);
  } else {
    console.log(`no result for ${target} in the array [${arr}]`);
  }
}

