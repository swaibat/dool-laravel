<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductResource;
use App\Http\Resources\ProductResourceCollection;
use Illuminate\Support\Str;
use App\Product;
use App\ProductFile;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(): ProductResourceCollection
    {
        return new ProductResourceCollection(Product::all());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'title'                 => ['required', 'unique:products', 'max:255', 'min:5'],
            'price'                 => ['required', 'min:0.01'],
            'discount_type'         => ['min:0.01'],
            'discount'              => ['min:0.01'],
            'sku'                   => ['min:3'],
            'collection_id'         => ['nullable'],
            'vendor_id'             => ['integer'],
            'description'           => ['min:10'],
            'category_id'           => ['integer'],
            'status'                => ['min:0.01'],
            'seo_title'             => ['nullable', 'min:5'],
            'seo_description'       => ['nullable', 'min:10'],
            'social_title'          => ['nullable', 'min:5'],
            'social_description'    => ['nullable', 'min:10'],
            'files'                 => 'required',
            'files.*'               => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048'
        ]);
        $request['slug'] = Str::slug($request['title']);
        $product = Product::create($request->all());
        if ($request->hasfile('files')) {
            foreach ($request->file('files[]') as $file) {
                $name = time() . '-' . $file->getClientOriginalName();
                $path = public_path() . '/products/files/';
                $file->move($path, $name);
                ProductFile::create([
                    'name'          => $name,
                    'type'          => $file->extension(),
                    'size'          => $file->getSize(),
                    'product_id'    => $product->id
                ]);
            }
        }
        return new ProductResource($product);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function show(Product $product): ProductResource
    {
        return new ProductResource($product);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function edit(Product $product)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Product $product): ProductResource
    {
        $product->update($request->all());
        return new ProductResource($product);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Product  $product
     * @return \Illuminate\Http\Response
     */
    public function destroy(Product $product)
    {
        $product->delete();
        return response()->json(['status' => 200, 'message' => 'product deleted successfully']);
    }
}
