let http = require('http'); 

let server = http.createServer(function (req, res) {   
   
    if (req.url == '/home') {
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.write(JSON.stringify({ message: "Hello World"}));  
            res.end();  
    }
    if (req.url == '/users') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify({ users: ["john","james","jones"]}));  
        res.end();  
}
});

server.listen(5000);

console.log('Node.js web server at port 5000 is running..')