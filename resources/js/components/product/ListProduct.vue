<template>
    <div>
       <table class="table table-hover table-striped">
           <thead class="thead-dark">
               <tr>
                   <th>
                       NOMBRE
                   </th>
                   <th>
                       marca
                   </th>
                   <th>
                       precio
                   </th>
                   <th>
                       cantidad
                   </th>
                   <th>
                       unidad
                   </th>
                   <th>
                       categoria
                   </th>
                   <th>
                       imagen
                   </th>
                   <th>
                       acciones
                   </th>
               </tr>
           </thead>

           <tbody v-if="list_items !== []">
               <tr v-for="(item, index) of list_items" :key="index">

                    <th> {{item.name}} </th>
                   <td> {{item.trademark}} </td>
                   <td> {{item.price}} </td>
                   <td> {{item.quantity}} </td>
                   <td> {{item.unit_of_measurement}} </td>
                   <td> {{item.category}} </td>
                   <td v-if="item.images!==''"> <img width="110px" v-bind:src="`storage/${item.images}`" alt="" ></td>
                   <td v-else> Añadir imagen </td>
                   <td> <a href="#" class="btn btn-info btn-sm" @click.prevent="changeInProduct(item)"> editar</a> <a href="#" class="btn btn-danger btn-sm" @click.prevent="clearProduct(item)"> borrar</a></td>

               </tr>
           </tbody>
       </table>
        <EditProduct v-bind:item="bind_data"></EditProduct>
        <DropProduct :item="bind_data"></DropProduct>
    </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
import EditProduct from './EditProduct.vue';
import DropProduct from './DropProduct.vue';


    export default {
        name: 'listProduct',
        data(){
            return{
                imgUrl: "",
                bind_data: {
                    _token: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                    id: "",
                    name: "",
                    trademark: "",
                    price: "",
                    quantity: "",
                    unit_of_measurement: "",
                    category: "",
                    description: "",
                    images: "",
                    imgUrl: ""
                }
            }
        },
        components: {
            EditProduct,
            DropProduct
        },
        computed: {
            ...mapState(['list_items', 'selected_item'])
        },
        methods: {
            ...mapActions(['getProducts', 'showProduct']),
            async changeInProduct(prod){
                await this.binding("#edit", prod);
            },
            async clearProduct(prod){
                await this.binding("#delete", prod);
            },
            async binding(target, info){
                this.bind_data.imgUrl = info.images;
                await this.showProduct(info.id);
                this.bind_data.id = this.selected_item.id;
                this.bind_data.name = this.selected_item.name;
                this.bind_data.trademark = this.selected_item.trademark;
                this.bind_data.price = this.selected_item.price;
                this.bind_data.quantity = this.selected_item.quantity;
                this.bind_data.unit_of_measurement = this.selected_item.unit_of_measurement;
                this.bind_data.category = this.selected_item.category;
                this.bind_data.description = this.selected_item.description;
                this.bind_data.images = this.selected_item.images;
                console.log(this.bind_data.imgUrl);
                $(target).modal('show');
            }
        },
        created(){
            this.getProducts()
        }
    }
</script>

<style>
.last_selected_object{
    border-color: green;
}
</style>


