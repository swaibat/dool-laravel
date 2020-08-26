<?php

namespace App\Http\Controllers;

use App\Category;
use App\Http\Resources\CategoryResource;
use App\Http\Resources\CategoryResourceCollection;
use Illuminate\Support\Str;
use App\StoreFiles;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json([
            'status' => 200,
            'data' => new CategoryResourceCollection(Category::all())
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
        $request->validate([
            'name'          => 'required|unique:categories|max:255|min:3',
            'parent_id'     => 'nullable|exists:App\Category,id',
            'image'         => 'nullable',
        ]);
        $request['slug'] = Str::slug($request['name']);
        $category = Category::create($request->all());
        if ($request->hasfile('image')) {
            $path = $request->file('image')->store('public/categories');
            StoreFiles::create([
                'name'          => Str::of($path)->replaceFirst('public', '/storage'),
                'label'         =>'categories',
                'type'          => $request->file('image')->extension(),
                'size'          => $request->file('image')->getSize(),
                'category_id'   => $category->id
            ]);
        }
        return response()->json([
            'status' => 200,
            'message' => 'category created successfully',
            'data' => new CategoryResource($category)
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function show(Category $category)
    {
        return new CategoryResource($category);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function edit(Category $category)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Category $category)
    {
        $category->update($request->all());
        return new CategoryResource($category);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Category  $category
     * @return \Illuminate\Http\Response
     */
    public function destroy(Category $category)
    {
        $category->delete();
        return response()->json(['status' => 200, 'message' => 'category deleted successfully']);
    }
}
