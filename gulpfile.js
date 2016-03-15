
var gulp = require('gulp'),
		gutil = require('gulp-util'),
		uglify = require('gulp-uglify'),
		minifyCss = require('gulp-minify-css'),
		minifyHtml = require('gulp-minify-html');

gulp.task('default', function(){
	console.log("Hello from Gulp.js");
});

		gulp.task('minify',function(){
			gulp.src('assets/js/*.js')
			.pipe(uglify())
			.pipe(gulp.dest('minified'))

			gulp.src('index.html')
			.pipe(minifyHtml())
			.pipe(gulp.dest('minified/'))

			gulp.src('assets/css/*.css')
			.pipe(minifyCss({keepBreaks:true}))
			.pipe(gulp.dest('minified/'))
		});

gulp.task('clean', function(cb){
	del(['minified/*'],cb);
})
