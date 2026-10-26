function calculateTip(billAmount, tipPercentage) {
    const tipAmount = Number(billAmount) * (Number(tipPercentage) / 100);
    const totalAmount = Number(billAmount) + tipAmount;
    return Number(totalAmount.toFixed(2));
}

console.log(calculateTip(60.75, 0.25)); // Calculate tip for $60.75 with 25% tip
console.log(calculateTip(90.00, 0.10)); // Calculate tip for $90.00 with 10% tip