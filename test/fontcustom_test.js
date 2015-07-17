var grunt = require('grunt');

exports.fontcustom = {
  compile: function(test) {
    'use strict';
    test.expect(5);

    // cannot test the content of the file seems some value seems to change each generation with same files...
    test.ok(grunt.file.exists('test/fontcustom/fontcustom-c4568716e12996c4cd16cc7d8d9ccd50.eot'), 'should compile SVG or EPS to EOT font');
    test.ok(grunt.file.exists('test/fontcustom/fontcustom-c4568716e12996c4cd16cc7d8d9ccd50.svg'), 'should compile SVG or EPS to SVG font');
    test.ok(grunt.file.exists('test/fontcustom/fontcustom-c4568716e12996c4cd16cc7d8d9ccd50.ttf'), 'should compile SVG or EPS to TTF font');
    test.ok(grunt.file.exists('test/fontcustom/fontcustom-c4568716e12996c4cd16cc7d8d9ccd50.woff'), 'should compile SVG or EPS to WOFF font');
    
    var actual = grunt.file.read('test/fontcustom/fontcustom.css');
    var expected = grunt.file.read('test/expected/hash/fontcustom.css');
    test.equal(actual, expected, 'should compile SVG to CSS for EOT, SVG, TTF and WOFF fonts');

    test.done();
  },
  compileWithDest: function(test) {
    'use strict';
    test.expect(5);
    
    test.ok(grunt.file.exists('test/tmp/fontcustom-c4568716e12996c4cd16cc7d8d9ccd50.eot'), 'should compile SVG or EPS to EOT font in `tmp` folder');
    test.ok(grunt.file.exists('test/tmp/fontcustom-c4568716e12996c4cd16cc7d8d9ccd50.svg'), 'should compile SVG or EPS to SVG font in `tmp` folder');
    test.ok(grunt.file.exists('test/tmp/fontcustom-c4568716e12996c4cd16cc7d8d9ccd50.ttf'), 'should compile SVG or EPS to TTF font in `tmp` folder');
    test.ok(grunt.file.exists('test/tmp/fontcustom-c4568716e12996c4cd16cc7d8d9ccd50.woff'), 'should compile SVG or EPS to WOFF font in `tmp` folder');
    
    var actual = grunt.file.read('test/tmp/fontcustom.css');
    var expected = grunt.file.read('test/expected/hash/fontcustom.css');
    test.equal(actual, expected, 'should compile SVG to CSS for EOT, SVG, TTF and WOFF fonts in `tmp` folder');

    test.done();
  },
  compileWithName: function(test) {
    'use strict';
    test.expect(5);

    test.ok(grunt.file.exists('test/tmp2/icons-c4568716e12996c4cd16cc7d8d9ccd50.eot'), 'should compile SVG or EPS to EOT font in `tmp2` folder with filename prefixed by `icons`');
    test.ok(grunt.file.exists('test/tmp2/icons-c4568716e12996c4cd16cc7d8d9ccd50.svg'), 'should compile SVG or EPS to SVG font in `tmp2` folder with filename prefixed by `icons`');
    test.ok(grunt.file.exists('test/tmp2/icons-c4568716e12996c4cd16cc7d8d9ccd50.ttf'), 'should compile SVG or EPS to TTF font in `tmp2` folder with filename prefixed by `icons`');
    test.ok(grunt.file.exists('test/tmp2/icons-c4568716e12996c4cd16cc7d8d9ccd50.woff'), 'should compile SVG or EPS to WOFF font in `tmp2` folder with filename prefixed by `icons`');
    
    var actual = grunt.file.read('test/tmp2/fontcustom.css');
    var expected = grunt.file.read('test/expected/named/fontcustom.css');
    test.equal(actual, expected, 'should compile SVG to CSS for EOT, SVG, TTF and WOFF fonts in `tmp2` folder');

    test.done();
  },
  compileWithoutHash: function(test) {
    'use strict';
    test.expect(5);

test.ok(grunt.file.exists('test/tmp3/fontcustom.eot'), 'should compile SVG or EPS to EOT font in `tmp3` folder without hash in the filename');
    test.ok(grunt.file.exists('test/tmp3/fontcustom.svg'), 'should compile SVG or EPS to SVG font in `tmp3` folder without hash in the filename');
    test.ok(grunt.file.exists('test/tmp3/fontcustom.ttf'), 'should compile SVG or EPS to TTF font in `tmp3` folder without hash in the filename');
    test.ok(grunt.file.exists('test/tmp3/fontcustom.woff'), 'should compile SVG or EPS to WOFF font in `tmp3` folder without hash in the filename');
    
    var actual = grunt.file.read('test/tmp3/fontcustom.css');
    var expected = grunt.file.read('test/expected/nohash/fontcustom.css');
    test.equal(actual, expected, 'should compile SVG to CSS for EOT, SVG, TTF and WOFF fonts in `tmp3` folder without hash in the filenames in it');

    test.done();
  }
};
