module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        files: {
          'css/main.css' : 'sass/main.sass'
        }
      }
    },
    watch: {
      css: {
        files: 'sass/**/*.sass',
        tasks: ['sass']
      },
      html: {
        files: '*.html'
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default',['sass', 'watch']);
}