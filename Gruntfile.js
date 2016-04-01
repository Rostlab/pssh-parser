module.exports = function(grunt) {

    grunt.initConfig({
        jshint: {
            files: ['pssh.js'],
        },
        uglify: {
            my_target: {
                files: {
                    'pssh.min.js': ['pssh.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['jshint', 'uglify']);

};