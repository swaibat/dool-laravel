<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RatingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('ratings')->insert([
            [
                'value'             => 3,
                'feedback'          => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                'user_id'           => 1,
                'product_id'        => 1,
                'created_at'        => now(),
                'updated_at'        => now(),
            ], [
                'value'             => 5,
                'feedback'          => 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                'user_id'           => 2,
                'product_id'        => 1,
                'created_at'        => now(),
                'updated_at'        => now(),
            ]
        ]);
    }
}
