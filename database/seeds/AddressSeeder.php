<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class AddressSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('addresses')->insert([
            'full_address'      => 'San Francisco,US',
            'address_line_1'    => '123 Townsend St',
            'address_line_2'    => 'Floor 6',
            'admin_area_2'      => 'CA',
            'admin_area_1'      => 'San Francisco',
            'postal_code'       => '94107',
            'country'           => 'US',
            'user_id'           => 1,
            'created_at'        => now(),
            'updated_at'        => now(),
        ]);
    }
}
