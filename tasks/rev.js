'use strict';

module.exports = {
    dist: {
        files: {
            src: [
                '<%= config.dist %>/js/{,*/}*.js',
                '<%= config.dist %>/css/{,*/}*.css',
                '<%= config.dist %>/img/{,*/}*.*',
                // '<%= config.dist %>/css/fonts/{,*/}*.*',
                '<%= config.dist %>/*.{ico,png}'
            ]
        }
    }
};
