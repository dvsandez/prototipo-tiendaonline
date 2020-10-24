import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    //mode: 'history',
    routes: [
/*         {
            path: "/",
            name: "listProducts",
            component: ()=> import("./components/listProducts.vue"),
        }, */
        {
            path: '/',
            component: ()=> import("./components/Product.vue"),
            children:[
                {
                    path: '/',
                    name: 'list-product',
                    component: ()=> import("./components/product/ListProduct.vue"),
/*                     children: [
                        {
                            path: 'edit/:id',
                            name: 'edit-product',
                            component: ()=> import("./components/product/editProduct.vue")
                        }
                    ] */
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
