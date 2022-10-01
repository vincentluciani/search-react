var gulp = require('gulp');
var replace = require('gulp-replace');
var fs = require('fs');

gulp.task('move-js', function () {    
    return gulp.src(['build/static/js/main.c9f45922.js'])
        .pipe(gulp.dest('output'));
});

gulp.task('process-html', function () {    
    return gulp.src(['build/index.html'])
        .pipe(replace('<link href="/static/css/main.98030113.css" rel="stylesheet">', '<style>'+fs.readFileSync('build/static/css/main.98030113.css', 'utf8')+'</style>'))  
        .pipe(replace('<script defer="defer" src="/static/js/main.c9f45922.js"></script>','<script defer="defer" src="main.c9f45922.js"></script>'))
        .pipe(gulp.dest('output'));
});

gulp.task('default', gulp.series(['move-js','process-html']));