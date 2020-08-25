<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class StoreFilesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('store_files')->insert([[
            'path'          => '/storage/gallery/EZLrQr6h64YdajxwkLzVXZ71nsR4eIyEaTa3vhi1.jpeg',
            'type'          => 'images/png',
            'size'          => '239',
            'gallery_id'    => 1,
            'created_at'    => now(),
            'updated_at'    => now(),
        ], [
            'path'          => '/storage/gallery/j93FvqcuiyX1IjrQEosHxK6O4ynBYodHaJdK15RZ.png',
            'type'          => 'images/png',
            'size'          => '239',
            'gallery_id'    => 1,
            'created_at'    => now(),
            'updated_at'    => now(),
        ]]);
    }
}
