<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class OrderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('orders')->insert([
            'contact_names'     => 'John Doe',
            'contact_phone'     => '250758406575',
            'products_list'     => '[1]',
            'address_id'        => null,
            'payment_id'        => null,
            'user_id'           => 1,
            'created_at'        => now(),
            'updated_at'        => now(),
        ]);
    }
}
