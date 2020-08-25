<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            UserSeeder::class, ProductSeeder::class, ProductFileSeeder::class, CollectionSeeder::class, CouponSeeder::class, CategorySeeder::class, OrderSeeder::class, PaymentSeeder::class, AddressSeeder::class, FavouriteSeeder::class, StoreSeeder::class, GallerySeeder::class, StoreFilesSeeder::class
        ]);
    }
}
