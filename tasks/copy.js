'use strict';

module.exports = {
    dist: {
        files: [{
            dot: true,
            expand: true,
            cwd: '<%= config.app %>/',
            src: [
                '*.{htaccess,html,txt}',
                'images/*'
            ],
            dest: '<%= config.dist %>/'
        }]
    }
};