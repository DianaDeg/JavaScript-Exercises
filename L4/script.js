// If age is negative print error message

// If age is 21 print "happy 21st birthday!"

// If age is odd print "your age is odd!"
//(not evenly divisible by two)

//BONUS If age is a perfect square print "perfect square!"

var age = prompt('What is your age?');

var line = document.getElementById('o1');

if (age < 0) {
  line.innerHTML = 'Invalid age';
  console.log('Invalid age');
} else if (age == 21) {
  line.innerHTML = 'happy 21st birthday!';
  console.log('happy 21st birthday!');
} else if (!(age % 2 === 0)) {
  line.innerHTML = 'your age is odd!';
  console.log('your age is odd!');
} else if (Math.sqrt(age) % 1 === 0) {
  line.innerHTML = 'perfect square!';
  console.log('perfect square!');
} else {
  line.innerHTML = 'Your age is ' + age;
  console.log('Your age is ' + age);
}
