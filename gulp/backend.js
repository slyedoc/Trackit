//TODO: fix this up for gary for easy testing
'use strict';

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var jshint = require('gulp-jshint');

module.exports = function(options) {

    gulp.task('backend:lint', function () {
        gulp.src('./backend/**/*.js')
            .pipe(jshint())
    });


    gulp.task('backend', function () {
        nodemon({
            script: 'backend/app.js',
            ext: 'js',
            tasks: ['backend:lint'],
            watch: 'backend',
            env: { 'NODE_ENV': 'development' }
        })
    })
};