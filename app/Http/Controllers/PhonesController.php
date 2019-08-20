<?php

namespace App\Http\Controllers;

use App\Phone;
use Illuminate\Http\Request;

class PhonesController extends Controller
{
    public function index()
    {
        $phones = Phone::all();
        return response()->json($phones);
    }
}
