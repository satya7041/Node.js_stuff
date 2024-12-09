const fs = require('fs');  //importing fs module, which is build in nodejs


//below Sync in writeFileSync means synchronous call or blocking operation
// fs.writeFileSync('./text.txt', "Hey there Satyam Srivastava"); //it will create a file with the given string, when i run this code
//if i change string and re-run again it will override the existing string with the newest one

//for asynchronous or non-blocking operation
// fs.writeFile('./text2.txt',"hey there,it is asynchronous", (error) => {})

//for read file (blocking operation)
// using synchronous, but if we use asyn we can't store in var, see below this sync function
// it will block the other execution code until finish

// console.log("1");
// const result = fs.readFileSync('./sampleText.txt','utf-8'); //encoding is utf8
// console.log(result);
// console.log("2"); //output is 1 then result after that 2, so it means it is blocking

// imp- default Thread Pool Size = 4
// max is depend on your cpu core(means if you have 8 core cpu then can use 8 Thread)
// to check your system cpu code
const os = require('os'); //importing os to get details of own operating system

console.log(os.cpus().length); //show length of cpu the number of cpu core is = to use thread


// -----------------------------------------------------------------------------------------------------------------------

//reading file using asynchronous
// console.log("1");

// console.log("2");

// fs.readFile('./sampleText.txt','utf-8',(err, result) => { //to use async,we must define callback function with parameters
//     if (err) {
    //         console.log("error is: ",err);
    
    //     }else {
        //         console.log('Data is:',result);
        
        //     }
        // })
        // console.log("3"); //output is - 1 then 2, after that 3 then finally readfile function, so it is not blocking others code
        

   // ----------------------------------------------------------------------------------------------------------------------
        
// it will add not override 
// fs.appendFileSync('./sampleText.txt', new Date().getDate().toLocaleString()); //converting to string
// fs.appendFileSync('./sampleText.txt', `Hi Again\n`); 
// fs.appendFileSync('./sampleText.txt', `Date is: ${Date.now()} Hi Again\n`); //with data

//we can make a copy of a file
// fs.cpSync('./sampleText.txt', './copySampleText.txt');

//we can delete a file also
// fs.unlinkSync('./copySampleText.txt');

//getting details of file

// console.log("details of the file is: ",fs.statSync('./sampleText.txt'))

// can check that it is file or not using .isFile()
// console.log("details of the file is: ",fs.statSync('./sampleText.txt').isFile())

//can create directory
// // for single dir
// fs.mkdirSync('./my-data');
// //for multiple
// fs.mkdirSync('./multi-dir/some-data/personal data', {recursive:true});
