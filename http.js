var http=require("http");


http.createServer(function(req,res){
    console.log("url come: ",req.url);
    res.writeHead(200,{
        "Content-type":"text/plain",
        "Access-Control-Allow-Origin":"*",
        "Access-Control-Allow-Headers":"X-Test-Cors",
        "Access-Control-Allow-Methods":"POST,PUT,DELETE",
        "Access-Control-Max-Age":"1000",
    });
    res.end("Hello world");
}).listen(3000);


console.log("server start port 3000");