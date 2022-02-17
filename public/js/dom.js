/* eslint-disable no-undef */
const inputField = document.querySelector('input');
const searchBtn = document.querySelector('button');
const gif = document.querySelector('img');
const datalist = document.querySelector('datalist');

const createOption = (optionTxt) => {
  const option = document.createElement('option');
  option.textContent = optionTxt;
  option.setAttribute('value', optionTxt);
  datalist.append(option);
};

const addSuggestions = (response) => {
  datalist.innerHTML = '';
  response.forEach((animal) => createOption(animal));
};

const renderGif = (response) => {
  const limit = 20;
  const imageNumber = Math.floor(Math.random() * limit);
  const gifURL = response.data[imageNumber].images.original.url;
  gif.src = gifURL;
};

const handleSearch = () => {
  const searchTerm = inputField.value;
  if (searchTerm.trim() !== '') {
    xhrRequest('/search', 'POST', renderGif, `name=${searchTerm}`);
  }
};

const handleSuggestions = (e) => {
  const searchTerm = e.target.value;
  xhrRequest(`/suggest/${searchTerm}`, 'GET', addSuggestions);
};

inputField.addEventListener('input', handleSuggestions);
searchBtn.addEventListener('click', handleSearch);

inputField.addEventListener('keypress', (e) => {
  if (e.code === 'Enter') handleSearch();
});
