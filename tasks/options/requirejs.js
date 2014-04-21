'use strict';

module.exports = {
    dist: {
        // Options: https://github.com/jrburke/r.js/blob/master/build/example.build.js
        options: {
            baseUrl: '<%= config.app %>/scripts',
            mainConfigFile: '<%= config.app %>/scripts/config.js',
            name: '../bower_components/almond/almond',
            out: '<%= config.dist %>/js/app.min.js',
            insertRequire: ['main'],

            optimize: 'none',
            preserveLicenseComments: false,
            useStrict: true
        }
    }
};