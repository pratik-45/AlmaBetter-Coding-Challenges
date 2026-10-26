function titleCase(sentence) {
    const words = sentence.split(' ');

    const result = words.map(word => 
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(1)
    );

    return result.join(' ');
}

module.exports = {titleCase};

console.log(titleCase("Dream big, work hard, and stay focused"));
console.log(titleCase("Be yourself; everyone else is already taken."));