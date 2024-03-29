<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\CertController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::apiResource('/user', UserController::class);

Route::group(['middleware' => 'api',], function ($router) {

    Route::post('login', [AuthController::class, 'login']);
    Route::post('logout', [AuthController::class, 'logout']);
    Route::post('refresh', [AuthController::class, 'refresh']);
    Route::post('me', [AuthController::class, 'me']);
    Route::post('signup', [AuthController::class, 'signup']);

});

Route::group(['middleware' => 'auth:api', 'prefix' => 'admin'], function () {
    Route::apiResource('products', ProductController::class);
});

Route::get('/products', [ProductController::class, 'products']);
Route::get('/products/{id}', [ProductController::class, 'productDetails']);


Route::group(['middleware' => 'auth:api'], function () {
    Route::apiResource('certs', CertController::class);
    Route::get('certProducts/{user_id}', [CertController::class, 'certProducts']);
});

