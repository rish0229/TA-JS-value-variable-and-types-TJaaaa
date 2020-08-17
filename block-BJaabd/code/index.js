// Condition
// Write your code below each problems:

/*
Write a program that asks the user his/her age and check for the following conditions :

- `if` the age is between 12-55 then print the message "You can participate in the marathon".
- `if` the age is between 4-11 then print the message " You are too young to participate in the marathon".
- `if` the age is less than 4 then print the message " Hey Kiddo! Can You Walk ?"
- `if` the age is greater than 55 then print the message " You are too old to participate in the marathon".
👇
*/

let age = prompt('Your age?');
switch (true) {
  case age < 4:
    alert(' Hey Kiddo! Can You Walk ?');
    break;
  case age < 12:
    alert(' You are too young to participate in the marathon');
    break;
  case age < 56:
    alert('You can participate in the marathon');
    break;
  case age > 55:
    alert(' You are too old to participate in the marathon');
    break;
}

// Loops
/*
Given a positive integer `n`. Print the word (hello) in format of heeeello (letter 'e' must be repeated `n` times). Take input from prompt and print the result in alert.

Example:
n = 1 => output: hello
n = 7 => output: heeeeeeello
👇
*/

let count = Number(prompt('Enter the number of e!'));

const start = 'h';
const end = 'llo';

let middle = '';

for (var i = 0; i < count; i++) {
  middle += 'e';
}

alert(start + middle + end);

/*
Program to calculate the sum of first n natural numbers(1,2,3...n are known as natural numbers). Prompt user to enter n (using `prompt`) then based on input provided calculate and show result in `alert`.
👇
*/

let n = Number(prompt('enter any +ve integer?'));
if (n > 1) {
  alert((n * (n + 1)) / 2);
} else {
  alert('enter +ve value');
}

/* Switch Statement

 🎖Using switch statement do the following

Take a number value from user and alert the message if it matches the conditions.
* [ ] ONE, if `number` is equal to 1.
* [ ] TWO, if `number` is equal to 2.
* [ ] THREE, if `number` is equal to 3.
* [ ] FOUR, if `number` is equal to 4.
* [ ] FIVE, if `number` is equal to 5.
* [ ] SIX, if `number` is equal to 6.
* [ ] SEVEN, if `number` is equal to 7.
* [ ] EIGHT, if `number` is equal to 8.
* [ ] NINE, if `number` is equal to 9.
* [ ] PLEASE TRY AGAIN, if  is none of the above.

*/

let number = Number(prompt('Enter any number b/w 1-9?'));
switch (number) {
  case 1:
    alert('ONE');
    break;
  case 2:
    alert('TWO');
    break;
  case 3:
    alert('THREE');
    break;
  case 4:
    alert('FOUR');
    break;
  case 5:
    alert('FIVE');
    break;
  case 6:
    alert('SIX');
    break;
  case 7:
    alert('SEVEN');
    break;
  case 8:
    alert('EIGHT');
    break;
  case 9:
    alert('NINE');
    break;
  default:
    alert('PLEASE TRY AGAIN!');
    break;
}

/*
🎖Using switch statement do the following

Take the value of `marks` (0-100) from user using `prompt` and `alert` the message (Your Grade is AA) as giver below.
* [ ] `AA` if `marks` is greater than 90.
* [ ] `AB` if `marks` is greater than 80 and less than or equal to 90
* [ ] `BB` if `marks` is greater than 70 and less than or equal to 80
* [ ] `BC` if `marks` is greater than 60 and less than or equal to 70
* [ ] `CC` if `marks` is greater than 50 and less than or equal to 60
* [ ] `CD` if `marks` is greater than 40 and less than or equal to 50
* [ ] `DD` if `marks` is greater than 30 and less than or equal to 40
* [ ] `FF` if `marks` is less than or equal to 30
*/

let marks = Number(prompt('Enter your marks?'));
switch (true) {
  case marks < 31:
    alert('FF');
    break;
  case marks < 41:
    alert('DD');
    break;
  case marks < 51:
    alert('CD');
    break;
  case marks < 61:
    alert('CC');
    break;
  case marks < 71:
    alert('BC');
    break;
  case marks < 81:
    alert('BB');
    break;
  case marks < 91:
    alert('AB');
    break;
  case marks < 101:
    alert('AA');
    break;
}

/*
 🎖Write a JavaScript program that takes two `integers` from user (using prompt) and alerts the larger number.
*/

let num1 = Number(prompt('Enter first number?'));
let num2 = Number(prompt('Enter second number?'));
if (num1 > num2) {
  alert(num1);
} else {
  alert(num2);
}

/*
🎖Write a JavaScript conditional statement to find the sign (+, -) of product of three numbers. Take those three numbers from user using `prompt`. Display an alert box with the specified sign.
*/

let numA = Number(prompt('Enter first number?'));
let numB = Number(prompt('Enter second number?'));
let numC = Number(prompt('Enter third number?'));

if (numA * numB * numC < 0) {
  alert('-');
} else {
  alert('+');
}

/* Calculator
 🎖Make a simple calculator with these functions. Using prompt, type conversion, if else statement. Use prompt to take the input from user i.e two numbers and an operation (Add, Sub, Mul, Div).

  ⛑ Rule
    * [ ] While subtracting and dividing keep in mind the number one should be greater then number two. If not show alert saying `Number Two is larger then Number one`.
  ⚡️ Operations
    * [ ] Add
    * [ ] Sub
    * [ ] Mul
    * [ ] Div
*/

let numa = Number(prompt('Enter first number?'));
let numb = Number(prompt('Enter second number?'));
let operation = prompt('Operation?(+, -, *, /)');

if (numa > numb) {
  if (operation === '+') {
    alert(numa + numb);
  } else if (operation === '-') {
    alert(numa - numb);
  } else if (operation === '*') {
    alert(numa * numb);
  } else {
    alert(numa / numb);
  }
} else {
  alert('Number two is larger than Number 1');
}
