'use strict';
/* global Vue */

(function() {
    Vue.component('suggest', {
        template: '<div>suggest: {{suggestion}}</div>',
        props: ['suggestion']
    });
}());
