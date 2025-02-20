import http from 'http';

const PORT = process.env.PORT | 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end('<h1>A simple Node.js HTTP server</h1>');
});

server.listen(PORT, () => {
  console.log(`server is listening port: ${PORT}`);
});
