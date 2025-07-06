import http from 'node:http';

const server = http.createServer((req, res) => {
    const { url, method } = req;
    console.log(`Received ${method} request for ${url}`);

    switch (method) {
        case 'GET':
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.write('Hello, this is a GET request!');
            res.end();
            break;
        default:
            res.writeHead(405, { 'Content-Type': 'text/plain' });
            res.write('Method Not Allowed');
            res.end();
            break;
    }
});

server.on('request', (req, res) => {
    console.log(`Request received: ${req.method} ${req.url}`);
});