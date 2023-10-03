function calculateArithmeticValues(num1, num2, callback) {
    const addition = num1 + num2;
    const subtraction = num1 - num2;
    const multiplication = num1 * num2;
    const division = num1 / num2;
    const values = [addition, subtraction, multiplication, division];
    const total = values.reduce((sum, value) => sum + value, 0);
    const average = total / values.length;
    callback(addition, subtraction, multiplication, division, total, average);
}

function displayInformation(addition, subtraction, multiplication, division, total, average) {
    // Display the information
    document.getElementById('currentDate').innerText = new Date().toLocaleDateString();
    document.getElementById('yourName').innerText = 'Jay Dawson';
    // You can display the arithmetic values, total, and average here as well
}

// Call the higher order function
calculateArithmeticValues(10, 5, displayInformation);