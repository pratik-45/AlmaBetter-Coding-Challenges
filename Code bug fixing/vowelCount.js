
function countVowels(str) {
    // Store all five vowels
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    // Check each character in the string
    for (let i = 0; i < str.length; i++) {
        // Convert to lowercase and check whether it is a vowel
        if (vowels.includes(str[i].toLowerCase())) {
            count++;
        }
    }

    // Return the total number of vowels
    return count;
}

// Export the function for testing
module.exports = { countVowels };

// Test cases
console.log(countVowels("AlmaBetter")); // 4
console.log(countVowels("Coding is fun with fellow learners")); // 10
console.log(countVowels("AEIOU")); // 5
console.log(countVowels("rhythm")); // 0
