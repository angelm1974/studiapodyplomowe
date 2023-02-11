http = require('http');
fs = require('fs');
server = http.createServer(function (req, res) {
    console.log('Request was made: ' + req.socket.remoteAddress);
    res.writeHead(200, { 'Content-Type': 'html' });
    res.end(fs.readFileSync('index.html'));
}
);
server.listen(3000, () => console.log('Listening on port 3000'));