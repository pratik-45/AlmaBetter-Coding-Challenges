function findPrimes(n) {
    const primes = [];

    for (let num =2; num <= n; num++) {
        let isPrime = true;

        for (let i=2; i * i<=num; i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            primes.push(num);
        }
    }

    return primes;
}

module.exports = { findPrimes };

console.log(findPrimes(20));
console.log(findPrimes(9));