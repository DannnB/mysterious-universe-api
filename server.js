if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load();
}
const http = require('http');
const app = require('./app');

const server = http.createServer(app);

server.listen(process.env.PORT, process.env.IP);

console.log('Server running on', process.env.PORT);
console.log('Server ip', process.env.IP);