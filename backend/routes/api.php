<?php

use App\Http\Controllers\api\CarroController;

Route::get('carros', [CarroController::class, 'index']);
Route::get('carros/{id}', [CarroController::class, 'show']); 
Route::post('carros', [CarroController::class, 'store']);
Route::put('carros/{id}', [CarroController::class, 'update']);
Route::delete('carros/{id}', [CarroController::class, 'destroy']); 