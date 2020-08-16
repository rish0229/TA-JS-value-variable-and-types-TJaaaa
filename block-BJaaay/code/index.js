//  Loop basics

// Do the following using loops:

// Using `console.log` log all the values from 1 to 10.
for (var i = 1; i <= 10; i++) {
  console.log(i);
}
// Using `console.log` log all the evan values from 1 to 10.
for (var i = 1; i < 11; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
// Using `console.log` log all the od values from 1 to 10.
for (var i = 1; i < 11; i++) {
  if (i % 2 === 1) {
    console.log(i);
  }
}
// Calculate the sum of all numbers from 1 to 10.
let result = 0;
for (var i = 1; i < 11; i++) {
  result = result + i;
}
console.log(result);
// Log all the values from 1 to 10 using while loop
let i = 1;
while (i < 11) {
  console.log(i);
  i++;
}
