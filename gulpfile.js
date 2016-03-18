
var gulp = require('gulp'),
		gutil = require('gulp-util'),
		uglify = require('gulp-uglify');
		
var del = require('del');
var minifyHTML = require('gulp-minify-html');
var minifyCSS  = require('gulp-minify-css');

gulp.task('default', function(){
	console.log("Hello from Gulp.js");
});

		gulp.task('minify',function(){
			gulp.src('assets/js/*.js')
			.pipe(uglify())
			.pipe(gulp.dest('minified'))

			gulp.src('index.html')
			.pipe(minifyHTML())
			.pipe(gulp.dest('minified/'))

			gulp.src('assets/css/*.css')
			.pipe(minifyCSS({keepBreaks:true}))
			.pipe(gulp.dest('minified/'))
		});

gulp.task('clean', function(cb){
	del(['minified/*'],cb);
});
