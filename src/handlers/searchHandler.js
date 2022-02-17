const fetchDataFromExternalApi = require('../functions/fetchDataFromExternalApi');

const searchHandler = (req, res) => {
  let allData = '';

  req.on('data', (chunkOfData) => {
    allData += chunkOfData;
  });

  req.on('end', () => {
    const dataObj = Object.fromEntries(new URLSearchParams(allData));
    const { name: searchTerm } = dataObj;
    const { API_KEY } = process.env;
    const limit = 20;
    const apiURL = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&limit=${limit}&api_key=${API_KEY}`;
    fetchDataFromExternalApi(res, apiURL);
  });
};

module.exports = searchHandler;
