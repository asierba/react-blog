const gulp = require('gulp');
const connect = require('gulp-connect');
const open = require('gulp-open');
const browserify = require('browserify');
const reactify = require('reactify');
const source = require('vinyl-source-stream');
const concat = require('gulp-concat');
const lint = require('gulp-eslint');
const gls = require('gulp-live-server');

const config = {
    port: 9005,
    devBaseUrl: 'http://localhost',
    paths: {
        html: './src/*.html',
        js: './src/**/*.js',
        css: [
            'node_modules/bootstrap/dist/css/bootstrap.min.css',
            'node_modules/bootstrap/dist/css/bootstrap-theme.min.css',
            'node_modules/toastr/build/toastr.css',
        ],
        dist: './dist',
        mainJs: './src/main.js'
    }
};

gulp.task('connect', function() {
    connect.server({
        root: ['dist'],
        port: config.port,
        base: config.devBaseUrl,
        livereload: true
    });
});


gulp.task('open', ['connect'], function() {
    gulp.src('dist/index.html')
        .pipe(open({ uri: config.devBaseUrl + ':' + config.port + '/'}));
});

gulp.task('html', function() {
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload());
});

gulp.task('js', function() {
    browserify(config.paths.mainJs)
        .transform(reactify)
        .bundle()
        .on('error', console.error.bind(console))
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(config.paths.dist + '/scripts'))
        .pipe(connect.reload());

});

gulp.task('css', () => {
   gulp.src(config.paths.css)
       .pipe(concat('bundle.css'))
       .pipe(gulp.dest(config.paths.dist + '/css'));
});

gulp.task('lint', () => {
    return gulp.src(config.paths.js)
        .pipe(lint({configFile: 'eslint.config.json'}))
        .pipe(lint.format());
});

gulp.task('watch', function() {
    gulp.watch(config.paths.html, ['html']);
    gulp.watch(config.paths.js, ['js']);
    gulp.watch(config.paths.js, ['lint']);
    gulp.watch(config.paths.css, ['css']);
});

gulp.task('express', function() {
    const server = gls.new('src/server.js');
    return server.start();
});

gulp.task('default', ['html', 'css', 'js', 'lint','open', 'watch']);