function signOfProduct(nums) {
    let negativeCount = 0;

    // Check each number in the array
    for (let i = 0; i < nums.length; i++) {
        // If any number is zero, the product is zero
        if (nums[i] === 0) {
            return 0;
        }

        // Count negative numbers
        if (nums[i] < 0) {
            negativeCount++;
        }
    }

    // An odd number of negatives means a negative product
    if (negativeCount % 2 !== 0) {
        return -1;
    }

    // An even number of negatives means a positive product
    return 1;
}

// Export the function for testing
module.exports = { signOfProduct };

// Test cases
console.log(signOfProduct([2, -3, 5, 4])); // -1
console.log(signOfProduct([1, 2, 0]));     // 0
console.log(signOfProduct([-2, -3, 4]));  // 1
