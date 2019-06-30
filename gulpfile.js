'use strict';

var gulp = require('gulp');
var gulp_orecore = require('orecore-build');

gulp_orecore('channel');

gulp.task('default', ['lint', 'coverage']);
