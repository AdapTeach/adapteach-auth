var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    nodemon = require('gulp-nodemon'),
    mocha = require('gulp-mocha-co'),
    env = require('gulp-env');

var pathToSrc = ['config/**/*.js', 'src/**/*.js', 'gulpfile.js'];
var pathToTest = 'test/**/*.spec.js';

gulp.task('default', ['dev', 'lint'], function () {
});

gulp.task('dev', function () {
    nodemon({script: 'index.js'})
        .on('change', ['lint']);
});

gulp.task('lint', function () {
    gulp.src(pathToSrc)
        .pipe(jshint({
            strict: false
        }))
        .pipe(jshint.reporter('jshint-stylish'));
});


gulp.task('set-env-test', function () {
    env({
        vars: {
            NODE_ENV: 'test'
        }
    });
});

gulp.task('test', ['set-env-test'], function () {
    gulp.src(pathToTest)
        .pipe(mocha({reporter: 'nyan'}))
        .on('error', function logMessage(error) {
            console.log(error.message);
        });
});

gulp.task('tdd', ['test'], function () {
    gulp.watch(pathToSrc, ['test']);
    gulp.watch(pathToTest, ['test']);
});