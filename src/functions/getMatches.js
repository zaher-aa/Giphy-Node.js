// eslint-disable-next-line arrow-body-style
const getMatches = (dataArr, searchTxt) => {
  return searchTxt
    ? dataArr.filter((ele) => ele.toLowerCase().includes(searchTxt.toLowerCase()))
    : [];
};

module.exports = getMatches;
