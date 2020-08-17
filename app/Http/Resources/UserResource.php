<?php

namespace App\Http\Resources;

use App\Favourite;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $user = parent::toArray($request);
        $user['favourite'] = new FavouriteResourceCollection(Favourite::where('user_id',$this->id)->get());
        return $user;
    }
}
