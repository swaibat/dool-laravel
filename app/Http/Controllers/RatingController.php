<?php

namespace App\Http\Controllers;

use App\Rating;
use Illuminate\Http\Request;

class RatingController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request['user_id'] = auth('api')->user()->id;
        $request->validate([
            'value'                 => 'required|max:5|min:0',
            'feedback'              => 'required',
            'product_id'            => 'required|exists:App\Product,id',
            'user_id'               => 'required|exists:App\User,id'
        ]);
        $rating = Rating::create($request->all());
        return response()->json([
            'status' => 201,
            'message' => 'rating added successfully',
            'data' => $rating
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Rating  $rating
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Rating $rating)
    {
        $rating = $rating->update($request->all());
        return response()->json([
            'status' => 201,
            'message' => 'rating added successfully',
            'data' => $rating
        ]);
    }
}
