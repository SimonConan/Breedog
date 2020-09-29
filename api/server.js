const http = require('http');

const app = require('./app');

// Set the port to use if not defined is env file, set it to 3000
const port = process.env.PORT || 3000;
app.set('port', port);

const server = http.createServer(app);

server.on('listening', () => {
    console.log('Listening on ' + port);
});

server.listen(port);