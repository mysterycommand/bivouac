'use strict';

module.exports = {
    all: {
        options: {
            run: false,
            reporter: 'Spec',
            urls: ['http://localhost:<%= connect.test.options.port %>/test/index.html']
        }
    }
};