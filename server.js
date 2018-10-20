const http = require('http');
const buildRoster = require('./utils/buildRoster');
const staticHandler = require('./handlers/staticHandler');

const port = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
  switch(req.url) {
    case '/':
      staticHandler(req, res, req.url);
      break;
    case '/roster':
      res.end(JSON.stringify(buildRoster()));
      break;
    default: {
      res.writeHead(404, 'Not a valid endpoint');
      res.end();
    }
	}
});

server.listen(port, () => console.log("Server running on port " + port));