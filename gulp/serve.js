//TODO: fix this up for gary for easy testing
'use strict';

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var notify = require('gulp-notify');
var livereload = require('gulp-livereload');
var path = require('path');

module.exports = function(options) {

    gulp.task('serve', ['inject'], function () {

        livereload.listen();

        nodemon({
            script: 'app.js',
            ext: 'js html css',
            tasks: function (changedFiles) {
                var tasks = [];
                changedFiles.forEach(function (file) {
                    if (path.extname(file) === '.js' && !~tasks.indexOf('inject')) tasks.push('inject');
                    if (path.extname(file) === '.css' && !~tasks.indexOf('inject')) tasks.push('inject');
                });
                return tasks;
            },
            ignore: [
                '.git/*',
                '.idea/**',
                'node_modules/**',
                'bower_components/**'
            ]
            //env: { 'NODE_ENV': 'development' }
        })
        .on('restart', function () {
            gulp.src('app.js')
                .pipe(livereload())
                .pipe(notify('Reloading page, please wait...'));
        })
    })
};