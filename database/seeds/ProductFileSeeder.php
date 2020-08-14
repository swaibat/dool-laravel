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
        DB::table('product_files')->insert([
            'name'          => '1597314236-Screenshot 2020-08-05 at 08.37.33.png',
            'type'          => 'images/png',
            'size'          => '239',
            'product_id'    => 1,
            'created_at'   => now(),
            'updated_at'   => now(),
        ]);
    }
}
