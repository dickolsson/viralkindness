const fs = require('fs');
const path = require('path');

module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.initConfig({
    concat: {
      screen: {
        src: [
          'node_modules/normalize.css/normalize.css',
          'src/screen.css'
        ],
        dest: 'static/assets/screen.css'
      },
      print: {
        src: [
          'node_modules/normalize.css/normalize.css',
          'src/print.css'
        ],
        dest: 'static/assets/print.css'
      }
    },
    watch: {
      css: {
        files: ['**/*.css'],
        tasks: ['default'],
        options: {
          spawn: false,
        },
      },
    },
  });

  grunt.registerTask('default', ['concat']);

};
