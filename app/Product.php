<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $fillable = [
        '_token', 'name', 'trademark', 'price', 'quantity',
        'unit_of_measurement', 'category', 'description',
        'images', 'imgUrl'
    ];
    protected $hidden = [
        'created_at',
        'updated_at'
    ];

    public function purchases(){
       return $this->belongsToMany(Purchase::class);
    }
    public function sales(){
       return $this->belongsToMany(Sale::class);
    }
}
