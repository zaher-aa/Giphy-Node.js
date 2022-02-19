const readFile = require('./readFile');
const pageNotFound = require('./pageNotFound');
const searchHandler = require('./searchHandler');
const handleSuggestions = require('./handleSuggestions');
const serverError = require('./serverError');
const animalsJsonHandler = require('./animalsJsonHandler');

module.exports = {
  readFile,
  pageNotFound,
  searchHandler,
  handleSuggestions,
  serverError,
  animalsJsonHandler,
};
