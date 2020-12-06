const express = require('express');
const cors = require('cors');
const fileParser = require('express-multipart-file-parser');

const app = express();
app.use(cors());

const landingPage = `
  <doctype html>
  <html>
    <header></header>
    <body>
      <h1>File upload endpoint ...</h1>
    </body>
  <html>
`;

app.get('/', (req, res) => res.send(landingPage));

app.post('/pdftocsv', fileParser, (request, response) => {
    response.send(landingPage);
});

module.exports = app;

