module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        mangle: false
      },
      build: {
        src: ['public/lib/moment/*.js','public/lib/underscore/*.js','public/lib/jquery/*.js',
		'public/lib/bootstrap/js/*.js',
		'public/lib/fingerprint/*.js',
		],
        dest: 'public/src/build/app.min.js'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);
};