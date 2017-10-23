let gulp = require('gulp')
let stylus = require('gulp-stylus')
let browserify = require('browserify')
let  watchify = require('watchify')
let  source = require('vinyl-source-stream')
let watching = false

let path = {
    js:'Dev/components/index.js'
}


//js
gulp.task('enable-watch-mode', () =>   watching = true )
gulp.task('browserify', watchify((watchify) => {
    return gulp.src(path.js)
        .pipe(watchify({
            watch:watching
        }))
        .pipe(gulp.dest('Client/scripts/'))
}))

gulp.task('watchify', ['enable-watch-mode', 'browserify'])





//stylus
gulp.task('stylus',() => {
    return gulp.src('Dev/styles/*.styl')
        .pipe(stylus())
        .pipe(gulp.dest('Client/css/'))
})


gulp.task('watch',['watchify'],() => {
    gulp.watch('Dev/styles/*.styl',['stylus'])
    gulp.watch('Client/scripts/*.js',['js'])
})







gulp.task('default',['watch','js'])

