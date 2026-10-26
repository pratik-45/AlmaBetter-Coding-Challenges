function isPlaindrome(str) {
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const reversedStr = cleanedStr.split('').reverse().join('');

    return cleanedStr === reversedStr;
}    

console.log(isPlaindrome("Racecar")); // true  
console.log(isPlaindrome("Hello")); // false
console.log(isPlaindrome("A man, a plan, a canal: Panama")); // true