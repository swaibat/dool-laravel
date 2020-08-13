<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('products')->insert([
            'title'                 => 'title',
            'price'                 => '2000',
            'discount'              => '30',
            'discount_type'         => 'percentage',
            'sku'                   => 'DL-13243HD',
            'collection_id'         => '1,3',
            'vendor_id'             => '1',
            'description'           => 'description',
            'category_id'           => '1',
            'status'                => 'status',
            'seo_title'             => 'seo_title',
            'seo_description'       => 'seo_description',
            'social_title'          => 'social_title',
            'social_description'    => 'social_description',
            'sizes'                 => 'sizes',
            'materials'             => 'materials',
            'colors'                => 'colors'
        ]);
    }
}
