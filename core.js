//const fs = require('fs');
//fs.readFile("./file.txt",(err,data)=> {err?console.log(err) : console.log("data from asych",data)});

//let result = fs.readFileSync("./file.txt");
//console.log("data from synch function", result)//
const http = require('http');
console.log(http) 
let server = http.createServer((request,response)=>{response.end('hello')
});
server.listen(8081,()=> console.log("server is running"))