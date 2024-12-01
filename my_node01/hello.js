
// const {FunctionAdd, FunctionSub} = require('./math') //importing math.js file //we can destructure
const math = require('./math') //importing math.js file 


console.log('Hello Satyam, your first nodejs program');

console.log("hello:", math.FunctionAdd(55,6));
console.log("hello:", math.FunctionSub(55,6));
console.log("hello:", math.FunctionMul(55,6));

// console.log(add(5,9));