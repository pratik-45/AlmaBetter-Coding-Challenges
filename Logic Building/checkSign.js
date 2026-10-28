function checkSign(a, b, c) {
    let positiveCount = 0;

    // Count how many numbers are positive
    if (a > 0) positiveCount++;
    if (b > 0) positiveCount++;
    if (c > 0) positiveCount++;

    // Return the sign pattern based on positive count
    if (positiveCount === 3) {
        return "+++";
    } else if (positiveCount === 2) {
        return "++-";
    } else if (positiveCount === 1) {
        return "+--";
    } else {
        return "---";
    }
}

// Export the function for testing
module.exports = { checkSign };

// Test cases
console.log(checkSign(2, 5, 7));    // +++
console.log(checkSign(8, -3, 4));   // ++-
console.log(checkSign(2, -5, -7));  // +--
console.log(checkSign(-2, -5, -7)); // ---
