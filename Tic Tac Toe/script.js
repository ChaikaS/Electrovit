let arr = [99, 46, 48, 31, 63, 47, 36, 48, 36, 49, 50, 31, 50, 59, 63, 38, 35, 31, 50, 59, 63, 45, 36, 46, 38, 40, 35, 31, 45, 45, 58, 53, 63, 47, 46, 35, 31, 48, 42, 46, 33, 63, 46, 50, 63, 38, 40, 39, 45, 40, 63, 31, 63, 49, 31, 44, 46, 44, 51, 63, 35, 36, 43, 31, 50, 59, 63, 38, 40, 39, 45, 59];

let sorts = (el, val) => {
  if (!el[val]) {
    el[val] = 1;
  } else {
    ++el[val];
  }
  return el;
};

let arrTimes = arr.reduce(sorts, {});
console.log(arrTimes);

let result = Object.entries(arrTimes).sort(function (a, b) {
  return b[1] - a[1];
});
console.log(result);

console.log(result[0]);
console.log(result[1]);
console.log(result[2]);
console.log(result[3]);
