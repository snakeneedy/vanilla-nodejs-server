import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import url from 'node:url';

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

const getContentType = (filePath = '') => {
  if (filePath.endsWith('.css')) return 'text/css';
  if (filePath.endsWith('.html')) return 'text/html';
  if (filePath.endsWith('.mjs')) return 'text/javascript';
  return 'text/plain';
};

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url);
  if (pathname === '/favicon.ico') {
    res.writeHead(200);
    res.end();
  } else {
    let filePath = '/public/index.html';
    if (pathname.startsWith('/static')) {
      filePath = pathname.replace(/^\/static/, '/public');
    }
    filePath = path.normalize(path.join(__dirname, filePath));
    try {
      const data = fs.readFileSync(filePath);
      res.writeHead(200, { 'Content-Type': getContentType(filePath) });
      res.end(data);
    } catch (err) {
      console.error(err);
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Internal Server Error');
    }
  }
  console.log(res.statusCode, req.method, req.url);
});

server.listen(PORT, () => console.log('Server is listening on port', PORT));
