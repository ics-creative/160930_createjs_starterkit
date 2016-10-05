"use strict";

const gulp = require('gulp');
const runSequence = require('run-sequence');
// browser-syncのプラグインの読み込み
var browserSync = require("browser-sync");

gulp.task('browser-sync', function () {
  browserSync.reload();   // ファイルに変更があれば同期しているブラウザをリロード
});

gulp.task('watch', function () {

  browserSync({
    server: {
      baseDir: "dist"
    }
  });

  runSequence(
    'clean-js',
    [
      'webpack-typescript',
      'assets-animate-typings',
      'assets-animate-concat',
      'assets-animate-copy'
    ]
  );

  // JSの配置
  gulp.watch(
    [
      'assets/*.js',
      'src/**/*.ts'
    ],
    function () {
      runSequence(
        'clean-js',
        [
          'webpack-typescript',
          'assets-animate-typings',
          'assets-animate-concat',
          'assets-animate-copy'
        ],
        browserSync.reload
      );
    });
});