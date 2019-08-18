<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Phone;
class Contact extends Model
{
    public function Phone(){
        return $this->hasMany('App/Phone', 'user_id');
    }
}
