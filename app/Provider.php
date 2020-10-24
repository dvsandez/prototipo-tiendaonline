<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Provider extends Model
{
    public function purcheses(){
        return $this->hasMany(Purchase::class);
    }
}
