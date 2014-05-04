'use strict';

module.exports = {
    dist: {
        // Options: https://github.com/jrburke/r.js/blob/master/build/example.build.js
        options: {
            baseUrl: '<%= config.app %>/scripts',
            mainConfigFile: '<%= config.app %>/scripts/config.js',
            name: '../../node_modules/almond/almond',
            out: '<%= config.dist %>/js/app.min.js',
            insertRequire: ['main'],

            optimize: 'uglify',
            preserveLicenseComments: false,
            useStrict: true
        }
    }
};
