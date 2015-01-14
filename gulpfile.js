var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    nodemon = require('gulp-nodemon');

var pathToSrc = ['config/**/*.js', 'src/**/*.js', 'gulpfile.js'];

gulp.task('default', ['dev','lint'], function () {
});

gulp.task('dev', function () {
    nodemon({ script: 'index.js' })
        .on('change', ['lint']);
});

gulp.task('lint', function () {
    gulp.src(pathToSrc)
        .pipe(jshint({
            strict:false
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

gulp.task('test',['set-env-test'] ,function () {
    gulp.src('./tests/*.spec.js')
        .pipe(mocha({reporter: 'nyan'}));
});