
function insert7(str) {
    // Store the final modified string
    let result = "";

    // Count characters while ignoring spaces
    let count = 0;

    // Check each character in the string
    for (const char of str) {
        // Add the original character to the result
        result += char;

        // Ignore spaces when counting characters
        if (char !== " ") {
            count++;

            // Insert "7" after every 6 non-space characters
            if (count % 6 === 0) {
                result += "7";
            }
        }
    }

    // Return the modified string
    return result;
}

// Export the function for testing
module.exports = { insert7 };

// Test cases
console.log(insert7("Hello World and Universe!"));
console.log(insert7("abcdef"));
console.log(insert7("abc"));
