/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

//Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('App', require('./App.vue').default);
Vue.component('Product', require('./components/Product.vue').default);
Vue.component('ListProduct', require('./components/product/ListProduct.vue').default);
Vue.component('AddProduct', require('./components/product/AddProduct.vue').default);
Vue.component('EditProduct', require('./components/product/EditProduct.vue').default);
Vue.component('DropProduct', require('./components/product/DropProduct.vue').default);
Vue.component('Purchase', require('./components/Purchase.vue').default);
Vue.component('Sale', require('./components/Sale.vue').default);
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
import App from "./App.vue";
import store from "./store";
import router from "./router";

new Vue({
    el: '#app',
    store,
    router,
    data: {
        saludo: 'hola'
    },
    render: h=>h(App)
})//.$mount('#app');
