<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductFileSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('product_files')->insert([[
            'name'          => '/storage/products/EZLrQr6h64YdajxwkLzVXZ71nsR4eIyEaTa3vhi1.jpeg',
            'type'          => 'images/png',
            'size'          => '239',
            'product_id'    => 1,
            'created_at'   => now(),
            'updated_at'   => now(),
        ],[
            'name'          => '/storage/products/j93FvqcuiyX1IjrQEosHxK6O4ynBYodHaJdK15RZ.png',
            'type'          => 'images/png',
            'size'          => '239',
            'product_id'    => 2,
            'created_at'   => now(),
            'updated_at'   => now(),
        ]]);
    }
}
