//Utilizando Watch
const gulp = require("gulp");
const rename = require("gulp-rename");
const minifyJS = require("gulp-uglify");
const minifyCSS = require("gulp-uglifycss");
const sass = require("gulp-sass");
const babel = require("gulp-babel");
const cssImport = require("gulp-cssimport");

gulp.task(
  "base",
  gulp.series(function() {
    return gulp.src("src/templates/*.html").pipe(gulp.dest("public/"));
  })
);

gulp.task(
  "javascript",
  gulp.series(function() {
    return gulp
      .src("src/js/*.js")
      .pipe(babel({ presets: ["@babel/env"] }))
      .pipe(minifyJS())
      .pipe(rename({ extname: ".min.js" }))
      .pipe(gulp.dest("public/assets/js/"));
  })
);

gulp.task(
  "css",
  gulp.series(function() {
    return gulp
      .src("src/css/*.css")
      .pipe(cssImport())
      .pipe(sass())
      .pipe(minifyCSS())
      .pipe(rename({ extname: ".min.css" }))
      .pipe(gulp.dest("public/assets/css/"));
  })
);

gulp.task(
  "watch",
  gulp.series(function() {
    gulp.watch("src/templates/*.html", gulp.parallel(["base"]));
    gulp.watch("src/js/*.js", gulp.parallel(["javascript"]));
    gulp.watch("src/css/*.css", gulp.parallel(["css"]));
  })
);

gulp.task(
  "default",
  gulp.series(gulp.parallel("base", "javascript", "css", "watch"))
);
