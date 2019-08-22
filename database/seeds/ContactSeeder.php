<?php

use App\Contact;
use App\Phone;
use Illuminate\Database\Seeder;

class ContactSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('phone_book_contact')->insert([
            [
                'id' => 1,
                'first_name' => 'Name1',
                'last_name' => 'SureName1',
                'email' => 'name1@example.com',
                'photo_contact' => '',
                'company' => '',
                'birth_day' => new DateTime(),
            ],
            [
                'id' => 2,
                'first_name' => 'Name2',
                'last_name' => 'SureName2',
                'email' => 'name2@example.com',
                'photo_contact' => '',
                'company' => '',
                'birth_day' => new DateTime(),
            ],
            [
                'id' => 3,
                'first_name' => 'Name3',
                'last_name' => 'SureName3',
                'email' => 'name3@example.com',
                'photo_contact' => '',
                'company' => '',
                'birth_day' => new DateTime(),
            ]
        ]);
    }
}
