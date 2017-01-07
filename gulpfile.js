/** 
 * Make sure Graphicsmagick is installed on your system
 * osx: brew install graphicsmagick
 * ubuntu: apt-get install graphicsmagick
 * 
 * Install these gulp plugins
 * glup, gulp-image-resize, gulp-imagemin and imagemin-pngquant
 * 
 * Group images according to their output dimensions. 
 * (ex: place all portfolio images into "images/portfolio"
 * and all background images into "images/bg")
 * 
 **/
 
// require gulp plugins 
var gulp = require('gulp');
var imageresize = require('gulp-image-resize');
var imagemin = require('gulp-imagemin');
var rename = require("gulp-rename");
 
// set the folder name and the relative paths
// in the example the images are in ./assets/images
// and the public directory is ../public
var paths = [
  "pages/**/*.jpg"
];

// create an array of image groups (see comments above)
// specifying the folder name, the ouput dimensions and
// whether or not to crop the images
var images = [
  { folder: '/600', width: 600, height: 600, crop: true },
  { folder: '/1600', width: 1600, height: 1200, crop: false },
];

// images gulp task
gulp.task('default', function () {

  // loop through image groups		
  images.forEach(function(type){

    // build the resize object
    var resize_settings = {
      width: type.width,
      crop: type.crop,
      // never increase image dimensions
      upscale : false
    }
    // only specify the height if it exists
    if (type.hasOwnProperty("height")) {
      resize_settings.height = type.height
    }
  
    gulp
    // grab all images from the folder
    .src("./pages/**/source/*.jpg")
    // resize them according to the width/height settings
    .pipe(imageresize(resize_settings))
    // optimize the images
    .pipe(imagemin({
      progressive: true
    }))
    // output each image to the dest path
    // maintaining the folder structure
    .pipe(rename(function (path) {
      console.log(path.dirname);
      //path.dirname = path.dirname.match(/\/.+?\//)[0]+type.folder;
      path.dirname += '/..'+type.folder;
    }))
    .pipe(gulp.dest(function(file) {
      return './pages';
    }));
  });
});