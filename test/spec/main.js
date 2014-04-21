'use strict';

define(function(require) {
    /**
     * ALL YOUR TESTS GO HERE
     */
    require('spec/App.test');

    window.console = window.console || function() {};
    window.notrack = true;
    window.mocha.run();
});
