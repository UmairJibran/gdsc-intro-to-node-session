function addNumbers(number1, number2) {
  const sum = number1 + number2;
  return sum;
}

console.log(process.argv);

const number1 = parseFloat(process.argv[2]);
const number2 = parseFloat(process.argv[3]);

const result = addNumbers(number1, number2);

console.log(result);
