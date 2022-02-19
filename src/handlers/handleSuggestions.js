const fs = require('fs');
const path = require('path');
const serverError = require('./serverError');
const getMatches = require('../functions/getMatches');

const handleSuggestions = (req, res) => {
  let suggestion = '';

  req.on('data', (dataChunk) => {
    suggestion += dataChunk;
  });

  req.on('end', () => {
    const suggestionObj = Object.fromEntries(new URLSearchParams(suggestion));
    const { suggest } = suggestionObj;
    const animalsFilePath = path.join(__dirname, '../../src/animals.json');

    fs.readFile(animalsFilePath, (err, data) => {
      if (err) serverError(res);
      else {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        const matchedAnimalsArr = getMatches(JSON.parse(data), suggest);
        res.end(JSON.stringify(matchedAnimalsArr));
      }
    });
  });
};

module.exports = handleSuggestions;
