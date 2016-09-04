function multip(x, y)
{
  return x * y;
}

function compose(arr, func, initial)
{
  var total = initial;
  for (var i = 0; i < arr.length; i++) {
    total = multip(total, arr[i]);
  }
  return total;
}


console.log(compose([1, 2, 3, 4, 5], multip, 1));
