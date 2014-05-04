'use strict';

module.exports = {
    dist: {
        // [REQUIRED] Path to the build you're using for development.
        'devFile' : 'bower_components/modernizr/modernizr.js',

        // [REQUIRED] Path to save out the built file.
        'outputFile' : '<%= config.dist %>/js/modernizr.min.js',

        // Based on default settings on http://modernizr.com/download/
        'extra' : {
            'cssclasses' : true,
            'load' : false,
            'mq' : false,
            'printshiv' : false,
            'shiv' : false
        },

        // Based on default settings on http://modernizr.com/download/
        'extensibility' : {
            'addtest' : false,
            'domprefixes' : false,
            'hasevents' : false,
            'prefixed' : false,
            'prefixes' : false,
            'testallprops' : false,
            'testprops' : false,
            'teststyles' : false
        },

        // By default, source is uglified before saving
        'uglify' : true,

        // Define any tests you want to implicitly include.
        'tests' : [],

        // By default, this task will crawl your project for references to Modernizr tests.
        // Set to false to disable.
        'parseFiles' : true,

        // When parseFiles = true, this task will crawl all *.js, *.css, *.scss files, except files that are in node_modules/.
        // You can override this by defining a 'files' array below.
        // 'files' : {
            // 'src': []
        // },

        // When parseFiles = true, matchCommunityTests = true will attempt to
        // match user-contributed tests.
        'matchCommunityTests' : false,

        // Have custom Modernizr tests? Add paths to their location here.
        'customTests' : []
    }
};
