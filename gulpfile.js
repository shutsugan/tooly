'use strict';

const gulp = require('gulp');
const minifyCss = require('gulp-csso');
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');

gulp.task('css', _ => {
	return gulp.src('src/**/*.css')
		.pipe(minifyCss())
		.pipe(gulp.dest('build'));
});

gulp.task('js', _ => {
	return gulp.src('src/**/*.js')
		.pipe(sourcemaps.init())
		//.pipe(babel({presets: ['env']}))
		.pipe(concat('min.js'))
		//.pipe(uglify())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('build/js'));
});

gulp.task('default', ['css', 'js']);