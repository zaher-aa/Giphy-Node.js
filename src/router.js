const readFile = require('./handlers/readFile');
const pageNotFound = require('./handlers/pageNotFound');
const handleSuggestions = require('./handlers/handleSuggestions');
const searchHandler = require('./handlers/searchHandler');

const router = (req, res) => {
  const { url: endpoint, method } = req;

  if (method === 'GET') {
    const searchTxt = endpoint.split('/suggest/').pop();
    switch (endpoint) {
      case '/':
      case '/index.html':
        readFile(res, '/index.html');
        break;
      case '/css/errorPage.css':
      case '/css/style.css':
      case '/js/xhr.js':
      case '/js/logic.js':
      case '/js/dom.js':
        readFile(res, endpoint);
        break;
      case `/suggest/${searchTxt}`:
        handleSuggestions(res, searchTxt);
        break;
      default:
        pageNotFound(res);
    }
  } else if (method === 'POST') {
    if (endpoint === '/search') {
      searchHandler(req, res);
    } else pageNotFound(res);
  } else pageNotFound(res);
};

module.exports = router;
