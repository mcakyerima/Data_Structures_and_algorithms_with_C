// function for linear search
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

// check if command line arguments are present
if (process.argv.length > 2) {
  const arr = process.argv.slice(2, -1);
  const target = process.argv[process.argv.length - 1];
  const index = linearSearch(arr, target);
  if (index === -1) {
    console.log(`No result for ${target} in the array ${arr}`);
  } else {
    console.log(`Index of ${target} is ${index} in array [${arr}]`);
  }
} else {
  // example usage
  const arr = [1, 3, 5, 6, 9];
  const target = 6;
  const index = linearSearch(arr, target);
  if (index === -1) {
    console.log(`No result for ${target} in the array ${arr}`);
  } else {
    console.log(`Index of ${target} is ${index} in array [${arr}]`);
  }
}

//sample call linear_search.js in command line
// the last number is the number to search
// node linear_search.js 4 2 7 1 3 9 7
