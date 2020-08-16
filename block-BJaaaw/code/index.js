// if..else

/*
1. Write a program that asks the user for a number and check the following conditions:

  - `if` the number is even print the message " number is even"
  - `if` the number is odd print the message "number is odd"
*/
let num = prompt('Type any number?');
let result1 = Boolean(num % 2);
if (result1 === true) {
  alert('number is odd');
} else {
  alert('number is even');
}
// 2. Write a program to accept two numbers from user using`prompt` and alert the max value.
let num1 = prompt('Enter any random number?');
let num2 = prompt('Enter any random number?');
let result2 = num1 > num2;
if (result2) {
  alert(num1);
} else {
  alert(num2);
}
// 3. Convert the above code using`?` terniary operator
result2 === true ? alert(num1) : alert(num2);
/*
4. Write a program that asks the user for the house name and check the following conditions:

  - `if` house name is "stark" then print the message " Winter is coming"
  - `if` house name is "lannister" then print the message " A lannister always pays his debt"
  - `else` print the message " All men must die"
*/
let houseName = prompt('Enter house name?');
if (houseName === 'stark') {
  alert('Winter is coming');
} else if (houseName === 'lannister') {
  alert('A lannister always pays his debt');
} else {
  alert('All men must die');
}
// 5. Convert the above code using`?` terniary operator
houseName === 'stark'
  ? alert('Winter is coming')
  : houseName === 'lannister'
  ? alert('A lannister always pays his debt')
  : alert('All men must die');
// Switch

// 6. Write a program that takes the number of the month(1 - 12) and alert number of days in the month.
let monthNumber = Number(prompt('month number?'));
switch (monthNumber) {
  case 1:
  case 3:
  case 5:
  case 7:
  case 8:
  case 10:
  case 12:
    alert('No. of days in this month is 31');
    break;
  case 2:
    alert('No. of days in this month is 28/29');
    break;
  default:
    alert('No. of days in this month is 30');
    break;
}
/* 7.
- Write a program that take the salary of the user using prompt and alert the in -hand amount.You will find out the in -hand amount by deducting the tax amount from salary.Conditions are given below.
  - `Salary <= 20000` tax is 10 %
  - `Salary <= 40000` tax is 20 %
  - `Salary > 50000` tax is 30 %

*/
let salary = Number(prompt('Salary?'));
if (salary <= 20000) {
  alert('In-hand amount is ' + 0.1 * salary);
} else if (salary <= 40000) {
  alert('In-hand amount is ' + 0.2 * salary);
} else {
  alert('In-hand amount is ' + 0.3 * salary);
}
//  if..else vs switch

/* 8.
Implement the condition give below using`if..else` and`switch` statement.

  - `marks > 100` alert`"Marks can't be greater than 100"`
  - `marks > 80 && marks < 100` alert`"Grade A"`
  - `marks > 50 && marks < 80` alert`"Grade B"`
  - `marks > 30 && marks < 50` alert`"Grade C"`
  - `marks > 0` alert`"Grade D"`

*/

// USING IF-ELSE

let marks = Number(prompt('Your Marks?'));

if (marks > 100) {
  alert("Marks can't be greater than 100");
} else if (marks <= 30) {
  alert('Grade D');
} else if (marks <= 50) {
  alert('Grade C');
} else if (marks <= 80) {
  alert('Grade B');
} else {
  alert('Grade A');
}

// USING SWITCH

switch (true) {
  case marks <= 30:
    alert('Grade D');
    break;
  case marks <= 50:
    alert('Grade C');
    break;
  case marks <= 80:
    alert('Grade B');
    break;
  case marks <= 100:
    alert('Grade A');
    break;
  default:
    alert("Marks can't be greater than 100");
    break;
}

/* 9. Weather app

  - Ask user to provide the condition of the weather outside by asking `What is the weather like outside?`
  - If user says`sunny` alert`Wear a T-shirt`
  - If`rainy` alert`Don't forget to take your raincoat`
  - If`hot` alert`Get a hanky`
  - If`freezing` alert`Get your sweeter on`
  - Anything else should alert`Not a valid input`
*/

let weather = prompt('What is the weather like outside?');

switch (weather) {
  case 'sunny':
    alert('Wear a T-shirt');
    break;
  case 'rainy':
    alert("Don't forget to take your raincoat");
    break;
  case 'hot':
    alert(`Get a hanky`);
    break;
  case 'freezing':
    alert('Get your sweeter on');
    break;
  default:
    alert('Not a valid input');
    break;
}
