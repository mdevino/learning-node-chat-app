const {io, server} = require('./app');
const {PORT}  = require('./constants');

const welcomeMessage = 'Welcome!';
const newClientJoined = 'Here comes a new challenger!';

io.on('connection', (socket) => {
    console.log('Here comes a new challenger!');
    socket.emit('message', welcomeMessage);
    socket.broadcast.emit('message', newClientJoined);

    socket.on('disconnect', () => {
        io.emit('sendMessage', 'Farewell, hero!');
    });

    socket.on('message', (message) => {
        socket.broadcast.emit('message', message);
    });

    socket.on('sendLocation', (coords) => {
        io.emit('message', `https://google.com/maps?q=${coords.lat},${coords.long}`);
    })

});

server.listen(PORT, () => {
    console.log(`Port ${PORT}. Here we go again! :)`);
});