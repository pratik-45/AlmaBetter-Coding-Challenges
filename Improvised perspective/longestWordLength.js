function findLongestWord(sentence) {
    // Split the sentence into individual words
    const words = sentence.split(' ');
    let maxLength = 0;

    // Check the length of each word
    for (const word of words) {
        if (word.length > maxLength) {
            maxLength = word.length;
        }
    }

    // Return the length of the longest word
    return maxLength;
}

// Export the function for testing
module.exports = { findLongestWord };

// Test cases
console.log(findLongestWord("Coding is fun with fellow learners")); // 8
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 6
console.log(findLongestWord("Hi there")); // 5
