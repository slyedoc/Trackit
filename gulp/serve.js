//TODO: fix this up for gary for easy testing
'use strict';

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var notify = require('gulp-notify');
var livereload = require('gulp-livereload');

module.exports = function(options) {

    gulp.task('serve', ['inject'], function () {

        livereload.listen();

        nodemon({
            script: 'app.js',
            ext: 'js'
            //tasks: ['inject'],
            //watch: 'src',
            //env: { 'NODE_ENV': 'development' }
        })
        .on('restart', function () {
            gulp.src('app.js')
                .pipe(livereload())
                .pipe(notify('Reloading page, please wait...'));
        })
    })
};