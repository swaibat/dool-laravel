<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Coupon extends Model
{
   /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'type',
        'code',
        'offer',
        'valid_from',
        'valid_to',
        'apply_to',
        'apply_value',
        'user_id',
        'uses',
        'created_at',
        'updated_at',
    ];
}
