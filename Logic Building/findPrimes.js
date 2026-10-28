function findPrimes(n) {
    const primes = [];

    // Check every number from 2 up to n
    for (let num = 2; num <= n; num++) {
        let isPrime = true;

        // Check divisors only up to the square root of num
        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }

        // Add the number if it is prime
        if (isPrime) {
            primes.push(num);
        }
    }

    return primes;
}

// Export the function for testing
module.exports = { findPrimes };

// Test cases
console.log(findPrimes(20)); // [2, 3, 5, 7, 11, 13, 17, 19]
console.log(findPrimes(9));  // [2, 3, 5, 7]
console.log(findPrimes(1));  // []
console.log(findPrimes(2));  // [2]
