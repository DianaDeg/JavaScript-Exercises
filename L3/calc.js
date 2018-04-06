/*Age Calculator Exercise
1. Ask user for their Age
2. Calculate the total amount of days based of the age
3. Display the user roughly how many days they've been alive
*/

var age = prompt('What is your age?');

var  ageDays = age*365;

var line = document.getElementById('o1');

line.innerHTML = 'You\'ve been alive this many days: ' + ageDays;

console.log('You\'ve been alive this many days: ' + ageDays);
