<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('products', 'ProductController');
Route::resource('collections', 'CollectionController');
Route::resource('coupons', 'CouponController');
Route::resource('categories', 'CategoryController');
Route::resource('payments', 'PaymentController');
Route::resource('orders', 'OrderController');
Route::resource('favourite', 'FavouriteController');
Route::resource('users', 'UserController');
Route::resource('stores', 'StoreController');
// Route::get('register', 'Auth\RegisterController@index');
// Route::group(['prefix' => 'Auth'], function () {
//     Route::post('register', 'RegisterController@create');
//     Route::post('login', 'AuthController@login');
//     Route::get('logout', 'AuthController@logout');
//     Route::get('user', 'AuthController@getAuthUser');
// });
