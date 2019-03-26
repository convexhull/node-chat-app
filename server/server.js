const path = require('path');
const express = require('express');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
const ip = '127.0.0.1';
const app = express();

app.use(express.static(publicPath));

app.listen(port, ip , () => {
    console.log(`Server is up and running on Port ${port} and IP ${ip}`);
})

