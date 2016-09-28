'use strict';

const gulp = require('gulp');
const fs = require('fs');
const mkdirp = require('mkdirp');
const typingsPath = 'typings/assets-animate/';

gulp.task('clean-typings', function (cb) {
  const rimraf = require('rimraf');
  rimraf(typingsPath, function () {
    cb();
  });
});

gulp.task('assets-animate-typings', ['clean-typings'], function () {

  const files = fs.readdirSync('assets');
  const referenceList = [];
  const fileList = [];
  const execSync = require('child_process').execSync;
  mkdirp(typingsPath, function (err) {
    if (err) {
      console.error(err);
    } else {

      files.filter(function (file) {
        return /.*\.js/.test(file);
      }).forEach(function (file) {
        console.log(file);
        const dtsFile = file.replace('.js', '.d.ts');
        const assetPath = 'assets/' + file;
        const typingsFilePath = typingsPath + dtsFile;

        referenceList.push('/// <reference path="' + dtsFile + '" />');

        execSync('./node_modules/.bin/createjs-def typescript "' + assetPath + '" > "' + typingsFilePath + '"');
        fileList.push(file);
      });

      fs.writeFileSync(typingsPath + 'index.d.ts', referenceList.join('\n'));
    }
  });

});