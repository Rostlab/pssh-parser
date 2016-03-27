module.exports = function(grunt) {

    grunt.initConfig({
        jshint: {
            files: ['index.js'],
        },
        uglify: {
            my_target: {
                files: {
                    'index.min.js': ['index.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['jshint', 'uglify']);

};