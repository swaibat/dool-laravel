<?php

namespace App\Http\Resources;

use App\ProductFile;
use App\Product;
use Illuminate\Http\Resources\Json\ResourceCollection;

class ProductResourceCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'data' =>parent::toArray($request),
            'files'=> Product::find(1)->files(),
        ];
    }
}
