function calculateTotal(cart) {
    return cart.reduce((total, product) => {
        return total + product.price * product.quality; 
    }, 0);
}

module.exports = {calculateTotal};

const cart1 = [
    {name: "Laptop", price: 1000, quality: 1},
    {name: "phone", price: 500, quality: 2},
    {name: "headphones", price: 50, quality: 4}
];

const cart2 = [
    {name: "fruits", price: 10, quality: 5},
    {name: "vegetables", price: 8, quality: 3},
    {name: "Dairy", price: 5, quality: 2},
    {name: "snacks", price: 3, quality: 10}
];

console.log(calculateTotal(cart1)); // Output: 2100
console.log(calculateTotal(cart2)); // Output: 109