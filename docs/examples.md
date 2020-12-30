## Usage Examples

### Example config

```js
grunt.initConfig({
  fontcustom: {               // Task
    icons: {                   // Target
      options: {              // Target options
        src: 'icons/'
        dest: 'fonts/'
        name: 'icons',
      }
    }
  }
});

grunt.loadNpmTasks('grunt-fontcustom');

grunt.registerTask('default', ['jshint', 'fontcustom']);
```
