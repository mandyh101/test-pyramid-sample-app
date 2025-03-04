const app = require('./server');
const http = require('http');

// Get port from environment or use 3000 as default
const port = process.env.PORT || 3000;
app.set('port', port);

// Create HTTP server
const server = http.createServer(app);

// Listen on provided port
server.listen(port);

// Event listener for HTTP server "listening" event
server.on('listening', () => {
  console.log(`Server running on port ${port}`);
});

// Event listener for HTTP server "error" event
server.on('error', (error) => {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // Handle specific listen errors
  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`);
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`);
      process.exit(1);
      break;
    default:
      throw error;
  }
}); 