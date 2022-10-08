var gulp = require('gulp');
var replace = require('gulp-replace');
var fs = require('fs');

gulp.task('move-js', function () {    
    return gulp.src(['build/static/js/main.da6b2933.js'])
        .pipe(gulp.dest('output'));
});

gulp.task('process-html', function () {    
    return gulp.src(['build/index.html'])
        .pipe(replace('<link href="/static/css/main.9f303c6e.css" rel="stylesheet">', '<style>'+fs.readFileSync('build/static/css/main.9f303c6e.css', 'utf8')+'</style>'))  
        .pipe(replace('<script defer="defer" src="/static/js/main.da6b2933.js"></script>','<script defer="defer" src="main.da6b2933.js"></script>'))
        .pipe(gulp.dest('output'));
});

gulp.task('default', gulp.series(['move-js','process-html']));