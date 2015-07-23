'use strict';

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var bodyParser = require('body-parser');

var models = require('./models');

var users = require('./routes/users');
var organizations = require('./routes/organizations');
var itemTypes = require('./routes/item.types.js');

var app = express();

app.use(favicon('./public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(express.static('public'));
app.use(express.static('.tmp/serve'));
app.use(express.static('src'));
app.use('/bower_components', express.static('bower_components'));

app.get('/', function(req, res){
    res.end('Hello World 1234');
});

app.use('/users', users);
app.use('/organizations', organizations);
app.use('/item-types', itemTypes);

app.set('port', 3000);

models.sequelize.sync().then(function () {
    var server = app.listen(app.get('port'), function() {
        console.log('Express server listening on port: ' + server.address().port);
    });
});

