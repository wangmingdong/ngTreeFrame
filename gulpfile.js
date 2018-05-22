var gulp = require('gulp');
var eslint = require('gulp-eslint');
var minifycss = require('gulp-minify-css');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');

gulp.task('default', ['eslint', 'sassToCss', 'minCss', 'jscompress'], function() {
    // 将你的默认的任务代码放在这
    
});
 
gulp.task('eslint',function(){

    return gulp.src(['js/ngTreeFrame.js']) //指定的校验路径

        .pipe(eslint({configFle:"./.eslintrc"})) //使用你的eslint校验文件

        .pipe(eslint.format());

});

gulp.task('minCss', function() {
    return gulp.src('style/*.css')
    //   .pipe(gulp.dest('/'))
      .pipe(rename({ suffix: '.min' }))
      .pipe(minifycss())
      .pipe(gulp.dest('dist/css'));
  });

  gulp.task('sassToCss', function(){
    return gulp.src('style/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('style/'))
    });

    gulp.task('watch',function(){
        gulp.watch('./style/*.scss',['sassToCss']);
    })

  gulp.task('jscompress', function() {
    // 1. 找到文件
   return gulp.src('js/ngTreeFrame.js')
    // 2. 压缩文件
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        // 3. 另存压缩后的文件
        .pipe(gulp.dest('dist/js'));
});