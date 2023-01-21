const { src, dest } = require('gulp');

const sass = require('gulp-sass')(require('sass'));

const pxtorem = require('gulp-pxtorem');

const plumber = require('gulp-plumber');

const vendorList = {
  bootstrap: { './node_modules/bootstrap/scss/**': './src/styles/scss/bootstrap' },
};

function copy(cb) {
  Object.keys(vendorList).forEach(i => {
    const vendorItem = vendorList[i];

    Object.keys(vendorItem).forEach(vendorPath => {
      src(vendorPath).pipe(dest(vendorItem[vendorPath]));
    });
  });
  cb();
}

exports.default = function () {
  return src('src/styles/scss/global.scss')
    .pipe(plumber())
    .pipe(sass().on('error', sass.logError))
    .pipe(pxtorem())
    .pipe(dest('src/styles/'));
};

exports.copy = copy;
