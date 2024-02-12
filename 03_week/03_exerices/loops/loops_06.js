// Develop a program that initially asks the user for a single number. Following this, the program should inquire if the user wishes to continue providing numbers with the prompt: 'Do you want to continue giving numbers? (y/n)'. If the user responds with 'y', the program will request another number. If the response is 'n', the program terminates. Upon termination, it calculates and displays the average of all entered numbers.

// Because this exercise in particular was a nightmare, I'm going to write step by step what the thought process was when creating it.

// sum is the variable where all the numbers are going to be stored.
// count is the second variable where all the numbers will be added.
let sum = 0;
let count = 0;

while (true) {
  let userInput = Number(prompt('Please enter a number'));

  if (isNaN(userInput)) {
    alert('Please enter a valid number.');
  } else {
    sum += userInput;
    count++;

    let continueInput = prompt('Do you wish to continue? y/n');
    if (continueInput.toLowerCase() !== 'y') {
      let averageOfNumbers = sum / count;
      console.log(averageOfNumbers.toFixed(2));
      break;
    }
  }
}
