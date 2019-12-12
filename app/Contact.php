<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    protected $fillable = [
        "first_name",
        "last_name",
        "company",
        "email",
        "photo_contact",
        "birth_day"
    ];
    public $timestamps = false;
    protected $table = 'phone_book_contact';

    public function phones(){
        return $this->hasMany('App\Phone');
    }
}
