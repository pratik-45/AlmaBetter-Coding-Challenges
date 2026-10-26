function calculateBMI(weight, height) {
  if (weight <= 0 || height <= 0) {
    return "Invalid Input";
  }

  const bmi = weight / (height * height);
  if (bmi < 18.5) {
    return "under weight";
  } else if (bmi < 25) {
    return "Normal weight";
  } else if (bmi < 29.9) {
    return "Over weight";
  } else {
    return "Obese";
  }
}

console.log(calculateBMI(65, 1.75));
console.log(calculateBMI(45, 1.60));
console.log(calculateBMI(85, 1.75));