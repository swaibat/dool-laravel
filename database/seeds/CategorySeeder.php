<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('categories')->insert([
            [
                'name'          => 'vehicles',
                'slug'          => Str::slug('vehicles'),
                'parent_id'     => null,
                'image'         => null,
                'created_at'    => now(),
                'updated_at'    => now(),
            ],
            [
                'name'          => 'cars',
                'slug'          => Str::slug('cars'),
                'parent_id'     => 1,
                'image'         => null,
                'created_at'    => now(),
                'updated_at'    => now(),
            ],
            [
                'name'          => 'motocycles & scooters',
                'slug'          => Str::slug('motocycles & scooters'),
                'parent_id'     => 1,
                'image'         => null,
                'created_at'    => now(),
                'updated_at'    => now(),
            ],
            [
                'name'          => 'boats & aviation',
                'slug'          => Str::slug('boats & aviation'),
                'parent_id'     => 1,
                'image'         => null,
                'created_at'    => now(),
                'updated_at'    => now(),
            ],
            [
                'name'          => 'fashon',
                'slug'          => Str::slug('fashion'),
                'parent_id'     => null,
                'image'         => null,
                'created_at'    => now(),
                'updated_at'    => now(),
            ],
            [
                'name'          => 'shoes',
                'slug'          => Str::slug('shoes'),
                'parent_id'     => 5,
                'image'         => null,
                'created_at'    => now(),
                'updated_at'    => now(),
            ],
            [
                'name'          => 'dresses',
                'slug'          => Str::slug('dresses'),
                'parent_id'     => 5,
                'image'         => null,
                'created_at'    => now(),
                'updated_at'    => now(),
            ],
            [
                'name'          => 'pants',
                'slug'          => Str::slug('pants'),
                'parent_id'     => 5,
                'image'         => null,
                'created_at'    => now(),
                'updated_at'    => now(),
            ]
        ]);
    }
}
