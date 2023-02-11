http=require('http');
server=http.createServer(function(req,res){
    console.log('Request was made: '+ req.socket.remoteAddress);
    res.writeHead(200,{'Content-Type':'html'});
    res.end('<html><head><title>My first web page</title></head><body><h1 style="color:red;">Hello World</h1></body></html>'); 
}
);
server.listen(3000,()=>console.log('Listening on port 3000'));