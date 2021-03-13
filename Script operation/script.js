/* 
   Data types.
   Primitives:
   -Number
   -String
   -undefined
   -Boolean
   -Symbol
   -BigInt
   -null
   Complex: 
   -Object
   -function
   */
let a = 4
console.log(a);
//variable this is Number
console.log(typeof a); //Number

let b = "world"
console.log(b);
//variable b its word, for js its String
console.log(typeof b); //String

//at concatenaning a number and a string, we get String
console.log(a + b);
console.log(typeof (a + b)); //String


//at adding a number and a number in quotes, we get String
console.log(5 + '5'); //String
console.log(typeof (5 + '5')); //String

//at subtracting, multiplying, diving, we get Number
console.log(a - b); //NaN т.е. значение не число
console.log(a * b); //NaN т.е. значение не число
console.log(a / b); //NaN т.е. значение не число
console.log(typeof (a - b)); //Number
console.log(typeof (a * b)); //Number
console.log(typeof (a / b)); //Number

// explicit types conversion.
//get number for string
console.log(typeof (Number(b))); //Number

//get string for number
console.log(typeof (String(a))); //String


//the fastest way to get Number from strig is to add + character
console.log(typeof (+ b)); //Number

//Automatic types conversion
//if multiplying, diving, subtracting a number in qoutes on a number in quotes(i.e. a string), we get Number
//(/, -, * get a numeric conversion of the string)
console.log("5" + '5'); //25
console.log("5" - '5'); //0
console.log("5" / '5'); //1
console.log("5" * '5'); //25
console.log(typeof ("5" + '5')); //String
console.log(typeof ("5" - '5')); //Number
console.log(typeof ("5" / '5')); //Number
console.log(typeof ("5" * '5')); //Number

//if multipuing a string on a string, we get Number
console.log(typeof ('c' * 'd'));
console.log(typeof ("с" - 'd'));
console.log(typeof ("с" / 'd'));

//Boolean conversion
console.log(typeof (Boolean(a)));
console.log(Boolean(a)); //true
console.log(typeof (Boolean(b)));
console.log(Boolean(b)); //true

console.log(Boolean(" ")); //true
console.log(Boolean("")); //false
console.log(Boolean("0")); //true

//compulsory reduction to Boolean
console.log(!!a); // true
console.log(typeof (!!a));

//always false
console.log('');
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN))
console.log(Boolean(false));

//always true
console.log(Boolean('0' == false));
console.log(Boolean(0 == false));
console.log(Boolean('0' == 0));
console.log(Boolean(null == undefined));

//infinity && -infinity
console.log(1 / 0);
console.log(1 / -0);
console.log(0);
console.log(-0);

console.log(true + false); // 1
console.log('true' == true); // false
console.log(false == 'false'); // false
console.log("foo" + + "bar"); // 'fooNaN'




//variable declaration

console.log(v);// undefined
var v = 25;
console.log(v);

// console.log(g);// Identifier 'v' has already been declared
let g = 35;
console.log(g);

// console.log(p);// Cannot access 'p' before initialization
const p = 45;
console.log(p);