<template>
    <div>
            <router-view/>
    </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'App' ,
  computed: {
      ...mapState(['nombre'])
  }
}
</script>

<style>
ul li .router-link-exact-active{
  background-color: red;
}
</style>
