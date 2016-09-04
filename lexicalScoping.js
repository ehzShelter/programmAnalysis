y = 2 * 2;
x = 3 + 4;

var z = function() {
  x = 5 * 5;
  w = x + y;

  return w;
}

console.log(x + y + z());

// exmaple of lexical scoping
// remember, Lexically closest definition of a variable prevails
