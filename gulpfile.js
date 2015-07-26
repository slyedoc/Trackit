'use strict';

var gulp = require('gulp');

require('require-dir')('./gulp');

var _ = require('lodash');


var options = {
  src: 'src',
  dist: 'dist',
  tmp: '.tmp',
  e2e: 'e2e',
  errorHandler: function(title) {
    return function(err) {
      //gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
      this.emit('end');
    };
  }
};

gulp.task('default', ['clean'], function () {
    gulp.start('build');
});
