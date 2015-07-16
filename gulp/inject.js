'use strict';

var gulp = require('gulp');
var mainBowerFiles = require('main-bower-files');
var angularFilesort = require('gulp-angular-filesort');
var inject = require('gulp-inject');
var es = require('event-stream');

module.exports = function(options) {
  gulp.task('inject', [], function () {

    //get css files
    var cssFiles = gulp.src(['src/**/*.css']);

    //get js files, be sure to sort for angular
    var jsFiles =   //include all the js files, ignore test files and all of bwip, then merge only the bwip files we need
        gulp.src([
          'src/**/*.js',
          '!src/**/*test.js'])
          .pipe(angularFilesort());


    //upload files into index.html page and copy to .tmp/serve
    gulp.src('src/index.html')
        .pipe(inject(gulp.src(mainBowerFiles(), {read: true}), {
          name: 'bower',
          addRootSlash: false,
          relative: true
        }))
        .pipe(inject(es.merge(
            cssFiles,
            jsFiles), {
          addRootSlash: false,
          relative: true
        }))
        .pipe(gulp.dest('.tmp/serve'));

  });

};
