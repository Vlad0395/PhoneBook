<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/contacts', 'ContactsController@index');
Route::post('/contacts', 'ContactsController@create');
//Route::post('/contacts', 'ContactsController@uploadImg');
Route::patch('/contacts/{id}', 'ContactsController@update');
Route::get('/contacts/{id}', 'ContactsController@show');
Route::delete('/contacts/{id}', 'ContactsController@destroy');
Route::get('/phones/{id}', 'PhonesController@index');
Route::post('/phones', 'PhonesController@create');
Route::patch('/phones/{id}', 'PhonesController@update');
Route::delete('phones/{id}', 'PhonesController@destroy');
