function swapConsecutiveCharacters(str) {
    //convert string to array of characters
    const chars = str.split('');

    //move through the array and swap consecutive characters
    for (let i = 0; i < chars.length - 1; i += 2) {
        //store the first character in a temporary variable
        const temp = chars[i];

        //swap the characters
        chars[i] = chars[i + 1];
        chars[i + 1] = temp;
    }

    //join the characters back into a string and return it
    return chars.join('');
}    

// Export the function for testing
module.exports = { swapConsecutiveCharacters };

// Test cases
console.log(swapConsecutiveCharacters("abcdef"));
console.log(swapConsecutiveCharacters("AlmaBetter"));
console.log(swapConsecutiveCharacters("abcde"));