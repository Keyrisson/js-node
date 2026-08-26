const http = require('http');

const hostname = '127.0.0.1';

const port = 6969;  

const server = http.createServer((req, res) =>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.end('ela não te ama')
});

server.listen(port, hostname, () => {
console.log(`Servidor rodando em http://${hostname}:${port}/`)
});