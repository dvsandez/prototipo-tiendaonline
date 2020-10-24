<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateShoppersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('shoppers', function (Blueprint $table) {
            $table->id();
            $table->string("name");
            $table->bigInteger("phone")->unsigned()->nullable();
            $table->bigInteger("location")->unsigned()->nullable();
            $table->bigInteger("email")->unsigned()->nullable();
            $table->string("images")->nullable();
            $table->timestamps();
        });
        Schema::table('sales', function (Blueprint $table) {
            $table->bigInteger("shoppers_id")->unsigned();
            $table->foreign("shoppers_id")->references("id")->on("shoppers")
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
        Schema::dropIfExists('shoppers');
    }
}
