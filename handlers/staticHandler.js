const fs = require('fs');

/**
 * Serve and html file
 * @param {Object} req - node request object
 * @param {Object} res - node response object
 */
function htmlFile(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  fs.readFile(__dirname + '/../index.html', (err, data) => {
    if(err) res.end(500, {'Message': 'Error reading fiLE'});
    res.end(data, 'utf8');
  }); 	
}

/**
 * 
 * @param {Object} req - node request object
 * @param {Object} res - node response object
 * @param {string} path - request url
 */
function staticHandler(req, res, path) {
	switch(path) {
		case '/': {
			htmlFile(req, res);
		}
	}
}

module.exports = staticHandler;