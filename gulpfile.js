var gulp = require("gulp"),
mainBowerFiles = require("main-bower-files"),
webserver = require("gulp-webserver"),
inject = require("gulp-inject");


//gulp task to inject scripts  / style path references 
//NOTE: for mainBowerFiles() to work make sure all bower components are saved as
//dependencies in bower.json
//ISRI = inject script references to index.html
gulp.task("isri", function () {
  gulp.src('./app/index.html')
  .pipe(inject(gulp.src(mainBowerFiles(), {read: false}), {name:"bower",relative: true}))
  .pipe(gulp.dest('./app'));
});

//server configuration
//WS = webserver
gulp.task('ws', function() {
  gulp.src('./app')
    .pipe(webserver({
      host:process.env.IP,
      port:process.env.PORT,
      directoryListing: true,
      fallback: 'index.html'
    }));
});