const gulp = require('gulp');
const autoprefixer = require('autoprefixer');
var sass = require('gulp-sass');
var postcss = require('postcss');

gulp.task('sass', function () {
  return gulp.src('./sass/main.scss')
    .pipe(sass().on('error', sass.logError))

// INCLUDE AUTOPREFIXER HERE?

    .pipe(gulp.dest('./assets/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});
