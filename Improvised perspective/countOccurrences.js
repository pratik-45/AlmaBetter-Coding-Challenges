function countOccurrences(str, char) {
    if (char === '') {
        return 0;
    }

    return str.split(char).length - 1;

}

module.exports = {countOccurrences};

console.log(countOccurrences("hello world", "l"));
console.log(countOccurrences("Elephant", "E"));
console.log(countOccurrences("AlmaBetter", "A"));
console.log(countOccurrences("AlmaBetter", "a"));
