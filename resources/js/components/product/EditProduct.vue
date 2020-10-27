<template>
    <form @submit.prevent="completedUpdate(form)" enctype="multipart/form-data" class="card m-8">
        <div class="modal fade" id="edit">
            <div class="modal-dialog">
                <div class="modal-content">

                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal">
                            <span>&times;</span>
                        </button>
                    </div>

                    <div class="modal-body">
                        <input type="hidden" name="_token" :value="form._token"/>
                        <div class="form-group row">
                            <label class="col-md-3" for="nombre-prod"> NomBre: </label>
                                <input v-model="form.name" type="text" class="form-control col-md-7" id="nombre-prod" name="name" placeholder="Ej: gaseosa">
                        </div>

                        <div class="form-group row">
                            <label class="col-md-3" for="marca-prod"> Marca:</label>
                                <input v-model="form.trademark" type="text" class="form-control col-md-7" id="marca-prod" name="trademark" placeholder="Ej: Coca-cola">

                        </div>

                        <div class="form-group row">
                            <label class="col-md-3" for="precio-prod"> Precio:</label>
                                <input v-model="form.price" type="number" class="form-control col-md-7" id="precio-prod" name="price" placeholder="Ej: $100">

                        </div>

                        <div class="form-group row">
                            <label class="col-md-3" for="cantidad-prod"> Cantidad: </label>
                                <input v-model="form.quantity" type="number" class="form-control col-md-7" id="cantidad-prod" name="quantity" placeholder="Ej: 3">

                        </div>

                        <div class="form-group row">
                            <label class="col-md-3" for="unidad-prod"> Unidad:  </label>
                                <input v-model="form.unit_of_measurement" type="text" class="form-control col-md-7" id="unidad-prod" name="unit_of_measurement" placeholder="Ej: litros">

                        </div>

                        <div class="form-group row">
                            <label class="col-md-3" for="categoria-prod"> Categoría: </label>
                                <input v-model="form.category" type="text" class="form-control col-md-7" id="categoria-prod" name="category" placeholder="Ej: alimento">

                        </div>

                        <div class="form-group row">
                            <label class="col-md-3" for="descripcion-prod"> Breve descripción: </label>
                                <input v-model="form.description" type="text" class="form-control col-md-7" id="descripcion-prod" name="description" placeholder="Ej: botella de plástico">
                        </div>

                        <div class="form-group row">
                            <label class="col-md-5" for="images-prod"> Imagen del producto: </label>
                                <input type="file" class="form-control-file col-md-5" id="images-prod" @change="loadImage" accept="image/*">
                        </div>

                    </div>

                    <div class="modal-footer">
                        <button type="submit" class="btn btn-primary"> Guardar cambios </button>
                        <a class="btn btn-danger" @click.prevent="cancelEdit">Cancelar edición </a>
                    </div>

                </div>
            </div>
        </div>
    </form>

</template>

<script>
import { mapActions, mapState } from "vuex";

    export default {
        name: 'EditProduct',
        data(){
            return{
                form: this.item
            }
        },
        props: ['item'],
        computed: {
            ...mapState(['selected_item']),
        },
        methods: {
            ...mapActions(['updateProduct', 'getProducts']),
            loadImage(e){
                let file = e.target.files[0];
                this.form.images = file;
            },
            async completedUpdate(form){
                await this.updateProduct(form);
                await this.getProducts();
                $('#edit').modal('hide');
            },
            async cancelEdit(){
                console.log(this.item);
                $('#edit').modal('hide');
                await this.getProducts();
            }
        }
    }
</script>


