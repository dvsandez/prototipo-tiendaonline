<?php

//use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('inicio');
})->name('inicio');

Auth::routes();

Route::get('/admin/{options?}/{params?}', 'AdminController@index')->name('admin')->middleware('auth');

Route::resource('/admin_products', 'ProductController')->except(['create', 'show', 'edit'])->middleware('auth');
