<template>
    <div class="modal fade" id="delete">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h2>¿Seguro de eliminar <i>producto</i>?</h2>
                    <button class="close" data-dismiss="modal">
                        <span> &times; </span>
                    </button>
                </div>
                <div class="modal-body">
                    Se eliminará el producto  "<b> {{ product.name }} {{ product.trademark }} de {{ product.quantity }} {{ product.unit_of_measurement}} </b> ".
                </div>
                <div class="modal-footer">
                    <a href="#" class="btn btn-danger" @click.prevent="clearProduct(product.id)">Confirmar</a> <button class="btn btn-info" data-dismiss="modal">Cancelar</button>
                </div>


            </div>

        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
    name: 'DropProduct',
    data(){
        return{
            product: this.item
        }
    },
    props: ['item'],
    methods: {
        ...mapActions(['getProducts','deleteProduct']),
        async clearProduct(params){
            await this.deleteProduct(params);
            await this.getProducts();
            $('#delete').modal('hide');
        }
    }
}
</script>
