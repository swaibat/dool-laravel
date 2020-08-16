<?php

namespace App\Http\Resources;

use App\Category;
use Illuminate\Http\Resources\Json\ResourceCollection;

class CategoryResourceCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $collection = parent::toArray($request);
        $categories =[];
        foreach ($collection as $category) {
            if ($category) {
                $categories[]= $category;
            }
        };
        return $categories;
    }
}
