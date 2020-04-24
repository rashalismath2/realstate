<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SalesItem extends Model
{
    public function user(){
        return $this->belongsTo("App\User","user_id");
    }
    public function city(){
        return $this->belongsTo("App\City","city_id");
    }
}
