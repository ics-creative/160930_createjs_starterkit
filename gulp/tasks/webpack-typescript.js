'use strict';

const gulp = require('gulp');
const webpack = require('gulp-webpack');
const webpackConfig = require('../config/webpack.config.js');
const plumber = require('gulp-plumber');

/**
 * TypeScriptへのビルド
 */
gulp.task('webpack-typescript', function () {
 return gulp.src(['./src/**/*.ts'])
    .pipe(plumber())
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('./dist/js'));
});