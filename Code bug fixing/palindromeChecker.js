function isPalindrome(str) {
    // Convert the string to lowercase and remove non-alphanumeric characters
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Reverse the cleaned string
    const reversedStr = cleanedStr.split('').reverse().join('');

    // Return true if both strings match
    return cleanedStr === reversedStr;
}

// Export the function for testing
module.exports = { isPalindrome };

// Test cases
console.log(isPalindrome("Racecar")); // true
console.log(isPalindrome("Hello")); // false
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
