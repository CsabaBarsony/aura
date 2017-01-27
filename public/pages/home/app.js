'use strict';

const app = {};

function home(Vue) {
    app.view = new Vue({
        el: '#app',
        data: {
            name: 'majom'
        }
    });

    const store = new app.Store();

    store.getAllFoods(foods => {
        console.log(foods);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    home(Vue);
});
