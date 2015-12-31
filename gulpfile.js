/**
 * Created by ollyking on 30/12/2015.
 */
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('css', function(){
    gulp.src('css/**/*.css')
        .pipe(concat('style.css'))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist'));
});

gulp.task('watch-css', function(){
    gulp.watch('css/**/*.css', ['css'])
});
