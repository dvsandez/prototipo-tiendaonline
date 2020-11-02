import Vue from 'vue';
import Vuex from 'vuex';
//import {routes} from './router';
import axios from 'axios';
import { isArray } from 'lodash';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        list_items: [],
        selected_item: "",
        operation_completed: false
    },
    mutations: {
        fill_(state, data){
            state.list_items = [];
            state.list_items.push(...data);
        },
        select_(state, data){
            state.selected_item = data;
        },
        comprobation_(state,data){
            console.log(data);
            state.operation_completed = true;
        }
    },
    actions: {
        async addProduct({ commit }, data){
            //console.log(newproduct.name);
            const formData = new FormData();
            formData.append('_token', data._token);
            formData.append('name', data.name);
            formData.append('trademark', data.trademark);
            formData.append('price', data.price);
            formData.append('quantity', data.quantity);
            formData.append('unit_of_measurement', data.unit_of_measurement);
            formData.append('category', data.category);
            formData.append('description', data.description);
            formData.append('images', data.images);
            //console.log(formData);
            //console.log(formData.images);
            const url = "http://localhost/crud-tienda/public/admin_products";
            const res = await axios.post(url,formData
            ).then(res => res.data);
            console.log(res);
            commit('select_', res);
        },
        async getProducts({ commit }){
            const url = "http://localhost/crud-tienda/public/admin_products";
            let res = await axios.get(url
            ).then(res => res.data);
            commit('fill_', res);
        },
        async showProduct({ commit }, data){
            const url = `http://localhost/crud-tienda/public/admin_products/${data}`;
            let res = await axios.get(url).then(res => res.data);
            if(isArray(res)) res = res[0];
            commit('select_', res);
        },
        async updateProduct({ commit }, data){
            const formData = new FormData();
            formData.append('_token', data._token);
            formData.append('id', data.id);
            formData.append('name', data.name);
            formData.append('trademark', data.trademark);
            formData.append('price', data.price);
            formData.append('quantity', data.quantity);
            formData.append('unit_of_measurement', data.unit_of_measurement);
            formData.append('category', data.category);
            formData.append('description', data.description);
            formData.append('images', data.images);
            formData.append('imgUrl', data.imgUrl);
            const url = `http://localhost/crud-tienda/public/admin_products/${data.id}/edit`;
            const res = await axios.post(url, formData).then(res => res.data );
            console.log(res);
            commit('select_', res);
        },
        async deleteProduct({ commit }, data){
            const url = `http://localhost/crud-tienda/public/admin_products/${data}`;
            const res = await axios.delete(url).then(res => res.data);
            commit('select_', res);
        }
    }
})
