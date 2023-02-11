http = require('http');
fs = require('fs');
server = http.createServer(function (req, res) {
    if(req.url==='/'){
        res.writeHead(200, { 'Content-Type': 'html' }
        );
        res.end(fs.readFileSync('./html/index.html'));
    } else if (req.url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'html' }
        );
        content=fs.readFileSync('./html/contact.html');
        content=content.toString().replace('{zm}','Jan Kowalski');
        res.end((content));
    } else if (req.url === '/menu') {
        res.writeHead(200, { 'Content-Type': 'html' }
        );
        res.end(fs.readFileSync('./html/menu.html'));
    } else {
        res.writeHead(404, { 'Content-Type': 'html' }
        );
        res.end(fs.readFileSync('./html/404.html'));
    }
}
);
server.listen(3000, () => console.log('Listening on port 3000'));