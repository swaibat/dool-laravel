<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CouponSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('coupons')->insert([
            'name'          => 'summer sale',
            'type'          => 'sale',
            'code'          => 'SUMMER-17-2020-DL',
            'offer'         => '20',
            'valid_from'    => now(),
            'valid_to'      => null,
            'apply_to'      => 'specific_products',
            'apply_value'   => '[1]',
            'buy_x_get_y'   => null,
            'user_id'       => 1,
            'uses'          => null,
            'created_at'    => now(),
            'updated_at'    => now(),
        ]);
    }
}
