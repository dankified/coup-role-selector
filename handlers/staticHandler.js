const serveStaticFile = require('../utils/serveStaticFiles');

/**
 * 
 * @param {Object} req - node request object
 * @param {Object} res - node response object
 * @param {string} path - request url
 */
function staticHandler(req, res, path) {
	switch(path.query) {
		case null: {
      serveStaticFile(res, __dirname + '/../public/index.html');
      break;
    }
    case 'css=true': {
      serveStaticFile(res, __dirname + '/../public/styles.css', 'text/css');
      break;
    }
    case 'js=true': {
      serveStaticFile(res, __dirname + '/../public/index.js', 'application/javascript');
      break;
    }
    default: {
      res.writeHead(404, "Resource not found");
      res.end();
    }
	}
}

module.exports = staticHandler;