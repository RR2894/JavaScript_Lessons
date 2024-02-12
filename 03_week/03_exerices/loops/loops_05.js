// Develop a program that continuously prompts the user to input numbers until the user enters 0, at which point the program terminates. After termination, the program should calculate and display the average of all the entered numbers.

let numbers = 0;
let sumOfNumbers = 0;

for (numbers; numbers >= 0; numbers++) {
  let inputNumber = Number(prompt('Please enter numbers. To terminate enter 0.'));
  sumOfNumbers += inputNumber;
  if (inputNumber == 0) break;
}

console.log(sumOfNumbers / numbers);

// for (initialization; condition; increment) {
//     // Code to be executed on each iteration
//   }
