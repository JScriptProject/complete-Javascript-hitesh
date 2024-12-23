let score = 400;
// console.log(++score); //400

const balance = new Number('100');
let balance2 = new Number('200');
// console.log(balance); // [Number: 100]
// console.log(balance2.toString()); // [Number: 200]
const balance3 = balance2.toString();
console.log(balance3);

 
console.log(typeof score); // number
console.log(typeof balance);  // object
console.log(typeof balance2);  // object

let updatedBalance = balance + 1;

console.log(updatedBalance); //101
console.log(typeof updatedBalance); //number
console.log(updatedBalance.toFixed(2))


let num5 = 1245.65445;
let num5String = num5.toString();
console.log(num5);
console.log(num5String);
let pre = num5String.indexOf(".");

let preValue = (p , n )=>{
    console.log(p)
   return n.toPrecision(p);
};

console.log(preValue(pre, num5));

////////////////////////

// console.log(Math);
// console.log(Math.abs(-2));
// console.log(Math.round(4.98787));
// console.log(Math.ceil(4.1));
// console.log(Math.floor(4.9));
// console.log(Math.min(4,4,5,7,9,1));

let randomNum = Math.random()*20;

console.log(Math.floor(randomNum+1));

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min)


 

