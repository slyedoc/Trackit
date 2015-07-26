'use strict';

var gulp = require('gulp');
var nodemon = require('gulp-nodemon');
var notify = require('gulp-notify');
var livereload = require('gulp-livereload');
var path = require('path');

gulp.task('serve', ['inject'], function () {

    livereload.listen();

    nodemon({
        script: 'app.js',
        ext: 'js html css',
        tasks: ['inject'],
        ignore: [
            '.git/*',
            '.idea/**',
            'node_modules/**',
            'bower_components/**'
        ]
        //env: { 'NODE_ENV': 'development' }
    })
    .on('start', ['watch'])
    .on('change', ['watch'])
    .on('restart', function () {
        gulp.src('app.js')
            .pipe(livereload())
            .pipe(notify('Reloading page, please wait...'));
    })
});