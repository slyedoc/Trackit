var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');

var models = require("./models");

var users = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res){
    res.end('Hello World');
});

app.use('/users', users);

app.set('port', process.env.PORT || 4000);

models.sequelize.sync().then(function () {
    var server = app.listen(app.get('port'), function() {
        console.log('Express server listening on port: ' + server.address().port);
    });
});

