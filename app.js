var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');

var models = require("./models");

var users = require('./routes/users');

var app = express();

app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(express.static('public'));
app.use(express.static(path.join(__dirname, '.tmp/serve')));
app.use(express.static(path.join(__dirname, 'src')));
app.use('/bower_components', express.static('bower_components'));

app.get('/', function(req, res){
    res.end('Hello World 1234');
});

app.use('/users', users);

app.set('port', process.env.PORT || 3000);

models.sequelize.sync().then(function () {
    var server = app.listen(app.get('port'), function() {
        console.log('Express server listening on port: ' + server.address().port);
    });
});

