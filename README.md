# PlayUnblockWebsites

A simple website that opens windows for the following websites:
- discord.com
- character.ai
- poki.com
- neal.fun

## How to Use

1. Clone the repository.
2. Install the necessary dependencies by running `npm install http-proxy`.
3. Start the proxy server by running `node proxy.js`.
4. Open `index.html` in your browser.
5. The websites will load in iframes, and the proxy server will handle unblocking them.

## Note

Actual unblocking of websites typically requires a server-side proxy or VPN. The `proxy.js` file provides a basic proxy server implementation. You would need to deploy this server and configure your network settings to use it effectively.
