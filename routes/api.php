<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/user/login',"UserController@login");
Route::post('/user/register',"UserController@register");
Route::get('/user/logout',"UserController@logout");

Route::post("/ad","AdController@create");
Route::get("/ad","AdController@index");