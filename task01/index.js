const express = require('express');

const app = express();

const port = 8000;

app.get('/:phrase', (req, res) => {
    res.send(req.params.phrase);
});

app.listen(port, () => {
    console.log('Trial');
});