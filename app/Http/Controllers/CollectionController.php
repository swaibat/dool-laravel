<?php

namespace App\Http\Controllers;

use App\Collection;
use App\Http\Resources\CollectionResource;
use App\Http\Resources\CollectionResourceCollection;
use App\Http\Resources\ProductResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class CollectionController extends Controller
{
    /**
     * Get a validator for an incoming request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name'                 => ['required', 'unique:collections', 'max:255', 'min:3'],
            'image.*'               => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048'
        ]);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json([
            'status' => 200,
            'data' => new CollectionResourceCollection(Collection::paginate())
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->validator($request->all())->validate();
        $path = $request->file('image')->store('collection');
        $collection = Collection::create(['name' => $request->input('name'), 'image' => $path]);
        return response()->json([
            'status' => 201,
            'message' => 'collection created successfully',
            'data' => new CollectionResource($collection)
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Collection  $collection
     * @return \Illuminate\Http\Response
     */
    public function show(Collection $collection)
    {
        return response()->json([
            'status' => 200,
            'data' => new CollectionResource($collection)
        ]);
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
        $this->validator($request->all())->validate();
        $path = $request->file('image')->store('collection');
        $collection = Collection::create(['name' => $request->input('name'), 'image' => $path]);
        return response()->json([
            'status' => 200,
            'message' => 'collection updated successfully',
            'data' => new CollectionResource($collection)
        ]);
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
        return response()->json(['status' => 200, 'message' => 'collection deleted successfully']);
    }
}
