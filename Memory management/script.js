function pow(x, n) {
   if (n == 1) {
      return x
   } else {
      return x * pow(x, n - 1)
   }
}
console.log(pow(2, 300));//после степени 8969 все падает
console.log(window.performance.memory);




let theThing = null;
let replaceThing = function () {
   let originalThing = theThing;
   let unused = function () {
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


