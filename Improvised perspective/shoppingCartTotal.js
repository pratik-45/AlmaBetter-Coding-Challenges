function calculateTotal(cart) {
    // Add the cost of each product to the running total
    return cart.reduce((total, product) => {
        return total + (product.price * product.quantity);
    }, 0);
}

// Export the function for testing
module.exports = { calculateTotal };

// Test cases
const cart1 = [
    { name: "Laptop", price: 1000, quantity: 1 },
    { name: "Phone", price: 500, quantity: 2 },
    { name: "Headphones", price: 50, quantity: 4 }
];

const cart2 = [
    { name: "Fruits", price: 10, quantity: 5 },
    { name: "Vegetables", price: 8, quantity: 3 },
    { name: "Dairy", price: 5, quantity: 2 },
    { name: "Snacks", price: 3, quantity: 10 }
];

console.log(calculateTotal(cart1)); // 2200
console.log(calculateTotal(cart2)); // 114
console.log(calculateTotal([]));    // 0
