<?php

namespace App\Http\Resources;

use App\Product;
use Illuminate\Http\Resources\Json\JsonResource;

class CollectionResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $collection = parent::toArray($request);
        $collection['products'] = new ProductResourceCollection(Product::whereJsonContains('collection_id', $this->id)->get());
        return $collection;

    }
}
