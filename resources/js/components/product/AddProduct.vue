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
                <label class="col-md-7" for="images-prod"> Imagen del producto: </label>
                    <img :src="dragImage" alt="">
                    <div class="col-md-4 bg-success" style="position:relative; margin:30px; padding:9px; border-radius:8px; height:60px; width:150px;">
                        <p style="text-align: center; color: white; font-size: 22px; cursor: pointer;"> <i> Buscar imagen </i> </p>
                        <input type="file" style="position:absolute; top:0px; left:0px; right:0px; bottom:0px; width:100%; height:100%; cursor:pointer; opacity:0;" id="images-prod" accept="image/*" @change="loadImage">
                    </div>
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
                imageUrl: "",
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
        computed: {
            dragImage: function(){
                return this.imageUrl;
            }
        },
        methods: {
            ...mapActions(['addProduct']),
            loadImage(e){
                let file = e.target.files[0];
                this.form.images = file;
                this.readImage(file);
            },
            readImage(file){
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.imageUrl = e.target.result;
                }
                reader.readAsDataURL(file);
            },
            async saveProduct(){
                await this.addProduct(this.form);
                this.$router.push({name: 'list-product'});
            }
        }
    }
</script>
