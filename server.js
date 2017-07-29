var express = require('express');
var app = express();
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;
var crypto = require('crypto');
var bodyParser = require('body-parser');
var session = require('express-session');
var usern;var config = {
    user: 'postgres',
    database: 'any',
    host: 'localhost',
    port: '5432',
    password: 'pkra8949'
};

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(session({
    secret: 'someRandomSecretValue',
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 30}
}));
o
app.get('/booked', function (req, res) {

   res.sendFile(path.join(__dirname, 'form', 'booked.html'));
});

app.get('/logout', function (req, res) {

   res.sendFile(path.join(__dirname, 'form', 'login.html'));
    res.sendFile(path.join(__dirname, 'form', 'login.css'));

});

app.get('/', function (req, res) {

   res.sendFile(path.join(__dirname, 'form', 'login.html'));
});

app.get('/book', function (req, res) {

   res.sendFile(path.join(__dirname, 'form', 'index.html'));

});

app.get('/:fileName', function (req, res) {
  res.sendFile(path.join(__dirname, 'form', req.params.fileName));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
