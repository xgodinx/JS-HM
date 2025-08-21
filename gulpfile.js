import gulp from "gulp";
import browserSync from "browser-sync";
import dartSass from "sass";
import gulpSass from "gulp-sass";
import cleanCSS from "gulp-clean-css";
import fileInclude from "gulp-file-include";
import replace from "gulp-replace";
import del from "del";



const sass = gulpSass(dartSass);






// Paths
const paths = {
  html: {
    src: "src/*.html",
    watch: "src/**/*.html",
    dest: "dist/"
  },
  styles: {
    src: "src/scss/style.scss",
    watch: "src/scss/**/*.scss",
    dest: "dist/css"
  },
  scripts: {
    src: 'src/js/**/*.js',
    dest: 'dist/js'
  }
};

// Server
function serve() {
  browserSync.init({
    server: {
      baseDir: "./dist"
    },
    notify: false,
  });

}

// HTML
function html() {
  return gulp.src(paths.html.src)
    .pipe(fileInclude())
    .pipe(gulp.dest(paths.html.dest))
    .pipe(browserSync.stream());
}

// SCSS
function styles() {
  return gulp.src(paths.styles.src)
    .pipe(sass().on("error", sass.logError))
    .pipe(cleanCSS())
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browserSync.stream());
}

// JS
function scripts() {
  return gulp.src(paths.scripts.src)
    .pipe(gulp.dest(paths.scripts.dest));
}




// clean dist
function clean() {
  return del(["dist/**", "!dist/img", "!dist/img/**/*"]);
}

// Watcher
function watcher() {
  gulp.watch(paths.html.watch, html);
  gulp.watch(paths.styles.watch, styles);
  gulp.watch(paths.scripts.src, scripts);
}

// Tasks
export const build = gulp.series(clean, gulp.parallel(html, styles, scripts));
export const dev = gulp.series(build, gulp.parallel(watcher, serve));

export default dev;
