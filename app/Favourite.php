<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Favourite extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['product_id', 'user_id'];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    // protected $hidden = ['user_id', 'product_id', 'created_at', 'updated_at'];

    // public function user()
    // {
    //   return $this->belongsTo(User::class);
    // }

    public function product()
    {
      return $this->belongsTo(Product::class);
    }
}
