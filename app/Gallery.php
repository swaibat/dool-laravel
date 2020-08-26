<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Gallery extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['name', 'slug', 'description', 'public', 'user_id'];

    // default route key
    public function getRouteKeyName()
    {
        return 'slug';
    }

    public function files()
    {
        return $this->hasMany(StoreFile::class);
    }
}
