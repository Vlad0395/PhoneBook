<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use App\Contact;
class Phone extends Model
{
    protected $table = 'phone_book_number';
    protected $fillable = [
        "contact_id",
        "number",
    ];
    public $timestamps = false;

    public function contact (){
        return $this->belongsTo('App\Contact');
    }
}
