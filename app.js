const net = require('net');

// Create a server instance, and chain the listen function to it
// The function passed to net.createServer() becomes the event handler for the 'connection' event
const server = net.createServer((socket) => {
    console.log('Client connected');

    // Event handler for when data is received
    socket.on('data', (data) => {
        console.log('Received from client: ' + data);
        
        // Echo the received data back to the client
        socket.write('Echo: ' + data);
    });

    // Event handler for when the client closes the connection
    socket.on('end', () => {
        console.log('Client disconnected');
    });

    // Event handler for error
    socket.on('error', (err) => {
        console.log('Error: ' + err.message);
    });
});

// Have the server start listening on port 3000
server.listen(3000, () => {
    console.log('Server listening on port 3000');
});
