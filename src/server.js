const http = require('http');
const router = require('./router');

require('env2')('.env');

const port = process.env.PORT || 3000;

http.createServer(router).listen(port, () => {
  console.log(`Running on http://localhost:${port}`);
});
