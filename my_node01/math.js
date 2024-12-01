
 function add (a,b) {
    return a + b;

 }

 function sub (a,b) {
    return a - b;
 }

 function mul (a,b) {
    return a * b;
 }

//to use in different file we must export this

// module.exports = "Nodejs is working module"
// module.exports = add;
// module.exports = sub; //it will override add function, so don't do this

// module.exports = { // way-1 it is correct
// add,sub
// }
module.exports = {     //way-2 it is also correct
    FunctionAdd :add,
    FunctionSub :sub,
    FunctionMul :mul,

}

// // way-3 another way to use export using arrow function 
//  exports.add = (a,b) => a + b;//for add
//  exports.add = (a,b) => a - b;  //for sub