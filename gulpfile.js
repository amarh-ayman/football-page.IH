const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const cssnano = require("cssnano");
const terser = require("gulp-terser");
const browsersync = require("browser-sync").create();

function scssTask() {
  return src("scss/**/*.scss", { sourcemaps: true })
    .pipe(sass())
    .pipe(postcss([cssnano()]))
    .pipe(dest("dist/css/", { sourcemaps: "." }));
}

function jsTask() {
  return src("app/**/*.js", { sourcemaps: true })
    .pipe(terser())
    .pipe(dest("dist/js/", { sourcemaps: "." }));
}

function browsersyncServe(cb) {
  browsersync.init({
    server: {
      baseDir: ".",
    },
  });
  cb();
}

function browersyncReload(cb) {
  browsersync.reload();
  cb();
}

function watchTask() {
  watch("*.html", browersyncReload);
  watch(
    ["scss/**/*.scss", "app/**/*.js"],
    series(scssTask, jsTask, browersyncReload)
  );
}

exports.default = series(scssTask, jsTask, browsersyncServe, watchTask);

