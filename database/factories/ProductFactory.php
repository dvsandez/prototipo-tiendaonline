<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model;
use Faker\Generator as Faker;

$factory->define(App\Product::class, function (Faker $faker) {
    return [
        "name" => $faker->text(10),
        "trademark" => $faker->text(12),
        "price" => rand(10, 150),
        "quantity" => rand(20, 500),
        "unit_of_measurement" => $faker->randomElement(["gr.", "kg.", "lt."]),
        "category" => $faker->randomElement(["food", "cleaning", "electricity", "work"]),
        "description" => $faker->text(180),
        "images" => $faker->imageUrl($width=1200, $height=400 ),
        "stock" => rand(0, 70)
    ];
});
/* $table->id();
$table->string("name");
$table->string("trademark");
$table->integer("price");
$table->integer("quantity");
$table->string("unit_of_measurement");
$table->enum("category", ["food", "cleaning", "electricity", "work"])->default("food");
$table->string("description")->nullable();
$table->string("images")->nullable();
$table->integer("stock");
$table->timestamps(); */
