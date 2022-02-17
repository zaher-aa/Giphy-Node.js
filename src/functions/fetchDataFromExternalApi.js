const fetch = require('node-fetch');
const serverError = require('../handlers/serverError');

const fetchDataFromExternalApi = (res, apiURL) => {
  fetch(apiURL)
    .then((response) => response.json())
    .then((data) => {
      res.end(JSON.stringify(data));
    })
    .catch(() => serverError(res));
};

module.exports = fetchDataFromExternalApi;
