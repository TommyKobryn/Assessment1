/* File: gulpfile.js */

// grab our gulp packages
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var uglifycss = require('gulp-uglifycss');


gulp.task('css', function () {
  gulp.src('css/*.css')
    .pipe(uglifycss({
      "maxLineLen": 80,
      "uglyComments": true
    }))
    .pipe(gulp.dest('dist/'));
});
