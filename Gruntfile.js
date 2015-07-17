/*
 * grunt-fontcustom
 * https://github.com/MoOx/grunt-fontcustom
 *
 * Copyright (c) 2013 Maxime Thirouin, contributors
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      test: [
        'test/fontcustom',
        'test/tmp',
        'test/tmp2',
        'test/tmp3'
      ]
    },

    // Configuration to be run (and then tested).
    fontcustom: {
      compile: {},
      compileWithDest: {
        options: {
          dest: 'test/tmp'
        }
      },
      compileWithName: {
        options: {
          name: 'icons',
          dest: 'test/tmp2'
        }
      },
      compileWithoutHash: {
        options: {
          nohash: true,
          dest: 'test/tmp3'
        }
      },
      options: {
          src: 'test/fixtures'
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }
  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-internal');

  grunt.registerTask('mkdir', grunt.file.mkdir);

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', [
    'clean',
    'fontcustom',
    'nodeunit',
    'clean'
  ]);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'test', 'build-contrib']);
};
