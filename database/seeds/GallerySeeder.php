<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class GallerySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('galleries')->insert([
            [
                'name'              => 'system',
                'slug'              => 'system',
                'public'            => '0',
                'description'       => 'this is the description',
                'user_id'           => 1,
                'created_at'        => now(),
                'updated_at'        => now(),
            ],
            [
                'name'              => 'slider',
                'slug'              => 'slider',
                'public'            => '0',
                'description'       => 'company images for slider',
                'user_id'           => 1,
                'created_at'        => now(),
                'updated_at'        => now(),
            ],
            [
                'name'              => 'profile',
                'slug'              => 'profile',
                'public'            => '1',
                'description'       => 'company profile gallery',
                'user_id'           => 1,
                'created_at'        => now(),
                'updated_at'        => now(),
            ],

            [
                'name'              => 'banner',
                'slug'              => 'banner',
                'public'            => '0',
                'description'       => 'company banners',
                'user_id'           => 1,
                'created_at'        => now(),
                'updated_at'        => now(),
            ]
        ]);
    }
}
