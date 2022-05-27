const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const purgeCss = require('gulp-purgecss');

function compileSassFile() {
  return src('../style/*.scss')
    .pipe(sass())
    .pipe(purgeCss({ content: ['../*.html'] }))
    .pipe(dest('../style/css'));
}

function watchSassFile() {
  return watch(['../style/**/*.scss'], compileSassFile);
}

exports.default = series(compileSassFile, watchSassFile);
