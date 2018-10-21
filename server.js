const http = require('http');
const url = require('url');
const staticHandler = require('./handlers/staticHandler');

const port = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url);
  switch(parsedUrl.pathname) {
    case '/':
      staticHandler(req, res, parsedUrl);
      break;
    default: {
      res.writeHead(404, 'Not a valid endpoint');
      res.end();
    }
	}
});

server.listen(port, () => console.log("Server running on port " + port));