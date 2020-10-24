@extends('adminlte::page')

@section('title', 'Products')

@section('content_header')
    <div id="app">
            @{{ $store.state.numero }}
        <ul class="nav nav-tabs">
            <li class="nav-item">
              <router-link class="nav-link active" :to="{name: register}">REGISTRO</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="products/register">Registrar producto</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="#">Link</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link disabled" to="#" tabindex="-1" aria-disabled="true">Disabled</router-link>
            </li>
        </ul>
        <router-view/>

@endsection
@section('content')
    <div class="row justify-content-center mt-5">


    </div>
</div>
@endsection
