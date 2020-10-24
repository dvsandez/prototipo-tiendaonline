<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProvidersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('providers', function (Blueprint $table) {
            $table->id();
            $table->string("name");
            $table->string("categoty")->nullable();
            $table->bigInteger("phone")->unsigned()->nullable();
            $table->bigInteger("location")->unsigned()->nullable();
            $table->bigInteger("email")->unsigned()->nullable();
            $table->string("images")->nullable();
            $table->timestamps();
        });
        Schema::table('purchases', function (Blueprint $table) {
            $table->bigInteger("providers_id")->unsigned();
            $table->foreign("providers_id")->references("id")->on("providers")
                    ->onDelete("cascade")
                    ->onUpdate("cascade");
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('providers');
    }
}
