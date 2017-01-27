'use strict';

const app = {};

function Home(Vue) {
    const vm = new Vue({
        el: '#csati',
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
    Home(Vue);
});
