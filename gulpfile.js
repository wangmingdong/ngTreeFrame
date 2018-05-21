var gulp = require('gulp');
var eslint = require('gulp-eslint');

gulp.task('default', ['eslint'], function() {
    // 将你的默认的任务代码放在这
    
});
 
gulp.task('eslint',function(){

    return gulp.src(['js/ngTreeFrame.js']) //指定的校验路径

        .pipe(eslint({configFle:"./.eslintrc"})) //使用你的eslint校验文件

        .pipe(eslint.format());

});