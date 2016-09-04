// function expressions
var stockObjects = function(stocks) {
  // new empty array  object
  var arrObject = [];

  // syntactic sugar arrow function
  stocks.forEach((elements) => (arrObject.push(elements.symbol)));

  return arrObject;
};

// Objects
var stocksObj = [{
  symbol: "GOOG",
  price: 240.22,
  volumn: 23432,
}, {
  symbol: "FB",
  price: 333.19,
  volumn: 234,
}, {
  symbol: "MSF",
  price: 120.22,
  volumn: 535,
}];

console.log(stockObjects(stocksObj));
// console.log(JSON.stringify(stockObjects(stocksObj)));
