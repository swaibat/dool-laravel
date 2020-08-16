<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PaymentSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('payments')->insert([
            'txn_id'            => '9HL389832D146283G',
            'currency_code'     => 'USD',
            'payer_email'       => 'doe@example.com',
            'payment_method'    => 'paypal',
            'payment_status'    => 'COMPLETED',
            'amount'            => '220',
            'user_id'           => 1,
            'created_at'        => now(),
            'updated_at'        => now(),
        ]);
    }
}
