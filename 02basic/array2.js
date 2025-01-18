const marvel_heros = ['Thor','Spiderman','Ironman'];
const dc_heros = ['Superman', 'Flash', 'Batman'];

//Push the one array into the another array 
// marvel_heros.push(dc_heros);
// console.log(marvel_heros); // ['Thor','Spiderman','Ironman',['Superman', 'Flash', 'Batman']]

// concat operation

let new_concat_array = marvel_heros.concat(dc_heros);
console.log(new_concat_array); //['Thor','Spiderman','Ironman','Superman', 'Flash', 'Batman']

//spread operator

let new_spread_array = [...marvel_heros, ...dc_heros];
console.log(new_spread_array); //['Thor','Spiderman','Ironman','Superman', 'Flash', 'Batman']

// flat array
const another_array = [1,1,1,1,[2,2,2,2,[3,3,3,3],4,5,6],10,12,45];
const realAnotherArray = another_array.flat(Infinity);
console.log(another_array);

console.log(realAnotherArray);

//check if its array

console.log(Array.isArray(realAnotherArray)); // true.

//create the array from String - from
const newObj = {
    name: 'Rahul Gupta',
    age:22,
    occupation:'Developer'
}
console.log(Array.from("Ravindra Kamble"));
console.log(Array.from(newObj.name));

//create the array from the set of variables - of
const score1 = 100;
const score2 = 200;
const score3 = 300;

console.log(Array.of(score1,score2,score3)); // [100,200,300]
