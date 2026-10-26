function findLongestWordLength(sentence) {
    const words = sentence.split(' ');
    let maxLength = 0;

    for (const word of words) {
        if (word.length > maxLength) {
            maxLength = word.length;
        }
    }
    
    return maxLength;
}

module.exports = {findLongestWordLength};

console.log(findLongestWordLength("Coding is fun with fellow learners")); // 8
console.log(findLongestWordLength("The quick brown fox jumps over the lazy dog")); // 5