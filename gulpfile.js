var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    lint = require('gulp-scss-lint'),
    rename = require('gulp-rename');

// Paths
paths = {
  scss: 'scss/*.scss',
  dist: 'dist/'
};

gulp.task('sass', function () {
  return gulp.src(paths.scss)
        .pipe(sass({
          style: 'compressed'
        }))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(paths.dist));
});

gulp.task('lint', function () {
  return gulp.src(paths.scss)
        .pipe(lint({
          'config': 'scss-lint.yml',
        }))
        .pipe(lint());
});

gulp.task('watch', function () {
  gulp.watch(paths.scss, ['sass', 'lint']);
});
