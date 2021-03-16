const gulp = require("gulp");
const browserSync = require("browser-sync").create();
const sass = require("gulp-sass");

// Compile SASS
// gulp.task("sass", function () {
//   return gulp
//     .src(["node_modules/bootstrap/scss/bootstrap.scss", "src/scss/*.scss"])
//     .pipe(sass())
//     .pipe(gulp.dest("src/css"))
//     .pipe(browserSync.stream());
// });
function sass1() {
  return gulp
    .src(["node_modules/bootstrap/scss/bootstrap.scss", "src/scss/*.scss"])
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("src/css"))
    .pipe(browserSync.stream());
}

// Move JS Files to SRC
// gulp.task("js", function () {
//   return gulp
//     .src([
//       "node_modules/bootstrap/dist/js/bootstrap.min.js",
//       "node_modules/jquery/dist/jquery.min.js",
//       "node_modules/tether/dist/js/tether.min.js",
//     ])
//     .pipe(gulp.dest("src/js"))
//     .pipe(browserSync.stream());
// });
function js() {
  return gulp
    .src([
      "node_modules/bootstrap/dist/js/bootstrap.min.js",
      "node_modules/jquery/dist/jquery.min.js",
      "node_modules/tether/dist/js/tether.min.js",
    ])
    .pipe(gulp.dest("src/js"))
    .pipe(browserSync.stream());
}

// Watch SASS & Serve
// gulp.task("serve", ["sass"], function () {
//   browserSync.init({
//     server: "./src",
//   });

//   gulp.watch(
//     ["node_modules/bootstrap/scss/bootstrap.scss", "src/scss/*.scss"],
//     ["sass"]
//   );
//   gulp.watch("src/*.html").on("change", browserSync.reload);
// });
function serve() {
  browserSync.init({
    server: {
      baseDir: "./src",
      index: "/index.html",
    },
  });
  gulp.watch(
    ["node_modules/bootstrap/scss/bootstrap.scss", "src/scss/*.scss"],
    sass1
  );
  gulp.watch("src/*.html").on("change", browserSync.reload);
}

// function watchFiles() {
//   gulp
//     .watch(
//       ["node_modules/bootstrap/scss/bootstrap.scss", "src/scss/*.scss"],
//       ["sass"]
//     )
//     .on("change", browserSync.reload);
//   gulp.watch("src/*.html").on("change", browserSync.reload);
// }

// const watching = gulp.parallel(serve, watchFiles);

// Move Font Awesome Fonts folder to src
// gulp.task("fonts", function () {
//   return gulp
//     .src("node_modules/font-awesome/fonts/*")
//     .pipe(gulp.dest("src/fonts"));
// });
function fonts() {
  return gulp
    .src("node_modules/font-awesome/fonts/*")
    .pipe(gulp.dest("src/fonts"));
}

// Move font awesome css file
// gulp.task("fa", function () {
//   return gulp
//     .src("node_modules/font-awesome/css/font-awesome.min.css")
//     .pipe(gulp.dest("src/css"));
// });
function fa() {
  return gulp
    .src("node_modules/font-awesome/css/font-awesome.min.css")
    .pipe(gulp.dest("src/css"));
}

exports.default = gulp.series(sass1, js, serve, fonts, fa);
exports.watch = serve;
