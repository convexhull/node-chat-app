const path = require('path');
const http = require('http');
const socketIO = require('socket.io');
const express = require('express');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

io.on('connection', (socket)=>{
    console.log('New user connected');

    socket.emit('newMessage', {
        from : 'Yash',
        text : 'Yo wassup !',
        createdAt : 2343
    });

    socket.on('createMessage', (message) => {
        console.log('createMessage', message);
    })

    

    socket.on('disconnect', () => {
        console.log('User was disconnnected');
    })
})
app.use(express.static(publicPath));

server.listen(port, () => {
    console.log(`Server is up and running on Port ${port}`);
})

