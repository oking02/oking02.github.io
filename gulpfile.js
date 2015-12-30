/**
 * Created by ollyking on 30/12/2015.
 */
var gulp = require('gulp'),
    concat = require('gulp-concat');

gulp.task('css', function(){
    gulp.src('css/**/*.css')
        .pipe(concat('style.css'))
        .pipe(gulp.dest('dist'));
});
