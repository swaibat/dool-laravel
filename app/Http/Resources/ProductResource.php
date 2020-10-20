<?php

namespace App\Http\Resources;

use App\Store;
use App\User;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $product = parent::toArray($request);
        $product['files'] = $this->files;
        $product['store'] = Store::find($this->store_id);
        $product['ratings'] = new RatingResourceCollection($this->ratings);
        return $product;
    }
}
