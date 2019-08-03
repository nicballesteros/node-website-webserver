const http = require('http');
const fs = require('fs');

server.on('request', (req, res) => {
    switch(req.url){
        case '/todo-list':
        case '/about':
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(fs.readFileSync(`./${req.url}/${req.url}.html`));
            break;
        case '/':
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(fs.readFileSync('./index.html'));
            break;
        default:
            res.writeHead(404, {'Content-Type': 'text/plain'})
            res.end("This Page does not exist");
    }
});

server.listen(80);