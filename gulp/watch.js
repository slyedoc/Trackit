'use strict';

var gulp = require('gulp');
var livereload = require('gulp-livereload');

module.exports = function(options) {
  gulp.task('watch', function () {

    gulp.watch([options.src + '/*.html', 'bower.json'], ['inject']);

    gulp.watch([
      options.src + '/**/*.css',
      options.src + '/**/*.js',
    ], ['inject'], function(event) {
        livereload()
    });

  });
};
