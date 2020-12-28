<template>
    <form @submit.prevent="completedUpdate(form)" enctype="multipart/form-data" class="card m-8">
        <div class="modal fade" id="edit">
            <div class="modal-dialog">
                <div class="modal-content">

                    <div class="modal-header">
                        <h2>
                            Editar Producto
                        </h2>
                        <button type="button" class="close" data-dismiss="modal">
                            <span>&times;</span>
                        </button>
                    </div>

                    <div class="modal-body">
                        <input type="hidden" name="_token" :value="form._token"/>
                        <div class="form-group row">
                            <label class="col-md-3" for="nombre-prod"> Nombre: </label>
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
                            <label class="col-md-7" for="images-prod"> Imagen del producto:
                            </label>
                             <img :src="dragImage" width="700px" :alt="`${form.name}-${form.trademark}`">
                            <div class="col-md-4 bg-success" style="position:relative; margin:30px; padding:9px; border-radius:8px; height:60px; width:150px;">
                            <p style="text-align: center; color: white; font-size: 18px; cursor: pointer;"> <i> Buscar imagen </i> </p>
                            <input type="file" style="position:absolute; top:0px; left:0px; right:0px; bottom:0px; width:100%; height:100%; cursor:pointer; opacity:0;" id="images-prod" accept="image/*" @change="loadImage">
                                </div>
                        </div>

                    </div>

                    <div class="modal-footer">
                        <button type="submit" class="btn btn-primary" id="btn-send" > Guardar cambios </button>
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
                checkOriginalImg: true,
                form: this.item
            }
        },
        props: {
            item: {
                type: Object,
                default: null
            }
        },
        computed: {
    //        ...mapState(['selected_item']),
            dragImage: function(){
                let change = (this.checkOriginalImg) ? "storage/" : "";
                return change+this.form.imgUrl;
            }
        },
        methods: {
            ...mapActions(['updateProduct', 'getProducts']),
          /*   prepareUpdate(){
                if(document.getElementById('btn-send').attributes("disabled")){
                    console.log("ok, el atributo disabled existe")
                    if(this.form === this.item){
                        console.log("ok, has cambiado algo");

                    }
                }
            }, */
            loadImage(e){
                let file = e.target.files[0];
                this.form.images = file;
                this.readImage(file);
                this.checkOriginalImg = false;
            },
            readImage(file){
                const reader = new FileReader();
                reader.onload = (e) => {
                    this.form.imgUrl = e.target.result;
                }
                reader.readAsDataURL(file);
            },
            async completedUpdate(form){
                console.log(this.form)
                await this.updateProduct(form);
                await this.getProducts();
                $('#edit').modal('hide');
            },
            async cancelEdit(){
                console.log(this.form.imgUrl)
                console.log(this.form);
                $('#edit').modal('hide');
                await this.getProducts();
            }
        }
    }
</script>


