const http=require('http');
const EventEmitter=require('events');

const mojEmitter=new EventEmitter();

const server=http.createServer((req,res)=>{
    mojEmitter.emit('zdarzenie',req.url);
    res.end('Hello World');
});

server.listen(3000,()=>{
    console.log('Serwer działa na porcie 3000');
});

mojEmitter.on('zdarzenie',(url)=>{
    console.log('Zdarzenie: '+url);
});