/* global define */
define([
    'components/background',
    'components/speedrun'
], function(setBackground, speedrun) {
    'use strict';

    var LAYOUT_NAME = '16x9_1';

    return {
        attached: function() {
            setBackground(LAYOUT_NAME);
            speedrun.configure(0, 543, 469, 122, {
                nameY: 10,
                categoryY: 74,
                nameMaxHeight: 70
            });
        }
    };
});
