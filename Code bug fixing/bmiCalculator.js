
function calculateBMI(weight, height) {
    // Check that weight and height are positive
    if (weight <= 0 || height <= 0) {
        return "Invalid Input";
    }

    // Calculate BMI using the given formula
    const bmi = weight / (height * height);

    // Return the health classification based on BMI
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi < 25) {
        return "Normal weight";
    } else if (bmi < 29.9) {
        return "Overweight";
    } else {
        return "Obese";
    }
}

// Export the function for testing
module.exports = { calculateBMI };

// Test cases
console.log(calculateBMI(65, 1.75));
console.log(calculateBMI(45, 1.60));
console.log(calculateBMI(85, 1.75));
