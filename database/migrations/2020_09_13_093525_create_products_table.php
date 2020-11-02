<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string("name");
            $table->string("trademark");
            $table->integer("price");
            $table->integer("quantity");
            $table->string("unit_of_measurement");
            $table->enum("category", ["food", "cleaning", "electricity", "work"])->default("food");
            $table->string("description")->nullable();
            $table->string("images")->nullable();
            $table->string("imgUrl")->nullable();
            $table->integer("stock");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
}
