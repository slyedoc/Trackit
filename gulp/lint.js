//TODO: fix this up for gary for easy testing
'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');

module.exports = function(options) {

    gulp.task('lint', function () {
        gulp.src(['app.js', './routes/**/*.js', './models/**/*.js'])
            .pipe(jshint())
    });
}