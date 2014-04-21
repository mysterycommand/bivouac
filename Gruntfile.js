'use strict';

function loadConfig(path) {
    var glob = require('glob');

    var config = {};
    var key;

    glob.sync('*', {cwd: path})
        .forEach(function(option) {
            key = option.replace(/\.js$/,'');
            config[key] = require(path + option);
        });

    return config;
}

module.exports = function(grunt) {

    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    grunt.initConfig(grunt.util._.extend({
        config: {
            app: 'app',
            dist: 'dist',
            temp: '.tmp'
        }
    }, loadConfig('./tasks/options/')));

    grunt.registerTask('default', [
        'jshint'
    ]);

    grunt.registerTask('serve', [
        'jshint',
        'clean:dev',
        'connect:livereload',
        'watch'
    ]);

    grunt.registerTask('build', [
        'jshint',
        'clean:dist',
        'requirejs',
        'copy'
    ]);

};
