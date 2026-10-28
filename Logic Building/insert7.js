function insert7(str) {
    let result = "";
    let count = 0;

    // Check each character, including its position
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        result += char;

        // Ignore spaces when counting
        if (char !== " ") {
            count++;

            // Insert 7 after every 6 non-space characters, except at the end
            if (count % 6 === 0 && i < str.length - 1) {
                result += "7";
            }
        }
    }

    return result;
}

module.exports = { insert7 };

console.log(insert7("Hello World and Universe!")); // Hello W7orld an7d Unive7rse!
console.log(insert7("abcdef"));                    // abcdef
console.log(insert7("abc"));                       // abc