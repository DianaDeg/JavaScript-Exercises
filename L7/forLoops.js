/* For Loops Problem Set */

// 1. Print all numbers betweeen -10 and 19
document.write("Exercise 1 <br>")
for (var i = -10; i < 20; i++) {
  document.write(i);
  document.write("<br>")
}
document.write("<br>")

// 2. Print all even number between 10 and 40
document.write("Exercise 2 <br>")
for (var i = 9; i < 40; i++) {
  ++i;
  document.write(i);
  document.write("<br>")
}
document.write("<br>")

// 3. Print all numbers between 300 and 333
document.write("Exercise 3 <br>")
for (var i = 300; i < 334; i++) {
  document.write(i);
  document.write("<br>")
}
document.write("<br>")

// 4. Print all numbers divisible by 5 AND 3, between 5 and 75
document.write("Exercise 4 <br>")
for (var i = 5; i < 76; i++) {
  if (i % 5 == 0 && i % 3 == 0) {
    document.write(i);
    document.write("<br>")
  }
}
document.write("<br>")

// 5. Print all numbers divisible by 5 OR 3, but NOT both,  between 5 and 75
document.write("Exercise 5 <br>")
for (var i = 5; i < 76; i++) {
  if ( (i % 5 == 0 && !(i % 3 == 0)) || (i % 3 == 0 && !(i % 5 == 0)) ) {
    document.write(i);
    document.write("<br>")
  }
}
document.write("<br>")

// 6. Even Numbers
/*
Print out all even numbers between 1 and 50.
Write two solutions: one with awhile loop
and one with a for loop.
*/
document.write("Exercise 6 <br>")
var e = 0;
while (e < 49) {
  e++;
  e++;
  document.write(e);
  document.write("<br>")
}
document.write("<br>")
for (var i = 1; i < 51; i++) {
  ++i;
  document.write(i);
  document.write("<br>")
}
document.write("<br>")

// 7. ASCII Art
/*
Write code to create an ASCII art trianle like
the one below. Use for loops.

$
$$
$$$
$$$$
$$$$$
$$$$$$

Hint: You may want to use nested loops
*/
document.write("Exercise 7 <br>")
for (var i = 0; i < 6; i++) {
  for (var e = 0; e < i+1; e++) {
    document.write("$");
  }
  document.write('<br>');
}
document.write("<br>")

// 8. Fizzbuzz
/*
Write a program that prints the numbers from 1 to 100.
But for multiples of three print "Fizz" instead of the number
and for the multiples of five print "Buzz". For numbers which are
multiples of both three and five print "FizzBuzz"
Example:
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
*/
document.write("Exercise 8 <br>")
for (var i = 1; i < 101; i++) {
  if ( i % 5 == 0 && i % 3 == 0 ) {
    document.write('FizzBuzz');
    document.write("<br>")
  } else if (i % 3 == 0) {
    document.write('Fizz');
    document.write("<br>")
  } else if (i % 5 == 0) {
    document.write('Buzz');
    document.write("<br>")
  } else {
    document.write(i);
    document.write("<br>")
  }
}
document.write("<br>")
