var GULP = require('gulp')
,LESS = require('gulp-less')
,CONCAT = require('gulp-concat')
,UGLIFY = require('gulp-uglify')
,BROWSERSYNC = require('browser-sync')
,HANDLEBARS      = require('gulp-handlebars')
,WRAP    = require('gulp-wrap')
,DECLARE    = require('gulp-declare')
,RENAME = require('gulp-rename')
,CLEANCSS = require('gulp-clean-css')
,DEL = require('del')
;

var paths = {
  styles: {
    src: 'src-css/**/*.less'
    ,staging:"staging/"
    ,dest: 'css/'
  },
  scripts: {
    src: 'src-scripts/**/*.js',
    dest: 'scripts/'
  }
};

/* 
------------------------ TASKS
Not all tasks need to use streams, a gulpfile is just another node program
 * and you can use all packages available on npm, but it must return either a
 * Promise, a Stream or take a callback and call it
 */

 var browsersync =()=>{
  BROWSERSYNC({
    server: {
      baseDir: '_site'
    }
  });
};

var clean = ()=>{
  // You can use multiple globbing patterns as you would with `gulp.src`,
  // for example if you are using del 2.0 or above, return its promise
  return DEL([ 
    'css/app.min.css'
    ,'staging'
    ]);
}

/* ------------------------- STYLE ------------- */
var styles = ()=>{
  // we wanna grab up some specific vendor css, cat em,
  return GULP.src(
    [
    'src-css/lib/bootstrap-3.3.5-dist/css/bootstrap.css'
    ,'src-css/lib/leaflet/leaflet.css' 
    ,'src-css/app.less'
    ]
    )//src
  .pipe(LESS())
  .pipe(CLEANCSS())
    // pass in options to the stream
    .pipe(RENAME({
      basename: 'app',
      suffix: '.min'
    }))
    .pipe(GULP.dest(paths.styles.dest));
  }

  var copystyle = ()=> {
    // we gotta send main.scss to css so jekyll can pick it up as-is
    return GULP.src('./src-css/*.scss')
    .pipe(GULP.dest(paths.styles.dest))
  };
  

  var handlez = ()=>{
    return GULP.src('templates/*.handlebars')
    .pipe(HANDLEBARS())
    .pipe(WRAP('Handlebars.template(<%= contents %>)'))
    .pipe(DECLARE({
      namespace: 'CVJEK.templates',
      noRedeclare: true, // Avoid duplicate declarations
    }))
    .pipe(CONCAT('H-templates-compiled.js'))
    .pipe(GULP.dest('staging/'));
  }


  function scriptsog() {
    return GULP.src(paths.scripts.src, { sourcemaps: true })
    // .pipe(babel())
    .pipe(uglify())
    .pipe(concat('main.min.js'))
    .pipe(GULP.dest(paths.scripts.dest));
  }


  var scripts = ()=>{
    return GULP.src([
      'src-scripts/components/jquery/jquery.js'
      ,'src-scripts/components/handlebars/handlebars.runtime.js'
      ,'src-scripts/lib/underscore-min.js'
      ,'src-scripts/lib/backbone-min.js'
      ,'src-scripts/lib/bootstrap-3.3.5-dist/js/bootstrap.js'
      ,'src-scripts/lib/leaflet.js'
      ,'src-scripts/lib/less-1.7.5.min.js'
      ,'src-scripts/lib/masonry.pkgd.min.js'
      ,'src-scripts/H-templates-compiled.js'
      ,'src-scripts/rrssb.min.js'
      ,'src-scripts/Masonry.js'
      ,'src-scripts/Models.js'
      ,'src-scripts/Collections.js'
      ,'src-scripts/Views.js'
      ])
    .pipe(PLUMBER())
    .pipe(UGLIFY())
    .pipe(CONCAT('app.min.js'))
    .pipe(GULP.dest(paths.scripts.dest))
  }

  var copyjs=  ()=>{
    gulp.src([
      'src-scripts/App.js'
      ,'src-scripts/Routes.js'
      ])
    .pipe(gulp.dest(paths.scripts.dest));
  };

  function watch() {
    GULP.watch(paths.scripts.src, scripts);
    GULP.watch(paths.styles.src, styles);
  }

/*
 * You can use CommonJS `exports` module notation to declare tasks
 */
 exports.clean = clean;
 exports.styles = styles;
 exports.scripts = scripts;
 exports.watch = watch;

/*
 * Specify if tasks run in series or parallel using `GULP.series` and `GULP.parallel`
 */
 var build = GULP.series(
  clean //clean out stagin area
  ,copystyle
  ,styles
  ,GULP.parallel(
    handlez
    ,scripts
    ,copyjs
    // ,browsersync
    )//parallel
  );

/*
 * You can still use `GULP.task` to expose tasks
 */
 GULP.task('build', build);

/*
 * Define default task that can be called by just running `gulp` from cli
 */
 GULP.task('default', build);