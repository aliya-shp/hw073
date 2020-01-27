const express = require('express');
const app = express();
const port = 8000;

const Vigenere = require('caesar-salad').Vigenere;
const password = 'lalala';

app.get('/encode/:encoding', (req, res) => {
    res.send(Vigenere.Cipher(password).crypt(req.params.encoding));
});

app.get('/decode/:decoding', (req, res) => {
    res.send(Vigenere.Decipher(password).crypt(req.params.decoding));
});

app.listen(port, () => {
    console.log('Ciphering/deciphering in process');
});