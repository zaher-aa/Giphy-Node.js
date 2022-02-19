const fs = require('fs');
const path = require('path');
const serverError = require('./serverError');

const animalsJsonHandler = (res) => {
  const filePath = path.join(__dirname, '../animals.json');

  fs.readFile(filePath, (err, data) => {
    if (err) serverError(res);
    else {
      res.writeHead(200, { 'Content-Type': 'application.json' });
      res.end(data);
    }
  });
};

module.exports = animalsJsonHandler;
