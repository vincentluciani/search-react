var gulp = require('gulp');
var replace = require('gulp-replace');
var fs = require('fs');
var concat = require('gulp-concat');
var rename = require("gulp-rename");

gulp.task('get-and-move-js', function () {    
    return gulp.src('build/static/js/main.*.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('output'));
});

gulp.task('copy-js', function () {    
    return gulp.src('output/main.js')
    .pipe(concat('main.js'))
    .pipe(gulp.dest('C:\\software\\vincent-luciani\\php\\output'));
});

gulp.task('get-and-move-css', function () {    
    return gulp.src('build/static/css/main.*.css')
    .pipe(concat('main.css'))
    .pipe(gulp.dest('output'));
});


// /<link href="/static/css/main\.fdda3242.css" rel="stylesheet">/g

gulp.task('process-html', function () {    
    return gulp.src(['build/index.html'])
        .pipe(replace(/<link href="\/static\/css\/main\.[0-9a-z]{8}\.css" rel="stylesheet">/g, '<style>'+fs.readFileSync('output/main.css', 'utf8')+'</style>'))  
        .pipe(replace(/<script defer="defer" src="\/static\/js\/main\.[0-9a-z]{8}\.js"><\/script>/g,'<script defer="defer" src="main.js"></script>'))
        .pipe(replace('font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;',''))
        .pipe(gulp.dest('output'));
});

gulp.task('prepare-html-fragment-for-cms', function () {
    return gulp.src(['output/index.html'])
    .pipe(replace('<!doctype html><html lang="en"><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/><meta name="theme-color" content="#000000"/><meta name="description" content="Web site created using create-react-app"/><title>React App</title>',''))
    .pipe(replace('</body></html>',''))
    .pipe(rename("searchreact.txt"))
    .pipe(gulp.dest('C:\\software\\vincent-luciani\\php\\templates'));

});

gulp.task('default', gulp.series(['get-and-move-js','copy-js','get-and-move-css','process-html','prepare-html-fragment-for-cms']));