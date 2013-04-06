/*global module:false require*/
module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        files: {
            grunt: ['GruntFile.js'],
            js: ['js/*.js'],
            css: ['css/*.css'],
            img: ['images']
        },

        neuter: {
            options: {
                includeSourceURL: false
            },
            'dist/js/app.js': 'js/app/app.js',
            'dist/js/libs.js': 'js/app/libs.js'
        },

        concat: {
            css: {
                src: ['<%= files.css %>'],
                dest: 'dist/css/libs/z.styles.concat.css'
            },
            csslibs: {
                src: ['app/assets/css/libs/*.css'],
                dest: 'dist/css/libs/z.styles.concat.css'
            },
            cssmin: {
                src: ['app/assets/css/min/*.css'],
                dest: 'dist/css/min/styles.min.css'
            },

            js: {
                src: ['<%= files.js %>'],
                dest: 'dist/js/libs/z.scripts.concat.js'
            },
            jslibs: {
                src: ['app/assets/js/libs/*.js'],
                dest: 'dist/js/libs/z.scripts.concat.js'
            },
            jsmin: {
                src: ['app/assets/js/min/*.js'],
                dest: 'dist/js/min/scripts.min.js'
            }
        },

        uglify: {
            dist: {
                src: ['app/assets/js/libs/z.scripts.concat.js'],
                dest: 'dist/js/min/scripts.min.js'
            }
        },

        jshint: {
            all: ['GruntFile.js', 'js/app/**/*.js', '!js/libs/*.*'],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        less: {
            development: {
                options: {
                    paths: ["css"]
                },
                files: {
                    "css/main.css": "less/main.less"
                }
            },
            production: {
                options: {
                    paths: ["css"],
                    yuicompress: true
                },
                files: {
                    "dist/css/main.css": "less/main.less"
                }
            }
        },

        ember_templates: {
            options: {
                templateName: function(sourceFile) {
                    return sourceFile.replace(/js\/app\/templates\//, '');
                }
            },
            'dist/js/templates/templates.js': ["js/app/templates/**/*.hbs"]
        },

        watch: {
            application_code: {
                files: ['GruntFile.js', 'js/app/**/*.js', 'less/*.less'],
                tasks: ['ember_templates', 'jshint', 'neuter', 'less']
            },
            handlebars_templates: {
                files: ['js/app/templates/**/*.hbs'],
                tasks: ['ember_templates', 'neuter']
            }
        }
    });


    // load plugins installed from npm (see package.json)
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-neuter');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-livereload');
    grunt.loadNpmTasks('grunt-ember-templates');

    //grunt.loadNpmTasks('grunt-contrib-uglify');    
    //grunt.loadNpmTasks('grunt-contrib-csslint');
    //grunt.loadNpmTasks('grunt-contrib-cssmin');
    // Investigate handlebar precompilation process
    //grunt.loadNpmTasks('grunt-contrib-handlebars');

    // Compile less files

    grunt.registerTask('default', []);

    grunt.registerTask('build', [
        'ember_templates',
        'jshint',
        'neuter',
        'less'
    ]);

};