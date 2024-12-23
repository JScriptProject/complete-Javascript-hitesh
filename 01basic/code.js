const id= Symbol('123');

const anotherId = Symbol('123');

console.log(id);


// example of heap
const myObj ={
    name:'ravi',
    age:23,
}

const myFunction = function()
{
    console.log("inside Function");
}

console.log(typeof myFunction);
console.log(typeof myObj);

const myobj2 = myObj;

myobj2.name= 'RahulNew';

console.log(myobj2);
console.log(myObj);

// example of stack

const newV1 = 12;
let newV2 = newV1;
newV2 = 565;

console.log(newV1);
console.log(newV2);


// strings

// String traditional add

const name = "ravindra";
const age = 20;
console.log(name+age);

const newStringOne = "     ravi    .    .";
console.log(newStringOne);

console.log(newStringOne.trim());

let url = "https://www.google.com/new%20page/"
console.log(url.replace("%20","-"));
console.log(url.includes("google"));
