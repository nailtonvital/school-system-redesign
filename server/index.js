const express = require('express')
const server = express()

server.get('/', (req, res) => {
    res.json('Nothing here...');
});

server.listen(3333,console.log(4))