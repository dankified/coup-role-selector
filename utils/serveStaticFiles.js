const fs = require('fs');
/**
 * Serve a static file
 * @param {Object} res - node response object
 * @param {string} path - path to the requested file
 * @param {string} MIMEType - type of requested file. Defaults to text/html
 * @param {string} encoding - file encoding. Defaults to utf8
 */

module.exports = function serveStaticFiles(res, path, MIMEType='text/html', encoding='utf8') {
  fs.readFile(path, encoding, (err, data) => {
    if(err) {
      res.writeHead(500, "Could not read file"); 
      res.end();
    } else {
      res.writeHead(200, {'Content-Type': MIMEType});
      res.end(data);
    }
  })
}