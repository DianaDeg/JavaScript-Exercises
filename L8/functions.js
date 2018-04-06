/*Functions Problem Set*/

/*
isEven()
Write a function isEven() which takes a single numeric argument and
return true if the number is even, and false otherwise
Example:
isEven(42)     //true
isEven(555)    //false
*/
const isEven = (num) => {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}
document.write(isEven(4));
document.write('<br>');

/*
factorial()
Write a function factorial() which takes a single numeric argument
and returns the factorial of that number
6! is 6 x 5 x 4 x 3 x 2 x 1
0! is 1
Example:
factorial(5);   //120
factorial(10);  //3628800
*/
const factorial = (num) => {
  if (num < 0) {
    return -1;
  } else if (num == 0) {
    return 1;
  } else {
    return (num * factorial(num - 1));
  }
}
document.write(factorial(10));
document.write('<br>');
/*
kebabToSnake()
write a function kebabToSnake() which takes a single kebab-cased
string argument and return the sanke_cased version
Basically, replace "-" with "_"
Example:
kebabToSnake("hello-world");    //"hello_world"
*/
const kebabToSnake = (str) => {
  for (var i = 0; i < str.length; i++) {
    if (str[i] === '-'){
      str = str.replace('-','_');
    }
    console.log(str[i]);
  }
  return str;
}
document.write(kebabToSnake("hi-noon-tea-reap"));
document.write('<br>');
