//JS Prompt Exercise
/* INSTRUCTIONS
Create your own HTML file
Using the prompt() method do the following
1. Ask for the user's first name
2. Ask for the user's last name
3. Ask for the user's age
4. Print out the user's full name in a sentence
5. Print out the user's age in a sentence
*/

var firstName = prompt('What is your first name?'),
    lastName = prompt('What is your last name?');
    age = prompt('What is your age?');

var  fullName = firstName + " " +  lastName;

//output.innerHTML = 'Your full name is ' + fullName;

var line = document.getElementById('o1');
var line2 = document.getElementById('o2');

line.innerHTML = 'Your full name is ' + fullName;
line2.innerHTML = 'Your age is ' + age;

console.log('Your full name is ' + fullName);
console.log('Your age is ' + age);
