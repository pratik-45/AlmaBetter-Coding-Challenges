function arrayIntersection(arr1, arr2) {
  //store the unique elements of the second array
  const secondSet = new Set(arr2);

  //store the common elements without duplicates
  const result = [];

  //check each element of the first array
  for (const num of arr1) {
    //check whether it exists in the second array
    if (secondSet.has(num)) {
      //Add it only if it is not already in the result array
      if (!result.includes(num)) {
        result.push(num);
      }
    }
  }

  //Return the result array containing the common elements
  return result;
}

//Export the function for testing

module.exports = { arrayIntersection };

// Test cases
console.log(arrayIntersection([1, 2, 2, 3, 4, 5], [2, 3, 3, 6]));
console.log(arrayIntersection([70, 20, 30, 50], [30, 40, 50, 60, 70]));
console.log(arrayIntersection([1, 2], [3, 4]));
