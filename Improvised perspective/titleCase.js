
function titleCase(sentence) {
    // Convert the sentence to lowercase and split it into words
    const words = sentence.toLowerCase().split(' ');

    // Capitalize the first letter of each word using map()
    const titleWords = words.map(word =>
        word.charAt(0).toUpperCase() + word.substring(1)
    );

    // Join the words back into a sentence
    return titleWords.join(' ');
}

// Do not modify the below line
module.exports = { titleCase };

// Test cases
console.log(titleCase("Dream big, work hard, and stay focused"));
console.log(titleCase("Be yourself; everyone else is already taken."));
console.log(titleCase("hello WORLD"));
