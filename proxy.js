// This is a placeholder for a proxy server script.
// In a real-world scenario, you would implement server-side code to handle proxying requests.

const http = require('http');
const httpProxy = require('http-proxy');

const proxy = httpProxy.createProxyServer({});

const server = http.createServer((req, res) => {
    proxy.web(req, res, { target: req.url, changeOrigin: true }, (err) => {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Something went wrong. And we are reporting a custom error message.');
    });
});

server.listen(8080, () => {
    console.log('Proxy server is running on port 8080');
});
