<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StoreSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('stores')->insert([
            [
                'name'              => 'dool',
                'slug'              =>  'dool',
                'address'           => 'new york, UK',
                'support_phone'     => '0758307272',
                'theme_id'          => 1,
                'category_id'       => 1,
                'user_id'           => 1,
                'about_text'        => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui ut ornare lectus sit.',
                'created_at'        => now(),
                'updated_at'        => now(),
            ],
            [
                'name'              => 'Conroy',
                'slug'              => 'conroy',
                'address'           => 'new york, UK',
                'support_phone'     => '+79(0)9583078456',
                'theme_id'          => 1,
                'category_id'       => 5,
                'user_id'           => 2,
                'about_text'        => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui ut ornare lectus sit.',
                'created_at'        => now(),
                'updated_at'        => now(),
            ]
        ]);
    }
}
