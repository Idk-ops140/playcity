const http = require('http');
const httpProxy = require('http-proxy');

// Create a proxy server
const proxy = httpProxy.createProxyServer({});

// Handle proxy errors
proxy.on('error', (err, req, res) => {
    res.writeHead(500, { 'Content-Type': 'text/plain' });
    res.end('Something went wrong. And we are reporting a custom error message.');
});

// Create an HTTP server to listen for requests and proxy them
const server = http.createServer((req, res) => {
    // Define the target URL based on the request URL
    let target = '';
    if (req.url.includes('discord.com')) {
        target = 'https://discord.com';
    } else if (req.url.includes('character.ai')) {
        target = 'https://character.ai';
    } else if (req.url.includes('poki.com')) {
        target = 'https://poki.com';
    } else if (req.url.includes('neal.fun')) {
        target = 'https://neal.fun';
    }

    // Proxy the request to the target URL
    proxy.web(req, res, { target, changeOrigin: true });
});

// Start the server on port 8080
server.listen(8080, () => {
    console.log('Proxy server is running on port 8080');
});
