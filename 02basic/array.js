// Arrays Declaire

const myArray = [1,2,4,5,6];
const myArray2 = new Array(45,546,454,123);

console.log(myArray2);

// Opeartions on Array
// Push 
myArray2.push(100);
console.log(`Array after push 100 = ${myArray2}`);

//pop
let popValue = myArray2.pop();
console.log(`Pop Value ${popValue} from the array ${myArray2}`);

// shift
let shiftElement = myArray2.shift();
console.log(`Array after shift operations ${myArray2} and the shift element is ${shiftElement}`);

// unshift

myArray2.unshift(45);
console.log(`Array after unshift element 45 = ${myArray2}`);

//Length
console.log(`Length of the array myArray is ${myArray2.length}`);

// slice

console.log("Slice and Splice as below");

let supArray = ['Ravi', 'rahul', 'rajesh','rishi','rohit']
console.log(`SupArray = ${supArray}`);
const arraySlice = supArray.slice(1,3);
console.log(`Original Array of Sup = ${supArray} and the new Slice Array = ${arraySlice}`);

const spliceArray = supArray.splice(1,3);
console.log(`Original Array of Sup = ${supArray} and the new Splice Array = ${spliceArray}`);

