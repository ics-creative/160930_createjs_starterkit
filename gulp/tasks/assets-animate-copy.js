const rimraf = require('rimraf');
const gulp = require('gulp');

gulp.task('assets-animate-copy', function (cb) {
  return gulp.src('assets/images/*.*')
    .pipe( gulp.dest('dist/images') );
});
