<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePhoneNumberTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('phone_book_contact', function (Blueprint $table) {
            $table->increments('id')->unsigned();
            $table->integer('number')->unsigned();
            $table->integer('contact_id');
            $table->foreign('contact_id')->references('id')->on('phone_book_contact')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
