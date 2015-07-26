'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');

gulp.task('jshint', function () {
    gulp.src(['app.js', './routes/**/*.js', './models/**/*.js', '/src/**/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});