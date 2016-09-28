"use strict";

const gulp = require('gulp');
const fs = require('fs');
const concat = require("gulp-concat");

gulp.task('assets-animate-concat', function () {

  const files = fs.readdirSync('assets');
  const fileList = [];

  files.filter(function (file) {
    return /.*\.js/.test(file);
  }).forEach(function (file) {
    fileList.push("assets/" + file);
  });

  gulp.src(fileList)
    .pipe(concat("assets.js"))
    .pipe(gulp.dest("./dist/js"));
});