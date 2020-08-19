<?php

namespace App\Http\Resources;

use App\Category;
use App\Product;
use Illuminate\Http\Resources\Json\JsonResource;

class CategoryResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        if (!$this->parent_id) {
            $sub_id = [$this->id];
            foreach ($this->subs as $sub) {
                $sub['products'] = new ProductResourceCollection(Product::where('category_id', $sub['id'])->get());
                $sub_id[] =  $sub['id'];
            }
            $data = [
                'id'                => $this->id,
                'name'              => $this->name,
                'slug'              => $this->slug,
                'sub'               => $this->subs,
                'products'          => new ProductResourceCollection(Product::whereIn('category_id', $sub_id)->get()),
                'created_at'        => $this->created_at,
                'updated_at'        => $this->updated_at,
            ];
            return $data;
        }
    }
}
