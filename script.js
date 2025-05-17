function calculateBMI() {
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);

  const result = document.getElementById('result');

  if (!weight || !height || weight <= 0 || height <= 0) {
    result.textContent = 'Please enter valid positive values for weight and height.';
    return;
  }

  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);
  const roundedBMI = bmi.toFixed(2);

  let message = '';

  if (bmi < 18.5) {
    message = 'Underweight';
  } else if (bmi < 24.9) {
    message = 'Normal weight';
  } else if (bmi < 29.9) {
    message = 'Overweight';
  } else {
    message = 'Obese';
  }

  result.textContent = `Your BMI is ${roundedBMI} (${message})`;
}
