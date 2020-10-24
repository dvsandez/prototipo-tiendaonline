<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Purchase extends Model
{
    public function products(){
        return $this->belongsToMany(Product::class)->withTimestamps();
    }

    public function provider(){
        return $this->belongsTo(Provider::class);
    }
}
