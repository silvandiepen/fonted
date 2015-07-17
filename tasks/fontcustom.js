/*
 * grunt-fontcustom
 * https://github.com/MoOx/grunt-fontcustom
 *
 * Copyright (c) 2013 Maxime Thirouin, contributors
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
  var fs = require('fs');
  var tmp = require('tmp');

  function compile(args, cb) {
    var child = grunt.util.spawn({
      cmd: 'fontcustom',
      args: args
    }, function (err, result, code) {
      if (code === 127) {
        return grunt.warn(
          'You need to have Ruby and Fontcustom installed ' +
          'and in your system PATH for this task to work. ' +
          'More info: https://github.com/MoOx/grunt-fontcustom'
        );
      }
      cb();
    });
    child.stdout.pipe(process.stdout);
    child.stderr.pipe(process.stderr);
  }

  grunt.registerMultiTask('fontcustom', 'Compile SVG and EPS to Fonts (and CSS)', function () {
    var args = ['compile'];
    var helpers = require('grunt-lib-contrib').init(grunt);
    var options = this.options();
    var cb = this.async();
    var src;

    grunt.verbose.writeflags(options, 'Options');
    
    if (!options.src) {
      grunt.fail.fatal('Missing options `src`');
    }
    src = options.src;
    
    if (options.dest) {
      args.push('--output', options.dest);
    }

    // don't want these as CLI flags
    delete options.src;
    delete options.dest;

    // add converted options
    [].push.apply(args, helpers.optsToArgs(options));
    
    args.push(src);
    
    compile(args, cb);
  });
};
