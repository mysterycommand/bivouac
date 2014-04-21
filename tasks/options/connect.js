'use strict';

module.exports = {
    options: {
        port: 9000,
        open: true,
        livereload: 35729,
        // Change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
    },
    livereload: {
        options: {
            middleware: function(connect) {
                return [
                    connect.static('<%= config.temp %>'),
                    connect().use('/bower_components', connect.static('./bower_components')),
                    connect.static('<%= config.app %>')
                ];
            }
        }
    },
    test: {
        options: {
            open: false,
            port: 9001,
            middleware: function(connect) {
                return [
                    connect.static('<%= config.temp %>'),
                    connect.static('<%= config.test %>'),
                    connect().use('/bower_components', connect.static('./bower_components')),
                    connect.static('<%= config.app %>')
                ];
            }
        }
    },
    dist: {
        options: {
            base: '<%= config.dist %>',
            livereload: false
        }
    }
};
