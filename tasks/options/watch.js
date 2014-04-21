'use strict';

module.exports = {
    js: {
        files: ['<%= config.app %>/scripts/{,*/}*.js'],
        tasks: ['jshint'],
        options: {
            livereload: true
        }
    },
    gruntfile: {
        files: ['Gruntfile.js']
    },
    // styles: {
    //     files: ['<%= config.app %>/styles/{,*/}*.css'],
    //     tasks: ['newer:copy:styles', 'autoprefixer']
    // },
    livereload: {
        options: {
            livereload: '<%= connect.options.livereload %>'
        },
        files: [
            '<%= config.app %>/{,*/}*.html',
            '<%= config.temp %>/styles/{,*/}*.css',
            '<%= config.app %>/images/{,*/}*'
        ]
    }
};
