//Annoy-omatic
// Create your own index.html
// 1. Ask the user " Are we there yet"
// 2. Keep asking again and again until they enter "yes" OR "yeah"
// 3. Then, alert "Yay, we finally made it!"
var ans = prompt('Are we there yet?');

while (!(ans == 'yes' || ans == 'yeah')) {
  ans = prompt('Are we there yet?');
}
alert('Yay, we finally made it!');
