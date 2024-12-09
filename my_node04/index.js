// const http = require('http'); // importing built-in packege to create server
// const fs = require('fs')
// const url = require('url') //first it will go check in package.json inside dependecies, if find then import otherwise go to their own library


// //when any incoming requrest comes in this server then this callback will run ((res, req) => {})
// // const myServer = http.createServer((req, res) => { //it will create web server
// //     console.log("New request receive.");
// //     console.log(req);
// //     res.end("Hello from server buddy..!")

// // }); 
// // 
// const myServer = http.createServer((req, res) => { //it will create web server
//     if (req.url === "/favicon.ico")
//         return res.end(); //to avoid twice printing
//     const log = `${Date.now()}: ${req.method} ${req.url} New req received\n`  //req.url is used to find the path and check method type

//     const myUrl = url.parse(req.url, true); //true mean parsing and creating object the query
//     // console.log(myUrl); 


//     fs.appendFile("log.txt", `this is log data:${log}`, (error, data) => {

//         //    switch (req.url) {
//         switch (myUrl.pathname) {

//             case '/':

//                 if (req.method === 'GET') res.end('Homepafe')
//                 // res.end("You are on Homepage"); // In case '/' means homepage
//                 break;

//             case '/about':
//                 if (req.method === 'GET') res.end('Homepafe')
//                 const username = myUrl.query.myname; //myname from url
//                 res.end(`Hey ${username}, I am Satyam! Learning node.js from piyush garg youtube`)
//                 break;

//             case '/contact-us': res.end("To contact me: 327232341")
//                 break;

//             case '/search':
//                 const search = myUrl.query.search_query;
//                 // res.end(`Are you searching for ${search} ?`)
//                 res.end(`Here are your result for` + search) //fetch searched data into database and append to user
//                 break;

//             case '/signup':
//                         if(req.method === "GET") res.end('This is a Signup Form')
//                             else if(re.method === "POST"){
//                         //DB query to store data
//                         res.end("Success!")
//                             }
//             break;

//             default: res.end("404 Not Found!")
//                 break;
//         }


//     })

// });

// //in this myServer.listen code,myServer then listent this and if 8000 is working fine then this callback run ()=>{console.log("server started")} and print this log
// myServer.listen(8000, () => {
//     console.log("server started");

// })

//to make clean and readable way we use express

const express = require('express');
const http = require('http');

const app = express();

app.get('/', (req, res) =>{
    return res.send('Hello From HomePage');
});
app.get('/about', (req, res) =>{
    // return res.send('Hello From About Page' + ' Hey ' + req.query.name + 'you are '+req.query.age); //to show name on browser using url
        return res.send(`Hello ${req.query.name} `)
});

app.listen(8000, ()=> console.log("Server Started Bro...")
);


// const myServer = http.createServer(app);

// myServer.listen(8000, ()=> console.log("Server Started buddy..!"))