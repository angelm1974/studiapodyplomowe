http=require('http');
server=http.createServer(function(req,res){
    console.log('Request was made: '+ req.socket.remoteAddress);
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end('Hello World'); 
}
);
server.listen(3000,()=>console.log('Listening on port 3000'));