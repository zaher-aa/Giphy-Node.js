const {
  readFile,
  pageNotFound,
  handleSuggestions,
  searchHandler,
  animalsJsonHandler,
} = require('./handlers');

const router = (req, res) => {
  const { url: endpoint, method } = req;

  if (method === 'GET') {
    switch (endpoint) {
      case '/':
      case '/index.html':
        readFile(res, '/index.html');
        break;
      case '/css/errorPage.css':
      case '/css/style.css':
      case '/js/xhr.js':
      case '/js/dom.js':
        readFile(res, endpoint);
        break;
      case '/animals.json':
        animalsJsonHandler(res);
        break;
      default:
        pageNotFound(res);
    }
  } else if (method === 'POST') {
    if (endpoint === '/search') {
      searchHandler(req, res);
    } else if (endpoint === '/suggest') {
      handleSuggestions(req, res);
    } else {
      pageNotFound(res);
    }
  } else {
    pageNotFound(res);
  }
};

module.exports = router;
