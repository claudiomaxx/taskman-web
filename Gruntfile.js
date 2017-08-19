            // scripts: {
            //     files: ['taskman-web-ng1/**/*.js'],
            //     tasks: ['jshint'],
            //     options: {
            //         spawn: false,
            //     },
            // },


module.exports = function (grunt) {
    grunt.initConfig({

        watch: {
            css: {
                files: '**/*.scss',
				tasks: ['sass']
            }
        },

        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'styles',
                    src: ['*.scss'],
                    dest: 'styles',
                    ext: '.css'
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['sass', 'watch']);

};