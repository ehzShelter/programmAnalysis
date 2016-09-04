function doubleThemImmutable(list) {
  var newList = [];
  for (var i = 0; i < list.length; i++) {
    newList[i] = list[i] * 2;
  }
  return newList;
}

var arr = [3, 4, 5];
var arr2 = doubleThemImmutable(arr);

console.log(arr);
console.log(arr2);
