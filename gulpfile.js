var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');

/*
 * Variables
 */
// Sass Source
var scssFiles = './assets/sass/main.scss';

// Bootstrap Sass Source
var scssFilesBootstrap = './assets/libs/bootstrap/bootstrap.scss';

// Bootstrap Sass Destination
var cssBootstrapDest = './assets/libs/bootstrap/css/';


// CSS destination
var cssDest = './assets/css';

// Options for development
var sassDevOptions = {
  outputStyle: 'expanded'
}

// Options for production
var sassProdOptions = {
  outputStyle: 'compressed'
}

/*
 * Tasks
 */
// Task 'sassdev' - Run with command 'gulp sassdev'
gulp.task('sassdev', function() {
  return gulp.src(scssFiles)
    .pipe(sass(sassDevOptions).on('error', sass.logError))
    .pipe(gulp.dest(cssDest));
});

// Task 'sassprod' - Run with command 'gulp sassprod'
gulp.task('sassprod', function() {
  return gulp.src(scssFiles)
    .pipe(sass(sassProdOptions).on('error', sass.logError))
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest(cssDest));
});

// Task 'sassprod-bootstrap' - Run with command 'gulp sassprodbootstrap'
gulp.task('sassprodbootstrap', function() {
  return gulp.src(scssFilesBootstrap,  { allowEmpty: true })
    .pipe(sourcemaps.init())
    .pipe(sass(sassProdOptions).on('error', sass.logError))
    .pipe(rename('bootstrap.min.css'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(cssBootstrapDest));
});


// Default task - Run with command 'gulp'
gulp.task('default', gulp.series('sassdev', 'sassprod', 'sassprodbootstrap'));
