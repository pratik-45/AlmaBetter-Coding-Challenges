
function calculateTip(billAmount, tipPercentage) {
    // Convert the inputs to numbers
    billAmount = Number(billAmount);
    tipPercentage = Number(tipPercentage);

    // Calculate the tip using the decimal percentage
    const tipAmount = billAmount * tipPercentage;

    // Add the tip to the bill
    const totalAmount = billAmount + tipAmount;

    // Round to 2 decimal places and return a number
    return Number(totalAmount.toFixed(2));
}

// Test cases
console.log(calculateTip(60.75, 0.25)); // 75.94
console.log(calculateTip(90.00, 0.10)); // 99
