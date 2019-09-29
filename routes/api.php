<?php

use Illuminate\Http\Request;


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => ['api']], function(){
    Route::resource('map', 'Api\MapController', ['except' => ['edit','create']]);
  });