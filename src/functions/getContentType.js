const contentType = {
  html: 'text/html',
  css: 'text/css',
  js: 'text/javascript',
  json: 'application/json',
  png: 'image/png',
  jpg: 'image.jpg',
  jpeg: 'image/jpeg',
  ico: 'image/vnd.microsoft.icon',
};

const getContentType = (endpoint) => {
  const extension = endpoint.split('.').pop();
  return contentType[extension];
};

module.exports = getContentType;
