var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    plumber = require('gulp-plumber'),
    uglify = require('gulp-uglify'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    ngAnnotate = require('gulp-ng-annotate'),
    sass = require('gulp-sass'),
    watch = require('gulp-watch'),
    karma = require('karma').Server,
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    express = require('express');


gulp.task('express', function() {
  // require('./bin/www');
  var app = require('./app');
  app.listen(4000);
  console.log("Finished starting server...");
});

gulp.task('js', function() {
  gulp.src(['./bower_components/jquery/dist/jquery.js',
    './bower_components/bootstrap/dist/js/bootstrap.js',
    './bower_components/angular/angular.js',
    './bower_components/angular-ui-router/release/angular-ui-router.js',
    './bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
    './bower_components/lodash/lodash.js'])
    .pipe(sourcemaps.init())
    .pipe(concat('deps.min.js'))
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./public/js'));

  gulp.src('app_client/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('app.min.js'))
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./public/js'))
    .pipe(reload({stream: true}));

});

gulp.task('css-deps', function() {
  gulp.src([
        "./bower_components/bootstrap/dist/css/bootstrap.min.css",
        "./bower_components/font-awesome/css/font-awesome.min.css"
    ])
    .pipe(concat('css-deps.css'))
    .pipe(gulp.dest('./public/css'));

  gulp.src("./bower_components/bootstrap/dist/css/bootstrap.min.css.map")
    .pipe(gulp.dest('./public/css'));

  gulp.src('./bower_components/font-awesome/fonts/*')
    .pipe(gulp.dest('./public/fonts'));
});

gulp.task('css', function() {
  gulp.src(['./app_client/sass/style.sass', './app_client/sass/**/!*.sass'])
    .pipe(plumber())
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./public/css'))
    .pipe(reload({stream: true}));
});

gulp.task('html', function() {
  gulp.src('./app_client/**/*.html')
    .pipe(gulp.dest('./public/js/views'))
    .pipe(reload({stream: true}));

  gulp.src('./public/index.html')
    .pipe(reload({stream: true}));

});

gulp.task('test', function(done) {
  new karma({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

gulp.task('browser-sync', function() {
  browserSync({
    proxy: 'http://localhost:4000',
    open: false
  });
});

gulp.task('watch', function() {
  gulp.watch('./app_client/**/*.js', ['js']);
  gulp.watch('./app_client/sass/**/*.sass', ['css']);
  gulp.watch(['./app_client/**/*.html', './public/index.html'], ['html']);
});

gulp.task('default', ['express', 'js', 'css-deps', 'css', 'html', 'browser-sync', 'watch']);
