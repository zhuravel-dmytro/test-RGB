
'use strict'

var gulp = require('gulp'),
    less = require('gulp-less'),
	browserSync = require('browser-sync');


	gulp.task('less', function( ){
	 	return gulp.src('app/less/**/*.less')
			.pipe(less())
			.pipe(gulp.dest('app/css'))
			.pipe(browserSync.reload({stream:true}));
	});
	 
	
	gulp.task('browser-sync', function(){
		  browserSync({
			  server:{
				  baseDir: 'app/'
				  },
				  notify:false
		  });
	});
	gulp.task('html', function(){
		return gulp.src('app/*.html')
		.pipe(browserSync.reload({stream:true})); 
	});
	gulp.task('watch', function(){
		gulp.watch('app/less/**/*.less', gulp.parallel('less'));
		gulp.watch('app/*.html', gulp.parallel('html'))
	});

	gulp.task('default', gulp.parallel('browser-sync', 'watch'));