const fs = require('fs');
const path = require('path');

const serverError = (res) => {
  const serverErrorPagePath = path.join(__dirname, '../../public/html/500.html');

  fs.readFile(serverErrorPagePath, (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Server Error');
    } else {
      res.writeHead(500, { 'Content-Type': 'text/html' });
      res.end(data);
    }
  });
};

module.exports = serverError;
