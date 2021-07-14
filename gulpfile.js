"use strict";
const gulp = require("gulp"),
	plumber = require("gulp-plumber"),
	terser = require("gulp-terser"),
	rename = require("gulp-rename"),
	concat = require("gulp-concat"),
	fs = require("fs"),

	srcFolder = "src",
	src = `./${srcFolder}/*.js`,
	distFolder = "dist",

	buildMin = function () {
		return gulp.src(src)
			.pipe(concat("bcal.min.js"))
			.pipe(terser({ warnings: "verbose" })) // minify
			.pipe(gulp.dest(distFolder))
	},

	buildUser = function () {
		return gulp.src(src)
			.pipe(concat("bcal.user.js"))
			.pipe(terser({ warnings: "verbose", output: { comments: /==\/?UserScript==|@[a-zA-Z]* */ } })) // minify
			.pipe(gulp.dest(distFolder))
	},

	buildJs = function () {
		return gulp.src(src)
			.pipe(concat("bcal.js"))
			.pipe(gulp.dest(distFolder))
	}



gulp.task("build-js", buildJs);
gulp.task("build-min", buildMin);
gulp.task("build-user", buildUser);

gulp.task("build", gulp.series("build-user", "build-min", "build-js"));