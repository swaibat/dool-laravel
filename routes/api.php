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
Route::resource('galleries', 'GalleryController');
// Route::get('register', 'Auth\RegisterController@index');
// Route::group(['prefix' => 'Auth'], function () {
//     Route::post('register', 'RegisterController@create');
//     Route::post('login', 'AuthController@login');
//     Route::get('logout', 'AuthController@logout');
//     Route::get('user', 'AuthController@getAuthUser');
// });


Route::prefix('v1')->group(function () {
    Route::prefix('auth')->group(function () {
        // Below mention routes are public, user can access those without any restriction.
        // Create New User
        Route::post('register', 'Auth\RegisterController@register');
        // Login User
        Route::post('login', 'Auth\LoginController@login');

        // Refresh the JWT Token
        Route::get('refresh', 'AuthController@refresh');

        // Below mention routes are available only for the authenticated users.
        Route::middleware('auth:api')->group(function () {
            // Get user info
            Route::get('user', 'AuthController@user');
            // Logout user from application
            Route::post('logout', 'AuthController@logout');
        });
    });
});
