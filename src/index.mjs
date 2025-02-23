import http from 'node:http';

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'content-type': 'text/html' });
  res.end('<h1>A simple Node.js HTTP server</h1>')
  console.log(res.statusCode, req.method, req.url);
});

server.listen(PORT, () => console.log('Server is listening on port', PORT));
