const fs = require('fs');
const {promisify} = require('util');
const gulp = require('gulp');
const del = require('del');
const mkdirp = require('mkdirp');
const replace = require('gulp-replace');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const stylus = require('gulp-stylus');
const clean = require('gulp-clean-css');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const {compiler, toCDN} = require('reveal-markdown-compiler');
const PATH_REG = /\.\/node_modules\/([\w.\-]+)\//g;
const DOC = 'docs/';
const mkdir = promisify(mkdirp);

gulp.task('clear', () => {
  return del(`${DOC}*`);
});

gulp.task('mkdir', () => {
  return mkdir(`${DOC}`);
});

gulp.task('js', () => {
  return gulp.src('app/main.js')
    .pipe(webpackStream(require('./webpack.config.prod'), webpack))
    .pipe(replace(PATH_REG, toCDN))
    .pipe(uglify())
    .pipe(gulp.dest(`${DOC}js/`));
});

gulp.task('stylus', () => {
  const styl = 'styl/screen.styl';
  if (!fs.existsSync(styl)) {
    return Promise.resolve(false);
  }
  return gulp.src(styl)
    .pipe(stylus({
      'include css': true
    }))
    .pipe(clean({
      level: 2
    }))
    .pipe(gulp.dest(`${DOC}css/`));
});

gulp.task('copy', () => {
  return gulp.src('img/**')
    .pipe(gulp.dest(`${DOC}img/`));
});

gulp.task('html', () => {
  return compiler('index.dev.html', 'content.md', `${DOC}index.html`);
});

gulp.task('default', gulp.series(
  'clear',
  'mkdir',
  gulp.parallel('html', 'stylus', 'js', 'copy', done => done()),
  done => done(),
));
