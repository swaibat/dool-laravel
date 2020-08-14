<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['title', 'slug', 'price', 'discount', 'discount_type', 'sku', 'collection_id', 'vendor_id', 'description', 'category_id', 'status', 'seo_title', 'seo_description', 'social_title', 'social_description', 'sizes', 'materials', 'colors'];

    public function files()
    {
      return $this->hasMany('App\ProductFile');
    //   return $this->hasMany(ProductFile::class);
    }
}
