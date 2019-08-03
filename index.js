const server = require('http').createServer();
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
        case '/todo-list/style.css':
            res.writeHead(200, {'Content-Type': 'text/css'});
            res.end(fs.readFileSync('./todo-list/style.css'))
            break;
        case '/todo-list/app.js':
            res.writeHead(200, {'Content-Type': 'text/javascript'});
            res.end(fs.readFileSync('./todo-list/app.js'))
            break;
        case '/lib/jquery-3.3.1.min.js':
            res.writeHead(200, {'Content-Type': 'text/javascript'});
            res.end(fs.readFileSync('./todo-list/app.js'))
            break;
        default:
            res.writeHead(404, {'Content-Type': 'text/plain'})
            res.end("This Page does not exist");
    }
});

server.listen(80);