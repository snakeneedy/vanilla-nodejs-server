import http from 'http';
import url from 'url';
import routes from './routes/index.js';

const PORT = process.env.PORT | 3000;

const server = http.createServer((req, res) => {
  const method = req.method.toUpperCase();
  const { pathname } = url.parse(req.url);
  const handler = (routes[pathname] && routes[pathname][method]) || routes['*'];
  handler(req, res);
  console.log(res.statusCode, method, pathname);
});

server.listen(PORT, () => {
  console.log('server is listening port:', PORT);
});
