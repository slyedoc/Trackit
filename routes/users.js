var models  = require('../models');
var express = require('express');
var router  = express.Router();

router.get('/', function(req, res) {
    models.User.findAll().then(function(entities) {
        res.json(entities);
    });
});

router.get('/:id', function(req, res) {
    models.User.find({ where: { id: req.param('id') } }).then(function(entity) {
        if (entity) {
            res.json(entity);
        } else {
            res.send(404);
        }
    });
});

router.post( '/', function(req, res) {
    console.log('test');
    models.User.create(req.body).then(function(entity) {
        res.statusCode = 201;
        res.json(entity);
    });
});


router.put( '/:id', function(req, res) {
    models.User.find({ where: { id: req.param('id') } }).then(function(entity) {
        if (entity) {
            entity.updateAttributes(req.body).then(function(entity) {
                res.json(entity);
            });
        } else {
            res.send(404);
        }
    })
});

router.delete( '/:id', function(req, res) {
    models.User.find({ where: { id: req.param('id') } }).then(function(entity) {
        if (entity) {
            entity.destroy().success(function() {
                res.send(204);
            })
        } else {
            res.send(404);
        }
    })
});

/////////////////// FROM DEMO ///////////////////////
router.delete('/:user_id/destroy', function(req, res) {
    models.User.find({
        where: {id: req.param('user_id')},
        include: [models.Task]
    }).then(function(user) {
        models.Task.destroy(
            {where: {UserId: user.id}}
        ).then(function(affectedRows) {
                user.destroy().then(function() {
                    res.redirect('/');
                });
            });
    });
});

router.post('/:user_id/tasks/create', function (req, res) {
    models.User.find({
        where: { id: req.param('user_id') }
    }).then(function(user) {
        models.Task.create({
            title: req.param('title')
        }).then(function(title) {
            title.setUser(user).then(function() {
                res.redirect('/');
            });
        });
    });
});

router.get('/:user_id/tasks/:task_id/destroy', function (req, res) {
    models.User.find({
        where: { id: req.param('user_id') }
    }).then(function(user) {
        models.Task.find({
            where: { id: req.param('task_id') }
        }).then(function(task) {
            task.setUser(null).then(function() {
                task.destroy().then(function() {
                    res.redirect('/');
                });
            });
        });
    });
});


module.exports = router;