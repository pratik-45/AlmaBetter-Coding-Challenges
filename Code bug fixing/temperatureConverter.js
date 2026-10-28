function convertTemperature(temperature, unit) {
    // Convert Celsius to Fahrenheit
    if (unit === "C") {
        const fahrenheit = (temperature * 9 / 5) + 32;
        return fahrenheit.toFixed(2) + " F";
    }
    // Convert Fahrenheit to Celsius
    else if (unit === "F") {
        const celsius = (temperature - 32) * 5 / 9;
        return celsius.toFixed(2) + " C";
    }
    // Return an error message for an invalid unit
    else {
        return "Invalid unit. Use 'C' for Celsius or 'F' for Fahrenheit";
    }
}

// Export the function for testing
module.exports = { convertTemperature };

// Test cases
console.log(convertTemperature(25, "C"));
console.log(convertTemperature(-40, "F"));
console.log(convertTemperature(100, "C"));
console.log(convertTemperature(32, "F"));
console.log(convertTemperature(0, "C"));
console.log(convertTemperature(25, "X"));
