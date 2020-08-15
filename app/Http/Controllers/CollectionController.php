<?php

namespace App\Http\Controllers;

use App\Collection;
use App\Http\Resources\CollectionResource;
use App\Http\Resources\CollectionResourceCollection;
use App\Http\Resources\ProductResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

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
            'name'                 => ['required', 'unique:collections', 'max:255', 'min:3'],
            'image.*'               => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048'
        ]);
        $file       = $request->file('file');
        $name       = time() . '-' . $file->getClientOriginalName();
        $path       = public_path() . '/uploads/collections/';
        $file->move($path, $name);
        $request['image'] = $name;
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
