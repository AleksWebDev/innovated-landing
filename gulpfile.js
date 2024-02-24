import gulp from 'gulp'
import {deleteAsync} from 'del'
import concat from 'gulp-concat'
import gulpWebp from 'gulp-webp'
import gcmq from 'gulp-group-css-media-queries'
import cleanCSS from 'gulp-clean-css'
import soursMap from 'gulp-sourcemaps'
import browserSyncModule from 'browser-sync'
import dartSass from 'sass'
import gulpSass from 'gulp-sass'
import fonter from 'gulp-fonter'
import ttf2woff2 from 'gulp-ttf2woff2'



const browserSync = browserSyncModule.create();
const sass = gulpSass(dartSass);
const scssFiles = [
    './node_modules/normalize.css/normalize.css',
    './src/scss/base/_fonts.scss',
    './src/scss/base/_reset.scss',
    './src/scss/main.scss',
    './src/scss/sections/_header.scss'
]
const jsFiles = [
    './src/js/main.js'
]

export const browserSyncInit = () =>{
    return browserSync.init({
        server: {
            baseDir: './dist/'
        }
    })
}

export const webp = () =>{
    return gulp.src('./src/img/**/*')
    .pipe(gulpWebp({
        quality: 100
    }))
    .pipe(gulp.dest('./dist/img'))
}

export const fonts = () => {
    return gulp.src('./src/fonts/**/*')
    .pipe(fonter({
        formats: ["woff", "eot", "svg"]
    }))
        .pipe(gulp.dest('./dist/fonts'))
        .pipe(ttf2woff2())
        .pipe(gulp.dest('./dist/fonts'))
        .pipe(browserSync.stream());
}

export const clear = () =>{
    return deleteAsync('./dist/*');
}

export const html = () =>{
    return gulp.src('./src/**/*.html')
        .pipe(gulp.dest('./dist'))
        .pipe(browserSync.stream());
}

export const js = () =>{
    return gulp.src(jsFiles)
        .pipe(concat('./js/main.js'))
        .pipe(gulp.dest('./dist'))
        .pipe(browserSync.stream());
}

export const stylus = () =>{
    return gulp.src(scssFiles)
    .pipe(soursMap.init())
    .pipe(sass.sync({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(concat('./css/style.css'))
    .pipe(gcmq())
    .pipe(cleanCSS())
    .pipe(soursMap.write('.'))
    .pipe(gulp.dest('./dist'))
    .pipe(browserSync.stream());
}

export const watch = () =>{
    gulp.watch('./src/scss/**/*.scss', stylus)
    gulp.watch('./src/**/*.html', html)
    gulp.watch('.src/**/*.js', js)
    gulp.watch('./src/fonts/**/*')
}

export const build = gulp.series(clear, gulp.parallel(
    html, stylus, webp, js, fonts
))

export const dev = gulp.series(build, gulp.parallel(browserSyncInit, watch))


