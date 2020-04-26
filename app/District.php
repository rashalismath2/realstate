<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class District extends Model
{
    protected $guarded = [ ];
    public function cities(){
        return $this->hasMany("App\City");
    }
}
