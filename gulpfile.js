var gulp = require('gulp');
var replace = require('gulp-replace');
var fs = require('fs');

gulp.task('move-js', function () {    
    return gulp.src(['build/static/js/main.b9c9aa11.js'])
        .pipe(gulp.dest('output'));
});

gulp.task('process-html', function () {    
    return gulp.src(['build/index.html'])
        .pipe(replace('<link href="/static/css/main.fdda3242.css" rel="stylesheet">', '<style>'+fs.readFileSync('build/static/css/main.fdda3242.css', 'utf8')+'</style>'))  
        .pipe(replace('<script defer="defer" src="/static/js/main.b9c9aa11.js"></script>','<script defer="defer" src="main.b9c9aa11.js"></script>'))
        .pipe(replace('font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;',''))
        .pipe(gulp.dest('output'));
});

gulp.task('default', gulp.series(['move-js','process-html']));