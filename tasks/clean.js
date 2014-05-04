'use strict';

module.exports = {
    dist: {
        files: [{
            dot: true,
            src: [
                '<%= config.temp %>',
                '<%= config.dist %>/*',
                '!<%= config.dist %>/.git*'
            ]
        }]
    },
    dev: '<%= config.temp %>'
};