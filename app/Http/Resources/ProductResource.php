<?php

namespace App\Http\Resources;

use App\Collection;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Product;
use App\User;

use function GuzzleHttp\json_decode;

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
        $product['collection'] = Collection::whereIn('id', json_decode($this->collection_id))->get();
        $product['vendor'] = User::find($this->vendor_id)->first();
        $product['files'] = $this->files;
        return $product;
    }
}
