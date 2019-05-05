var http=require("http");
var fs=require("fs");

http.createServer(function(req,res){
    console.log("request come: ",req.url);
    var html=fs.readFileSync("test.html","utf-8");
    res.writeHead(200,{"Content-type":"text/html"});
    res.end(html);
}).listen(3001);


console.log("server start port 3001");