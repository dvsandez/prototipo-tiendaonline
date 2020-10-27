import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    //mode: 'history',
    routes: [
        {
            path: '/product',
            name: 'product',
            component: ()=> import("./components/Product.vue"),
            children:[
                {
                    path: 'list',
                    name: 'list-product',
                    component: ()=> import("./components/product/ListProduct.vue"),
                },
                {
                    path: 'add',
                    name: 'add-product',
                    component: ()=> import("./components/product/AddProduct.vue")
                }
            ]
        },
        {
            path: '/purchase',
            name: 'purchase',
            component: ()=> import("./components/Purchase.vue"),
        },
        {
            path: '/sale',
            name: 'sale',
            component: ()=> import("./components/Sale.vue"),
        }
    ]
});
