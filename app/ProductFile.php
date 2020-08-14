<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProductFile extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['name', 'type','size','product_id'];

    public function product()
    {
      return $this->belongsTo(Product::class);
    }
}
