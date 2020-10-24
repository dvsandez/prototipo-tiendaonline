<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Sale extends Model
{
    public function products(){
        return $this->belongsToMany(Product::class)->withTimestamps();
    }

    public function shopper(){
        return $this->belongsTo(Shopper::class);
    }
}
