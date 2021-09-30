const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const watch = require('gulp-watch');
const sass = require('gulp-sass')(require('sass'));



gulp.task('sass-compile', function (){
    return gulp.src('./scss/**/*.scss')
        .pipe(gulp.dest('./css/')) 
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write('./'))
        .pipe(sass().on('error', sass.logError))      
})

gulp.task('watch', function (){
    gulp.watch('./scss/**/*.scss', gulp.series('sass-compile'))
})


