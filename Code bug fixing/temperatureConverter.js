function convertTemperature(temperature, unit) {
    if (unit === 'C') {
        const fahrenheit = (temperature * 9/5) + 32;
        return fahrenheit.toFixed(2) + ' F';
}
else if (unit === 'F') {
        const celsius = (temperature - 32) * 5/9;
        return celsius.toFixed(2) + ' C';
    }
    else {
        return "Invalid unit. Use 'C' for Celsius or 'F' for Fahrenheit";
    }
}

console.log(convertTemperature(25, 'C')); // Convert 25C to Fahrenheit
console.log(convertTemperature(-40, 'F')); // Convert -40F to Celsius
console.log(convertTemperature(100, "C")); // Convert 100C to Fahrenheit
console.log(convertTemperature(32, 'F')); // Convert 32F to Celsius
console.log(convertTemperature(0, 'C')); // Convert 0C to Fahrenheit
console.log(convertTemperature(25, "X"));// Invalid unit test