function fizzBuzz(n) {
    const result = [];

    // Check every number from 1 to n
    for (let i = 1; i <= n; i++) {
        switch (true) {
            // Numbers divisible by both 3 and 4
            case i % 12 === 0:
                result.push("FizzBuzz");
                break;

            // Numbers divisible by 3
            case i % 3 === 0:
                result.push("Fizz");
                break;

            // Numbers divisible by 4
            case i % 4 === 0:
                result.push("Buzz");
                break;

            // Keep other numbers as strings
            default:
                result.push(i.toString());
        }
    }

    return result;
}

// Do not modify the below line
module.exports = { fizzBuzz };

// Test cases
console.log(fizzBuzz(12));
console.log(fizzBuzz(5));
console.log(fizzBuzz(1));
