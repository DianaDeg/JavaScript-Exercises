var firstName = prompt('What is your first name?'),
    lastName = prompt('What is your last name?');
    age = prompt('What is your age?');

var  fullName = firstName + " " +  lastName;

//output.innerHTML = 'Your full name is ' + fullName;

var line = document.getElementById('output');
var line2 = document.getElementById('o2');

line.innerHTML = 'Your full name is ' + fullName;
line2.innerHTML = 'Your age is ' + age*365 + ' days';

console.log('Your full name is ' + fullName + ' Your age is ' + age*365 + ' days');
