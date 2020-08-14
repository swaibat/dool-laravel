<?php

namespace App\Http\Controllers;

use App\Collection;
use App\Http\Resources\CollectionResource;
use App\Http\Resources\CollectionResourceCollection;
use App\Http\Resources\ProductResource;
use Illuminate\Http\Request;

class CollectionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(): CollectionResourceCollection
    {
        return new CollectionResourceCollection(Collection::paginate());
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
        ]);
        $collection = Collection::create($request->all());
        return new CollectionResource($collection);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Collection  $collection
     * @return \Illuminate\Http\Response
     */
    public function show(Collection $collection): CollectionResource
    {
        return new CollectionResource($collection);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Collection  $collection
     * @return \Illuminate\Http\Response
     */
    public function edit(Collection $collection)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Collection  $collection
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Collection $collection)
    {
        $collection->update($request->all());
        return new CollectionResource($collection);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Collection  $collection
     * @return \Illuminate\Http\Response
     */
    public function destroy(Collection $collection)
    {
        $collection->delete();
        return response()->json(['status' => 200, 'message' => 'product deleted successfully']);
    }
}
