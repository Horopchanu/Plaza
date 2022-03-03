const { src, dest, watch, parallel } = require("gulp");
const sourcemaps = require("gulp-sourcemaps");
const gulpSass = require("gulp-sass");
const gcmq = require("gulp-group-css-media-queries");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const browserSync = require("browser-sync").create();
const del = require("del");
const babel = require("gulp-babel");

const path = {
  dist: {
    html: "dist/",
    css: "dist/css/",
    js: "dist/js/",
    image: "dist/images/",
    fonts: "dist/fonts/",
  },
  src: {
    html: "src/**/*.html",
    js: "src/js/**/*.js",
    image: "src/images/**/*.{jpg,jpeg,png,svg,gif,ico,webp}",
    scss: "src/scss/**/*.scss",
    fonts: "src/fonts/**/*.*",
    css: "src/css/**/*.css",
  },
  watch: {
    html: "src/**/*.html",
    js: "src/js/**/*.js",
    image: "src/images/**/*.{jpg,jpeg,png,svg,gif,ico,webp}",
    scss: "src/scss/**/*.scss",
    fonts: "src/fonts/**/*.*",
    css: "src/css/**/*.css",
  },
  clean: "dist/*",
};

function htmlDev() {
  return src(path.src.html)
    .pipe(dest(path.dist.html))
    .pipe(browserSync.stream());
}

function styleDev() {
  return src(path.src.scss)
    .pipe(sourcemaps.init())
    .pipe(gulpSass({ outputStyle: "expanded" }))
    .pipe(postcss([autoprefixer()]))
    .pipe(gcmq())
    .pipe(sourcemaps.write("."))
    .pipe(dest(path.dist.css))
    .pipe(browserSync.stream());
}

function jsDev() {
  return src([
    path.src.js,
    // "node_modules/jquery/dist/jquery.min.js",
    // "node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.js",
    // "node_modules/choices.js/public/assets/scripts/choices.min.js",
    // "node_modules/nouislider/dist/nouislider.min.js",
    "node_modules/swiper/swiper-bundle.min.js",
    "node_modules/imask/dist/imask.min.js",
    // "node_modules/overlayscrollbars/js/OverlayScrollbars.min.js",
    "!src/js/bodyScrollLock.min.js",
    "!src/js/smooth-scrollbar.js",
    "!src/js//gsap.min.js",
    "!src/js/ScrollTrigger.min.js",
  ])
    .pipe(
      babel({
        presets: ["@babel/preset-env"],
      })
    )
    .pipe(dest(path.dist.js))
    .pipe(browserSync.stream());
}

function jsNoBabelDev() {
  return src([
    "src/js/bodyScrollLock.min.js",
    "src/js/smooth-scrollbar.js",
    "src/js//gsap.min.js",
    "src/js/ScrollTrigger.min.js",
    "src/js/vue.min.js",
  ])
    .pipe(dest(path.dist.js))
    .pipe(browserSync.stream());
}

function imageDev() {
  return src(path.src.image)
    .pipe(dest(path.dist.image))
    .pipe(browserSync.stream());
}

function fontsDev() {
  return src(path.src.fonts)
    .pipe(dest(path.dist.fonts))
    .pipe(browserSync.stream());
}

function cssDev() {
  return src([
    path.src.css,
    // "node_modules/choices.js/public/assets/styles/choices.min.css",
    // "node_modules/nouislider/dist/nouislider.min.css",
    // "node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.css",
    "node_modules/swiper/swiper-bundle.min.css",
    // "node_modules/overlayscrollbars/css/OverlayScrollbars.min.css",
  ])
    .pipe(dest(path.dist.css))
    .pipe(browserSync.stream());
}

function clean() {
  return del(path.clean);
}

function watchDev() {
  browserSync.init({
    server: {
      baseDir: "./dist/",
    },
  });
  watch(path.watch.html, htmlDev);
  watch(path.watch.scss, styleDev);
  watch(path.watch.js, jsDev);
  watch(path.watch.js, jsNoBabelDev);
  watch(path.watch.image, imageDev);
  watch(path.watch.js, fontsDev);
  watch(path.watch.css, cssDev);
  watch(path.watch.html).on("change", browserSync.reload);
  watch(path.watch.scss).on("change", browserSync.reload);
  watch(path.watch.js).on("change", browserSync.reload);
}

exports.buildDev = parallel(
  htmlDev,
  styleDev,
  jsDev,
  jsNoBabelDev,
  imageDev,
  fontsDev,
  cssDev
);
exports.watchDev = watchDev;
exports.clean = clean;

exports.default = parallel(
  htmlDev,
  styleDev,
  jsDev,
  jsNoBabelDev,
  imageDev,
  fontsDev,
  cssDev,
  watchDev
);
