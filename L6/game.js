/*
Guessing Game
Create your own index page.
*/

//1. create secretNumber

//2. ask user for guess

//3. check if guess is right

//4. check if guess is higher

//5. otherwise, check if lower

var secretNumber = 9;

var guess = prompt('Guess a number');

while (!(secretNumber == guess)) {
  if (guess > secretNumber) {
    alert('Too high!');
    guess = prompt('Guess a number');
  } else {
    alert('Too low!');
    guess = prompt('Guess a number');
  }
}
alert('You guessed right');
