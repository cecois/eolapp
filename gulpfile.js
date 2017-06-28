var gulp        = require('gulp'),
PLUMBER     = require('gulp-plumber'),
browserSync = require('browser-sync'),
stylus      = require('gulp-stylus'),
uglify      = require('gulp-uglify'),
handlebars      = require('gulp-handlebars'),
CONCAT      = require('gulp-concat'),
jeet        = require('jeet'),
rupture     = require('rupture'),
koutoSwiss  = require('kouto-swiss'),
prefixer    = require('autoprefixer-stylus'),
LESS    = require('gulp-less'),
wrap    = require('gulp-wrap'),
declare    = require('gulp-declare'),
CSSMIN    = require('gulp-cssmin'),
RENAME    = require('gulp-rename'),
imagemin    = require('gulp-imagemin'),
cp          = require('child_process');

gulp.slurped = false;

var messages = {
	jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};

// var jekyllCommand = (/^win/.test(process.platform)) ? 'jekyll.bat' : 'jekyll';
var jekyllCommand = 'jekyll';

/**
 * Build the Jekyll Site
 */
 gulp.task('jekyll-build', function (done) {
 	browserSync.notify(messages.jekyllBuild);
 	return cp.spawn(jekyllCommand, ['build'], {stdio: 'inherit'})
 	.on('close', done);
 });

/**
 * Rebuild Jekyll & do page reload
 */
 gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
 	browserSync.reload();
 });

/**
 * Wait for jekyll-build, then launch the Server
 */
 gulp.task('browser-sync', ['jekyll-build'], function() {
 	browserSync({
 		server: {
 			baseDir: '_site'
 		}
 	});
 });

/**
 * Copy Tasks
 */
 // gulp.task('copy-js', function () {
 // 	gulp.src([
 // 		'Models.js'
 // 		,'Collections.js'
 // 		,'Routes.js'
 // 		,'Views.js'
 // 		,'App.js'
 // 		])
 // 	.pipe(gulp.dest('scripts/'));
 // });


/**
 * Javascript Task
 */
 gulp.task('js', function(){
 	return gulp.src([
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
 		// ,'src-scripts/App.js'
 		// ,'src-scripts/Routes.js'
 		])
 	.pipe(PLUMBER())
 	.pipe(uglify())
 	.pipe(CONCAT('app.min.js'))
 	.pipe(gulp.dest('scripts/'))
 });

/**
 * Copy Task
 */
 gulp.task('copy-js', function () {
 	gulp.src([
 		'src-scripts/App.js'
 		,'src-scripts/Routes.js'
 		])
 	.pipe(gulp.dest('scripts'));
 });

 gulp.task(['less', gulp.series(function () {
 	gulp.src('./src-css/*.less')
 	.pipe(PLUMBER())
 	.pipe(LESS())
  	// .pipe(gulp.dest('./styles/'))
  	// .pipe(CSSMIN())
  	// .pipe(RENAME({
  	// 	suffix: '.min'
  	// }))
  	.pipe(gulp.dest('src-css'))
  }
 )//series
 ]);

 gulp.task('cat-style', function () {
 	// gulp.src({
 	// 	'./src-css/*.css'
 	// 	,'./src-css/lib/bootstrap-3.3.5-dist/css/bootstrap.css'
 	// 	'./src-css/lib/leaflet/leaflet.css'
 	// })
 	gulp.src(['src-css/*.css',
 		'src-css/lib/bootstrap-3.3.5-dist/css/bootstrap.css',
 		'src-css/lib/leaflet/leaflet.css' ],
 		{base: 'src-css/'})
 	.pipe(PLUMBER())
 	// .pipe(LESS())
 	// .pipe(gulp.dest('./styles/'))
 	.pipe(CSSMIN())
 	.pipe(CONCAT('app.css'))
 	.pipe(RENAME({
 		suffix: '.min'
 	}))
 	.pipe(gulp.dest('css'))
 });

 gulp.task('copy-style', function () {
 	gulp.src('./src-css/*.scss')
 	.pipe(gulp.dest('css'))
 });

 gulp.task('copy-fonts', function () {
 	gulp.src('./src-css/lib/bootstrap-3.3.5-dist/fonts/*')
 	.pipe(gulp.dest('assets/fonts'))
 });

 // gulp.task('copy-vendor-style', function () {
 // 	gulp.src('./src-css/lib/bootstrap-3.3.5-dist/css/bootstrap.css')
 // 	.pipe(gulp.dest('css/'));
 // 	gulp.src('./src-css/lib/leaflet/leaflet.css')
 // 	.pipe(gulp.dest('css/'))
 // });

// gulp.task('copy-vendor-js', function () {
// 	gulp.src('./src-css/lib/lib/leaflet/leaflet.css')
// 	.pipe(gulp.dest('css/'))
// });

/**
 * Templates Task
 */


 gulp.task('handlebars', function(){
 	gulp.src('templates/*.handlebars')
 	.pipe(handlebars())
 	.pipe(wrap('Handlebars.template(<%= contents %>)'))
 	.pipe(declare({
 		namespace: 'CVJEK.templates',
      noRedeclare: true, // Avoid duplicate declarations
  }))
 	.pipe(CONCAT('H-templates-compiled.js'))
 	.pipe(gulp.dest('src-scripts/'));
 });

/**
 * Imagemin Task
 */
 gulp.task('imagemin', function() {
 	return gulp.src('src/img/**/*.{jpg,png,gif}')
 	.pipe(PLUMBER())
 	.pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
 	.pipe(gulp.dest('assets/img/'));
 });

/**
 * Watch stylus files for changes & recompile
 * Watch html/md files, run jekyll & reload BrowserSync
 */
 gulp.task('watch', function () {

 	if(!gulp.slurped){
 		gulp.watch("gulpfile.js",['default'])
 		gulp.slurped=true;
 	}
 	gulp.watch('src-css/app.less', ['less','jekyll-rebuild']);
 	// gulp.watch('assets/*', ['jekyll-rebuild']);
 	// gulp.watch('src-scripts/*.js', ['js','jekyll-rebuild']);
 	gulp.watch(['*.html','*.md', '_includes/*.html', '_layouts/*.html', '_posts/*'], ['jekyll-rebuild']);
 });

 // gulp.task('default', [
 // 	'less' // cssify custom less
 // 	,'handlebars'
 // 	,'js'
 // 	,'copy-js'
 // 	,'cat-style' // cat all those stock css
 // 	,'copy-style' // evidently main sass needs to stay as-is so there's front matter (?)
 // 	,'browser-sync'
 // 	,'watch'
 // 	]);

 gulp.task('upgrade', gulp.series(function(done) {
 	console.log("222")
 	done();
 }));

 gulp.task('default', gulp.series('upgrade'));

 // gulp.task('default',
 // 	gulp.series(
 // 	'upgrade' // cssify custom less
 // 	// ,'handlebars'
 // 	// ,'js'
 // 	// ,'copy-js'
 // 	// ,'cat-style' // cat all those stock css
 // 	// ,'copy-style' // evidently main sass needs to stay as-is so there's front matter (?)
 // 	// ,gulp.parallel('browser-sync'
 // 	// 	,'watch'
 // 	// 	)
 // 	,function(done){console.log("228");done();}
	// 	) //series
	// ) //task