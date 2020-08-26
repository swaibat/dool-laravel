<?php

namespace App\Http\Resources;

use App\Category;
use App\Gallery;
use App\Product;
use App\Store;
use Illuminate\Http\Resources\Json\JsonResource;

class StoreResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $store = parent::toArray($request);
        $categories = Category::find($this->category_id)->get();
        $data = [];
        foreach ($categories as $category) {
            if (!$category->parent_id) {
                $sub_id = [$category->id];
                foreach ($category->subs as $sub) {
                    $sub['products'] = new ProductResourceCollection(Product::where([
                        'category_id' => $sub['id'], 'store_id' => $this->id
                    ])->get());
                    $sub_id[] =  $sub['id'];
                }
                $data = [
                    'id'                => $category->id,
                    'name'              => $category->name,
                    'slug'              => $category->slug,
                    'sub'               => $category->subs,
                    'products'          => new ProductResourceCollection(Product::whereIn('category_id', $sub_id)->get()),
                ];
            }
        }
        $store['gallery'] = new GalleryResourceCollection(Gallery::where(['user_id' => $this->user_id, 'public' => '1'])->get());
        $store['products'] = new ProductResourceCollection($this->products);
        $store['category'] = $data;
        return $store;
    }
}
