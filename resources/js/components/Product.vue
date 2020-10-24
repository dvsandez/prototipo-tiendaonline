<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header flex-around"><h2> Producto </h2>
                        <ul class="nav nav-tabs">
                            <li class="nav-item">
                                <router-link class="nav-link" :to="{name: 'list-product'}">
                                    Lista de productos
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" :to="{name: 'add-product'}">
                                    registrar producto
                                </router-link>
                            </li>
                        </ul>
                    </div>

                        <router-view></router-view>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Product',
        mounted() {
          //  console.log('Component mounted.')
        }
    }
</script>

<style>
ul li .router-link-exact-active{
  background-color: red;
}
</style>
