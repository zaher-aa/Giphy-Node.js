// eslint-disable-next-line no-unused-vars
const xhrRequest = (url, method, callback, data) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        callback(response);
      } else {
        console.log('err');
      }
    }
  };

  xhr.open(method, url);
  xhr.send(data);
};
