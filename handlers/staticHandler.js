const fs = require('fs');

/**
 * Serve and html file
 * @param {Object} req - node request object
 * @param {Object} res - node response object
 */
function htmlFile(req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	fs.readFile(__dirname + '/../index.html', 'utf8', (err, data) => {
		if(err) res.end({500: 'Could not read file'});
		res.end(data);
	})	
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
			htmlFile(req, res)
		}
	}
}

module.exports = staticHandler;