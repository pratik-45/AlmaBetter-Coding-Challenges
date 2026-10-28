function countOccurrences(str, char) {
    // Return 0 if the target character is empty
    if (char === '') {
        return 0;
    }

    // Split the string by the character and count the resulting parts
    return str.split(char).length - 1;
}

// Export the function for testing
module.exports = { countOccurrences };

// Test cases
console.log(countOccurrences("hello world", "l")); // 3
console.log(countOccurrences("Elephant", "E")); // 1
console.log(countOccurrences("AlmaBetter", "A")); // 1
console.log(countOccurrences("AlmaBetter", "a")); // 1
console.log(countOccurrences("hello", "z")); // 0
