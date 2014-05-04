'use strict';

module.exports = {
    options: {
        assetsDirs: ['<%= config.dist %>', '<%= config.dist %>/img']
    },
    html: ['<%= config.dist %>/{,*/}*.html'],
    css: ['<%= config.temp %>/styles/{,*/}*.css']
};
