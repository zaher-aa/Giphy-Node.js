const fs = require('fs');
const path = require('path');

const pageNotFound = (res) => {
  const serverErrorPagePath = path.join(__dirname, '../../public/html/404.html');

  fs.readFile(serverErrorPagePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Page Not Found');
    } else {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end(data);
    }
  });
};

module.exports = pageNotFound;
