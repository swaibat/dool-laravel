<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    protected $table = 'products';
    protected $primaryKey = 'id';
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['title', 'slug', 'price', 'discount', 'discount_type', 'sku', 'collection_id', 'user_id', 'description', 'category_id', 'status', 'seo_title', 'seo_description', 'social_title', 'social_description', 'sizes', 'materials', 'colors'];

    // default route key
    public function getRouteKeyName()
    {
        return 'slug';
    }
    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'user_id', 'collection_id'
    ];

    public function files()
    {
        return $this->hasMany(ProductFile::class);
    }

    public function collection()
    {
        return $this->belongsTo(Collection::class);
    }

    public function category()
    {
        return $this->belongsTo(Category::class);
    }
    public function favourite()
    {
        return $this->hasOne(favourite::class);
    }
}
