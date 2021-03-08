const express = require('express');
const path = require("path");
const port = process.env.PORT || 8080;
const app = express();

var dist_dir = path.join(__dirname,"dist");

app.use(express.static(dist_dir));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(dist_dir, 'index.html'));
});

app.listen(port);
console.log('Server started');