const http = require('http'); // importing built-in packege to create server
const fs = require('fs')

//when any incoming requrest comes in this server then this callback will run ((res, req) => {})
// const myServer = http.createServer((req, res) => { //it will create web server
//     console.log("New request receive.");
//     console.log(req);
//     res.end("Hello from server buddy..!")
    
// }); 
// 
const myServer = http.createServer((req, res) => { //it will create web server
    const log = `${Date.now()}: ${req.url} New req received\n`  //req.url is used to find the path
    fs.appendFile("log.txt", `this is log data:${log}`, (error, data) => {
       switch (req.url) {
        case '/': res.end("You are on Homepage"); // In case '/' means homepage
            break;
       case '/about': res.end("Hey There, I am Satyam! Learning node.js from piyush garg youtube")
        break;
       case '/contact-us': res.end("To contact me: 327232341")
        break;
        default: res.end("404 Not Found!")
            break;
       }
       

    })
    
}); 

//in this myServer.listen code,myServer then listent this and if 8000 is working fine then this callback run ()=>{console.log("server started")} and print this log
myServer.listen(8000, () =>{
    console.log("server started");
    
})