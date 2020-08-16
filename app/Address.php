<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'full_address',
        'address_line_1',
        'address_line_2',
        'admin_area_2',
        'admin_area_1',
        'postal_code',
        'country',
        'user_id'
    ];

    public function order()
    {
      return $this->belongsTo(Order::class);
    }
}
