<?php

use App\Phone;
use Illuminate\Database\Seeder;

class ContactNumberSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('phone_book_number')->insert([
            [
                'id' => 1,
                'number' => 333,
                'contact_id' => 1,
            ],
            [
                'id' => 2,
                'number' => 333111,
                'contact_id' => 2,
            ],
            [
                'id' => 3,
                'number' => 333222111,
                'contact_id' => 3,
            ],
        ]);
    }
}
