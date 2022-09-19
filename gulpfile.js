var gulp = require('gulp');
var replace = require('gulp-replace');
var fs = require('fs');

gulp.task('move-js', function () {    
    return gulp.src(['build/static/js/main.7361828e.js'])
        .pipe(gulp.dest('output'));
});

gulp.task('process-html', function () {    
    return gulp.src(['build/index.html'])
        .pipe(replace('<link href="/static/css/main.68b51311.css" rel="stylesheet">', '<style>'+fs.readFileSync('build/static/css/main.68b51311.css', 'utf8')+'</style>'))  
        .pipe(replace('<script defer="defer" src="/static/js/main.7361828e.js"></script>','<script defer="defer" src="main.7361828e.js"></script>'))
        .pipe(gulp.dest('output'));
});

gulp.task('default', gulp.series(['move-js','process-html']));