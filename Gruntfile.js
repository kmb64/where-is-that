// Generated on 2014-07-04 using generator-webapp 0.4.9
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  // Configurable paths
  var config = {
    app: 'app',
    tmp: '.tmp',
    dist: 'dist'
  };

  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    config: config,

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      bower: {
        files: ['bower.json'],
        tasks: ['bowerInstall']
      },
      js: {
        files: ['<%= config.app %>/scripts/{,*/}*.js'],
        tasks: ['jshint'],
        options: {
          livereload: true
        }
      },
      jstest: {
        files: ['test/spec/{,*/}*.js'],
        tasks: ['test:watch']
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      sass: {
        files: ['<%= config.app %>/styles/{,*/}*.{scss,sass}'],
        tasks: ['sass:server', 'autoprefixer']
      },
      styles: {
        files: ['<%= config.app %>/styles/{,*/}*.css'],
        tasks: ['newer:copy:styles', 'autoprefixer']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= config.app %>/{,*/}*.html',
          '<%= config.app %>/styles/{,*/}*.css',
          '<%= config.app %>/images/{,*/}*'
        ]
      },
      serve: {
        files: [
          '<%= config.app %>/{,*/}*.html',
          '<%= config.app %>/scripts/*.js'
        ],
        tasks: ['newer:copy:serve', 'concat']
      }
    },

    // The actual grunt server settings
    connect: {
      options: {
        port: 9000,
        open: true,
        livereload: 35729,
        // Change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
      },
      livereload: {
        options: {
          middleware: function (connect) {
            return [
              connect.static('.tmp'),
              connect().use('/bower_components', connect.static('./bower_components')),
              connect.static(config.tmp)
            ];
          }
        }
      },
      test: {
        options: {
          open: false,
          port: 9001,
          keepalive: false,
          base: ['<%= config.tmp %>']
        }
      },
      dist: {
        options: {
          base: '<%= config.dist %>',
          livereload: false

        }
      }
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [
          {
            dot: true,
            src: [
              '.tmp',
              '<%= config.dist %>/*',
              '!<%= config.dist %>/.git*'
            ]
          }
        ]
      },
      server: '.tmp'
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        '<%= config.app %>/scripts/{,*/}*.js',
        'test/spec/{,*/}*.js'
      ]
    },

    // Compiles Sass to CSS and generates necessary files if requested
    sass: {
      options: {
        includePaths: [
          'bower_components'
        ]
      },
      dist: {
        files: [
          {
            expand: true,
            cwd: '<%= config.app %>/styles',
            src: ['*.scss'],
            dest: '.tmp/styles',
            ext: '.css'
          }
        ]
      },
      server: {
        files: [
          {
            expand: true,
            cwd: '<%= config.app %>/styles',
            src: ['*.scss'],
            dest: '.tmp/styles',
            ext: '.css'
          }
        ]
      }
    },

    // Add vendor prefixed styles
    autoprefixer: {
      options: {
        browsers: ['last 1 version']
      },
      dist: {
        files: [
          {
            expand: true,
            cwd: '.tmp/styles/',
            src: '{,*/}*.css',
            dest: '.tmp/styles/'
          }
        ]
      }
    },

    // Automatically inject Bower components into the HTML file
    bowerInstall: {
      app: {
        src: ['<%= config.app %>/index.html'],
        exclude: ['bower_components/bootstrap-sass-official/vendor/assets/javascripts/bootstrap.js']
      },
      sass: {
        src: ['<%= config.app %>/styles/{,*/}*.{scss,sass}']
      }
    },

    // Renames files for browser caching purposes
    rev: {
      dist: {
        files: {
          src: [
            '<%= config.dist %>/scripts/{,*/}*.js',
            '<%= config.dist %>/styles/{,*/}*.css',
            '<%= config.dist %>/images/{,*/}*.*',
            '<%= config.dist %>/styles/fonts/{,*/}*.*',
            '<%= config.dist %>/*.{ico,png}'
          ]
        }
      }
    },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      options: {
        dest: '<%= config.dist %>'
      },
      html: '<%= config.app %>/index.html'
    },

    // Performs rewrites based on rev and the useminPrepare configuration
    usemin: {
      options: {
        assetsDirs: ['<%= config.dist %>', '<%= config.dist %>/images']
      },
      html: ['<%= config.dist %>/{,*/}*.html'],
      css: ['<%= config.dist %>/styles/{,*/}*.css']
    },

    // The following *-min tasks produce minified files in the dist folder
    imagemin: {
      dist: {
        files: [
          {
            expand: true,
            cwd: '<%= config.app %>/images',
            src: '{,*/}*.{gif,jpeg,jpg,png}',
            dest: '<%= config.dist %>/images'
          }
        ]
      }
    },

    svgmin: {
      dist: {
        files: [
          {
            expand: true,
            cwd: '<%= config.app %>/images',
            src: '{,*/}*.svg',
            dest: '<%= config.dist %>/images'
          }
        ]
      }
    },

    htmlmin: {
      dist: {
        options: {
          collapseBooleanAttributes: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true,
          removeCommentsFromCDATA: true,
          removeEmptyAttributes: true,
          removeOptionalTags: true,
          removeRedundantAttributes: true,
          useShortDoctype: true
        },
        files: [
          {
            expand: true,
            cwd: '<%= config.dist %>',
            src: '{,*/}*.html',
            dest: '<%= config.dist %>'
          }
        ]
      }
    },

    // By default, your `index.html`'s <!-- Usemin block --> will take care of
    // minification. These next options are pre-configured if you do not wish
    // to use the Usemin blocks.
    // cssmin: {
    //     dist: {
    //         files: {
    //             '<%= config.dist %>/styles/main.css': [
    //                 '.tmp/styles/{,*/}*.css',
    //                 '<%= config.app %>/styles/{,*/}*.css'
    //             ]
    //         }
    //     }
    // },
    // uglify: {
    //     dist: {
    //         files: {
    //             '<%= config.dist %>/scripts/scripts.js': [
    //                 '<%= config.dist %>/scripts/scripts.js'
    //             ]
    //         }
    //     }
    // },
    // concat: {
    //     dist: {}
    // },

    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [
          {
            expand: true,
            dot: true,
            cwd: '<%= config.app %>',
            dest: '<%= config.dist %>',
            src: [
              '*.{ico,png,txt}',
              '.htaccess',
              'images/{,*/}*.webp',
              '{,*/}*.html',
              'styles/fonts/{,*/}*.*'
            ]
          },
          {
            expand: true,
            dot: true,
            cwd: '.',
            src: ['bower_components/bootstrap-sass-official/vendor/assets/fonts/bootstrap/*.*'],
            dest: '<%= config.dist %>'
          }
        ]
      },
      serve: {
        files: [
          {src: 'bower_components/angular/angular.js', dest: '<%= config.tmp %>/scripts/angular.js'},
          {src: 'bower_components/jquery/dist/jquery.min.js', dest: '<%= config.tmp %>/scripts/jquery.min.js'},

          {src: '<%= config.app %>/index.html', dest: '<%= config.tmp %>/index.html'},

          {expand: true, dot: true, cwd: '<%= config.app %>/images', src: '{,*/}*.png', dest: '<%= config.tmp %>/images'}
        ]
      },
      styles: {
        expand: true,
        dot: true,
        cwd: '<%= config.app %>/styles',
        dest: '.tmp/styles/',
        src: '{,*/}*.css'
      }
    },
    concat: {
      js: {
        src: [
          '<%= config.app %>/scripts/**/*.js'
        ],
        dest: '<%= config.tmp %>/scripts/app.js'
      }
    },

    // Generates a custom Modernizr build that includes only the tests you
    // reference in your app
    modernizr: {
      dist: {
        devFile: 'bower_components/modernizr/modernizr.js',
        outputFile: '<%= config.dist %>/scripts/vendor/modernizr.js',
        files: {
          src: [
            '<%= config.dist %>/scripts/{,*/}*.js',
            '<%= config.dist %>/styles/{,*/}*.css',
            '!<%= config.dist %>/scripts/vendor/*'
          ]
        },
        uglify: true
      }
    },

    // Run some tasks in parallel to speed up build process
    concurrent: {
      server: [
        'sass:server',
        'copy:styles',
        'copy:serve',
        'concat'
      ],
      test: [
        'sass:server',
        'copy:styles',
        'copy:serve',
        'concat'
      ],
      dist: [
        'sass',
        'copy:styles',
        'imagemin',
        'svgmin'
      ]
    },

    protractor: {
      options: {
        configFile: "test/protractorConf.js", // Target-specific config file
        keepAlive: false, // If false, the grunt process stops when the test fails.
        noColor: false // If true, protractor will not use colors in its output.
      },
      firefox: {
        options: {
          args: {
            verbose: true,
            browser: 'firefox',
            seleniumServerJar: 'node_modules/selenium-server/lib/runner/selenium-server-standalone-2.38.0.jar'
          }
        }
      }
    }
  });


  grunt.registerTask('serve', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'concurrent:server',
      'autoprefixer',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('server', function (target) {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run([target ? ('serve:' + target) : 'serve']);
  });

  grunt.registerTask('test', function (target) {
    if (target !== 'watch') {
      grunt.task.run([
        'clean:server',
        'concurrent:test',
        'autoprefixer'
      ]);
    }

    grunt.task.run([
      'connect:test',
      'protractor:firefox'
    ]);
  });

  grunt.registerTask('e2e', 'Run functional tests.', function () {
    var defaultTasks = ['clean:server', 'concurrent:test', 'connect:test', 'protractor:firefox'];

    grunt.task.run(defaultTasks);
  });


  grunt.registerTask('build', [
    'clean:dist',
    'concurrent:dist',
    'autoprefixer',
    'concat',
    'cssmin',
    'uglify',
    'copy:dist',
    'modernizr',
    'rev',
    'htmlmin'
  ]);

  grunt.registerTask('default', [
    'newer:jshint',
    'test',
    'build'
  ]);
};
