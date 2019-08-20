<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Contact;
class Phone extends Model
{
    protected $table = 'phone_book_number';

    public function contact (){
        return $this->belongsTo('App/Contact');
    }
}
