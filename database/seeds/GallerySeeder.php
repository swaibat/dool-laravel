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
            'name'              => 'general',
            'slug'              => 'general',
            'description'       => 'this is the description',
            'user_id'           => 1,
            'created_at'        => now(),
            'updated_at'        => now(),
        ]);
    }
}
