const Loader = require("./classes/configLoader");
const mediasoup = require("mediasoup");
const config = new Loader();

const { Server } = require('socket.io')
const io = new Server(config.port, {
    cors: {
        origin: '*',
    }
});

io.use((socket, next) => {
    // middleware to do whatever we want
    // const request = socket.request;
    next();
}); 


const Rooms = require("./classes/rooms");
new Rooms(io);