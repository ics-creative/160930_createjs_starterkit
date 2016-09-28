const rimraf = require('rimraf');
const gulp = require('gulp');

gulp.task('clean-js', function (cb) {
  rimraf('./dist/js', cb);
});
