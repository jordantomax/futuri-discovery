module.exports = function(grunt) {
  grunt.initConfig({
    concurrent: {
      target: {
        tasks: ['jekyll:server', 'watch'],
        options: {
            logConcurrentOutput: true
          }
        }
    },
    watch: {
      gruntfile: {
        files: ['Gruntfile.js'],
        options: {
          reload: true
        }
      },
      handlebars: {
        files: ['assets/templates/*.hb'],
        tasks: ['handlebars'],
      },
      jekyll: {
        files: ['*.html', 'assets/javascripts/*.js', 'assets/stylesheets/**/*.scss'],
        tasks: ['jekyll:dev'],
      }
    },
    jekyll: {
      server: {
        options: {
          serve: true,
          config: '_config.yml,_config.dev.yml',
        }
      },
      dev: {
        options: {
          config: '_config.yml,_config.dev.yml',
        }
      }
    },
    handlebars: {
      all: {
        options: {
          namespace: "Handlebars.templates",
          processName: function(filepath) {
            var filename = (filepath).replace('assets/templates/','');
            var name     = (filename).replace('.hb','');
            return name;
          }
        },
        files: {
          "assets/javascripts/templates.js": ["assets/templates/*.hb"]
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['concurrent:target']);
}
