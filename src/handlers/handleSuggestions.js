const fs = require('fs');
const path = require('path');
const serverError = require('./serverError');
const getMatches = require('../functions/getMatches');

const handleSuggestions = (res, searchTxt) => {
  const animalsFilePath = path.join(__dirname, '../../src/animals.json');

  fs.readFile(animalsFilePath, (err, data) => {
    if (err) serverError(res);
    else {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      const matchedAnimalsArr = getMatches(JSON.parse(data), searchTxt);
      res.end(JSON.stringify(matchedAnimalsArr));
    }
  });
};

module.exports = handleSuggestions;
