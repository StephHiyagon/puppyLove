var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync= require ('browser-sync').create();
var plumber= require('gulp-plumber');
var to5= require('gulp-6to5');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

var config = {
  source: './src/',
  public: './public/'
}

var paths = {
  assets: 'assets/',
  html: '*.html',
  mainSass: 'scss/*.scss',
  mainJs: 'js/**/*.js',
  img: 'images/**',
  font: 'font/**'

}

var sources = {
  assets: config.source + paths.assets,
  html: config.source + paths.html,
  sass: config.source + paths.assets + paths.mainSass,
  js: config.source + paths.assets + paths.mainJs,
  img: config.source + paths.assets + paths.img,
  fonts: config.source + paths.assets + paths.font
}

gulp.task('html', ()=>{
  gulp.src(sources.html)
      .pipe(gulp.dest(config.public));
});

gulp.task('watch-html',["html"],function(done){
  browserSync.reload();
  done();
})

gulp.task('sass', ()=>{
  gulp.src(sources.sass)
      .pipe(sass({outStyle: "compressed"}).on('error',sass.logError))
      .pipe(gulp.dest(config.public + paths.assets + "css"))
      .pipe(browserSync.stream());
});

gulp.task('img', ()=>{
  gulp.src(sources.img)
      .pipe(gulp.dest(config.public + paths.assets + "img"));
});

gulp.task('font', ()=>{
  gulp.src(sources.fonts)
  .pipe(gulp.dest(config.public + paths.assets + "fonts"))
})

gulp.task('watch-font',["font"],function(done){
  browserSync.reload();
  done();
})


gulp.task('watch-img',["img"],function(done){
  browserSync.reload();
  done();
})

gulp.task('js',()=>{
  gulp.src(sources.js)
      .pipe(plumber())
      .pipe(to5())
      .pipe(concat('app.js'))
      .pipe(uglify())
      .pipe(gulp.dest(config.public + paths.assets + "js"))
      .pipe(browserSync.stream());
})

gulp.task('serve', () =>{
  browserSync.init({server: {baseDir: config.public}});
  gulp.watch(sources.sass, ['sass']);
  gulp.watch(sources.html, ['watch-html']);
  gulp.watch(sources.img, ['watch-img']);
  gulp.watch(sources.img, ['watch-font']);
  gulp.watch(sources.js, ['js']);
})

gulp.task('default', ['serve']);
