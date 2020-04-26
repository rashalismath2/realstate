<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class City extends Model
{
    protected $guarded = [ ];
    public function district(){
        return $this->belongsTo("App\District","district_id");
    }
}
