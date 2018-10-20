const fs = require('fs');

/**
 * Serve an html file
 * @param {Object} req - node request object
 * @param {Object} res - node response object
 */
function htmlFile(req, res) {
  fs.readFile(__dirname + '/../index.html', 'utf8', (err, data) => {
    if(err) {
      res.writeHead(500, "Could not read file");
      res.end();
    } else {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data, 'utf8');
    }
  }); 	
}

/**
 * Serve a CSS file
 * @param {Object} req - node request object
 * @param {Object} res - node response object
 */
function cssFile(req, res) {
  fs.readFile(__dirname + '/../styles.css', 'utf8', (err, data) => {
    if(err) {
      res.writeHead(500, "Could not read file"); 
      res.end();
    } else {
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.end(data);
    }
  })
}

/**
 * 
 * @param {Object} req - node request object
 * @param {Object} res - node response object
 * @param {string} path - request url
 */
function staticHandler(req, res, path) {
	switch(path.query) {
		case null: {
      htmlFile(req, res);
      break;
    }
    case 'css=true': {
      cssFile(req, res);
      break;
    }
    default: {
      res.writeHead(404, "Resource not found");
      res.end();
    }
	}
}

module.exports = staticHandler;