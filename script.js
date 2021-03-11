///class work

const payment = {
   "apple": 12,
   "water": 0.5,
   "wine": 25
};

const VAT = 0.25;

const goodsWithVat = Object.entries(payment)
   .reduce((accum, curr, _i) => {
      const [key, value] = curr;
      accum[key] = value * (1 + VAT);
      return accum;
   }, {})

console.log('\t Name \t + \t \t Price');
console.log('\t+++++++++++++++++++');

Object.entries(goodsWithVat)
   .forEach(([key, value]) => {
      console.log(`\t${key} \t + \t ${value}`);
   });


///home task


function randn_bm() {
   let u = 0, v = 0;
   while (u === 0) u = Math.random();
   while (v === 0) v = Math.random();
   return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v) * 2 | 0;
};


let n = 10;
let arr = []
let result = {}
for (let i = 0; i < n; i++) {
   arr.push(randn_bm())
}


arr.forEach((item) => {
   if (result[item] != undefined)
      result[item]++;
   else
      result[item] = 1;
})

console.table(result)