var DEBUG = true;

if (typeof DEBUG !== 'undefined') {
  console.log("Debugging is Starting");
}


// Here, `FeatureXYZ` is not at all a global variable, but we're still using the safety guard of `typeof` to make it safe to check for. And importantly, here there is *no* object we can use (like we did for global variables with `window.___`) to make the check, so `typeof` is quite helpful.

(function() {
  function FeatureXYZ() { /*.. my XYZ feature ..*/ }

  // include `doSomethingCool(..)`
  function doSomethingCool() {
    var helper =
      (typeof FeatureXYZ !== "undefined") ?
      FeatureXYZ :
      function() {
        console.log("Nothing cool here");
      };

    var val = helper();
    // ..
  }

  doSomethingCool();
})();

var obj = [];
var json = [{
  a : "S",
  b : "F"
}]

var func = function(){
  console.log("I am expression");
};

console.log(json);

console.log(typeof json);
console.log(typeof obj);
console.log(typeof json);
console.log(typeof func);

console.log(typeof 42);
console.log(typeof typeof 42);
console.log(typeof undefined);
console.log(typeof variable);

// null is like object null object reference is not there
var oh = null;
console.log(typeof oh);
