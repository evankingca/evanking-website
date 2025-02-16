// REQUIRES
const gulp = require("gulp");
const fileinclude = require("gulp-file-include");
const sass = require("gulp-sass")(require("sass"));
const cleanCSS = require("gulp-clean-css");
const del = require("del");

// INCLUDE FILES
const includeFilesSrcPath = ["index.html", "pages/*.html"];
const includeFilesWatchPath = ["index.html", "pages/*.html", "templates/*.html"];
function includeFiles() {
return gulp
    .src(includeFilesSrcPath, { base: "" })
    .pipe(
    fileinclude({
        prefix: "@@",
        basepath: "@file",
    })
    )
    .pipe(gulp.dest("dist/"));
}

// COMPILE AND MINIFY SASS
const buildStylesSrcPath = ["css/style.scss", "css/fonts.scss"];
const stylesWatchPath = ["css/*.scss"];
function buildStyles() {
  return gulp.src(buildStylesSrcPath, { base: "./" }).pipe(sass().on("error", sass.logError)).pipe(cleanCSS()).pipe(gulp.dest("./dist"));
}

// MOVE FILES IN ROOT DIR TO DIST
const moveFilesSrcPath = [
    // "img/*",
    "js/*"
];
function moveFiles() {
  return gulp.src(moveFilesSrcPath, { base: "." }).pipe(gulp.dest("dist"));
}

// FONTS REQUIRE ENCODING DISABLED TO WORK:
const moveFontsSrcPath = [
    "fonts/*.css",
    "fonts/*.woff2",
];
function moveFonts() {
  return gulp.src(moveFontsSrcPath, { base: ".", encoding: false }).pipe(gulp.dest("dist"));
}

// IT'S WATCHING YOU
function watchTasks() {
    gulp.watch(includeFilesWatchPath, includeFiles);
    gulp.watch(stylesWatchPath, buildStyles);
    gulp.watch(moveFilesSrcPath, moveFiles);
    gulp.watch(moveFontsSrcPath, moveFonts);
}

// EXPORT FOR WATCHING
exports.default = gulp.series(includeFiles, buildStyles, moveFiles, moveFonts, watchTasks);

exports.bld = gulp.series(includeFiles, buildStyles, moveFiles, moveFonts);