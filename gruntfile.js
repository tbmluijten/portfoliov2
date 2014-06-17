module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
                options: {
                  noCache: true
                },
        files: {
          'css/main.css': 'sass/main.sass'
        }
      }
    },

    watch: {
            options: {
                livereload: true
            },
      css: {
        files: 'sass/**/*.sass',
                tasks: ['sass']

      },
            html: {
                files: '*.html'

            }
    },

        connect: {
            options: {
                port: 9001,
                livereload: 35729,
                // change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    open: true,
                    base: [
                        '.'
                    ]
                }
            }
        },

  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default',['sass', 'watch']);
    grunt.registerTask('serve', ['connect', 'default', 'watch']);
}