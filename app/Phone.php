<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Contact;
class Phone extends Model
{
    public function Contact (){
        return $this->belongsTo('App/Contact');
    }
}
