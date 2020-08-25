<?php

namespace App\Http\Resources;

use App\Collection;
use App\Store;
use Illuminate\Http\Resources\Json\JsonResource;
use App\User;

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
        // $product['collection'] = Collection::whereIn('id', json_decode($this->collection_id))->get();
        $product['vendor'] = Store::where('user_id', $this->user_id)->firstOrFail();
        $product['files'] = $this->files;
        return $product;
    }
}
