<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ThemeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('themes')->insert([
            [
                'name'              => 'default',
                'slug'              => 'default',
                'color'             => '#007bff7',
                'version'           => '1.0.0',
                'created_at'        => now(),
                'updated_at'        => now(),
            ],
            [
                'name'              => 'doko',
                'slug'              => 'doko',
                'color'             => '#007bff',
                'version'           => '1.0.0',
                'created_at'        => now(),
                'updated_at'        => now(),
            ]
        ]);
    }
}
