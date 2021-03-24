function pow(x, n) {
   if (n == 1) {
      return x
   } else {
      return x * pow(x, n - 1)
   }
}
console.log(pow(2, 300));//после степени 8969 все падает
console.log(window.performance.memory);




var theThing = null;
var replaceThing = function () {
   var originalThing = theThing;
   var unused = function () {
      if (originalThing)
         console.log("hi");
   };
   theThing = {
      longStr: new Array(100000000000).join('*'),
      someMethod: function () {
         console.log(someMessage);
      }
   };
};
console.log(setInterval(replaceThing, 0, 1));


