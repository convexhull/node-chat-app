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
    socket.on('disconnect', () => {
        console.log('User was disconnnected');
    })
})
app.use(express.static(publicPath));

server.listen(port, () => {
    console.log(`Server is up and running on Port ${port}`);
})

