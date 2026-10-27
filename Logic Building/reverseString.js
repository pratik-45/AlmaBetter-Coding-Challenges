function reverseString(str) {
    return str.split('').reverse().join('');
}

module.exports = { reverseString };

console.log(reverseString("Javascript"));
console.log(reverseString("Hello"));
