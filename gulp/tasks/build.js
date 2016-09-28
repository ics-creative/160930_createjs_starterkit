'use strict';

const gulp = require('gulp');

gulp.task('build-assets', ['assets-animate-typings', 'assets-animate-concat']);
gulp.task('build-typescript', ['webpack-typescript']);

gulp.task('build', ['build-assets', 'build-typescript', 'assets-animate-copy']);
