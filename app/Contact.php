<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Phone;
class Contact extends Model
{
    protected $table = 'phone_book_contact';

    public function phones(){
        return $this->hasMany('App\Phone');
    }
}
