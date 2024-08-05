// app.js
const mathOperation = require('./maths');

const num1 = 10;
const num2 = 5;

console.log(`Addition: ${mathOperation.add(num1, num2)}`);
console.log(`Subtraction: ${mathOperation.subtract(num1, num2)}`);
console.log(`Multiplication: ${mathOperation.multiply(num1, num2)}`);
console.log(`Division: ${mathOperation.divide(num1, num2)}`);
