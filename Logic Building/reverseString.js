function reverseString(str) {
    // Convert the string into an array of characters
    // Reverse the array and join it back into a string
    return str.split('').reverse().join('');
}

// Export the function for testing
module.exports = { reverseString };

// Test cases
console.log(reverseString("JavaScript")); // tpircSavaJ
console.log(reverseString("Hello"));      // olleH
console.log(reverseString(""));           // ""
console.log(reverseString("12345"));      // 54321
