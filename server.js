const http = require('http');
const url = require('url');
const buildRoster = require('./utils/buildRoster');
const staticHandler = require('./handlers/staticHandler');

const port = process.env.PORT || 5000;



const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url);
  switch(parsedUrl.pathname) {
    case '/':
      staticHandler(req, res, parsedUrl);
      break;
    case '/roster':
      res.end(JSON.stringify(buildRoster()));
      break;
    default: {
      console.log(parsedUrl.query)
      res.writeHead(404, 'Not a valid endpoint');
      res.end();
    }
	}
});

server.listen(port, () => console.log("Server running on port " + port));