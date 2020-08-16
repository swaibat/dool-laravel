<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'contact_names',
        'contact_phone',
        'products_list',
        'address_id',
        'payment_id',
        'user_id',
    ];

    public function address()
    {
        return $this->hasOne(Address::class);
    }

    public function payment()
    {
        return $this->hasOne(Payment::class);
    }

    public function user()
    {
        return $this->hasOne(User::class);
    }
}
