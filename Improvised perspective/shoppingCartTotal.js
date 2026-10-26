function calculateTotal(cart) {
    return cart.reduce((total, product) => {
        return total + product.price * product.quantity; 
    }, 0);
}

module.exports = {calculateTotal};

const cart1 = [
    {name: "Laptop", price: 1000, quantity: 1},
    {name: "phone", price: 500, quantity: 2},
    {name: "headphones", price: 50, quantity: 4}
];

const cart2 = [
    {name: "fruits", price: 10, quantity: 5},
    {name: "vegetables", price: 8, quantity: 3},
    {name: "Dairy", price: 5, quantity: 2},
    {name: "snacks", price: 3, quantity: 10}
];

console.log(calculateTotal(cart1)); 
console.log(calculateTotal(cart2)); 