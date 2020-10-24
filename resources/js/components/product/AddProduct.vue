<template>
    <div>
        <form @submit.prevent="saveProduct" enctype="multipart/form-data" class="card m-4">

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
                    <input type="file" class="form-control-file col-md-5" id="images-prod" accept="image/*" @change="loadImage">
            </div>

            <div>
            <input class="btn btn-primary" type="submit" value="enviar datos">
            </div>
        </form>

    </div>

</template>

<script>
import { mapActions, mapState } from "vuex";

    export default {
        name: 'AddProduct',
        data(){
            return{
                form: {
                _token: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
                name: "",
                trademark: "",
                price: "",
                quantity: "",
                unit_of_measurement: "",
                category: "",
                description: "",
                images: ""
                }
            }
        },
        methods: {
            ...mapActions(['addProduct']),
            loadImage(e){
                let file = e.target.files[0];
                this.form.images = file;
            },
            async saveProduct(){
                await this.addProduct(this.form);
                this.$router.push({name: 'list-product'});
            }
        }
    }
</script>
