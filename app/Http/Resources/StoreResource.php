<?php

namespace App\Http\Resources;

use App\Category;
use App\Product;
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
        // $store['products'] = new ProductResourceCollection(Product::where('user_id', $this->user_id)->get());
        $categories = Category::find($this->category_id)->get();
        // return $categories;
        $data = [];
        foreach ($categories as $category) {
            // return $category['id'];
            if (!$category->parent_id) {
                // $data[] = $category->id;
                $sub_id = [$category->id];
                foreach ($category->subs as $sub) {
                    $sub['products'] = new ProductResourceCollection(Product::where(['category_id' => $sub['id'], 'user_id' => $category->user_id])->get());
                    $sub_id[] =  $sub['id'];
                }
                $data[] = [
                    'id'                => $category->id,
                    'name'              => $category->name,
                    'slug'              => $category->slug,
                    'sub'               => $category->subs,
                    'products'          => new ProductResourceCollection(Product::whereIn('category_id', $sub_id)->get()),
                ];
            }
        }
        $store['categories'] = $data;


        // $products = [];
        // foreach ($store['category'] as $category) {
        //     if (!empty($category['products'])) {
        //         foreach ($category['products'] as $product) {
        //             if ($product['user_id'] == $category->user_id) {
        //                 $products[] = $product;
        //             } else {
        //                 $products[] = null;
        //             }
        //         }
        //     }
        // }
        // $store['category']['products'] = $products;
        return $store;
    }
}
