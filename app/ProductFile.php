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
    protected $fillable = ['type','size','path','product_id'];

    public function product()
    {
      return $this->belongsTo(Product::class);
    }
}
