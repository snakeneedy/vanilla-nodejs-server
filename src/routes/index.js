const routes = {
  '/': {
    GET: (_req, res) => {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end('<h1>A simple Node.js HTTP server</h1>');
    },
  },
  '*': (_req, res) => {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>404 Not Found</h1>');
  },
};

export default routes;
