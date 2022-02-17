const fs = require('fs');
const path = require('path');
const getContentType = require('../functions/getContentType');
const serverError = require('./serverError');

const readFile = (res, endpoint) => {
  const filePath = path.join(__dirname, '../../public', endpoint);

  fs.readFile(filePath, (err, data) => {
    if (err) serverError(res);
    else {
      res.writeHead(200, { 'Content-Type': getContentType(endpoint) });
      res.end(data);
    }
  });
};

module.exports = readFile;
