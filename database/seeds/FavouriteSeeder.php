<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FavouriteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('favourites')->insert([[
            'product_id'        => 1,
            'user_id'           => 1,
            'created_at'        => now(),
            'updated_at'        => now(),
        ],
        [
            'product_id'        => 2,
            'user_id'           => 1,
            'created_at'        => now(),
            'updated_at'        => now(),
        ]]);
    }
}
