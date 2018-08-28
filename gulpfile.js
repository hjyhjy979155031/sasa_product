var gulp = require("gulp");
var rename = require("gulp-rename");
var uglify = require("gulp-uglify");
var sass = require("gulp-sass");
var babel = require("gulp-babel");

gulp.task('js',()=>{
	gulp.src('./src/js/*.js').pipe(rename({
		suffix:'.min'
	}))
	.pipe(babel({
		presets:["env"]
	}))
	.pipe(uglify())
	.pipe(gulp.dest('dist/js'));
})

gulp.task('sass',()=>{
	gulp.src('./src/scss/**/*.scss').pipe(sass()).pipe(rename({
		suffix:'.min'
	})).pipe(gulp.dest('dist/css'));
})

gulp.task('default',()=>{
	gulp.watch('./src/js/*.js',['js']);
	gulp.watch('./src/scss/*.scss',['sass']);
})