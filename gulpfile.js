const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const purgecss = require("gulp-purgecss");

function buildStyles() {
  return src("custom-library/**/*.scss")
    .pipe(sass())
    .pipe(dest("css"))
    .pipe(purgecss({ content: ["*.html"] }));
}

function watchTask() {
  watch(["custom-library/**/*.scss", "*.html"], buildStyles);
}

exports.default = series(buildStyles, watchTask);

// Pomocu PURGE CSS mi minimiziramo trenutni css
// Tj. da nemamo 4000 ili 5000 linija koda
// Pomocu update gulpfile.js mi koristimo i klase koje su napravljene ali se ne prikazuju u css-u
// Tek kada ih iskoristimo u nekom html-u to ime klase se pojavljuje
