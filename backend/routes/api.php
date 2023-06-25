<?php

use App\Http\Controllers\api\CarroController;
use App\Http\Controllers\api\DefeitoController;

Route::get('carros', [CarroController::class, 'index']);
Route::get('carros/{id}', [CarroController::class, 'show']); 
Route::get('carros/{filter}/{searchTerm}', [CarroController::class, 'search']); 
Route::post('carros', [CarroController::class, 'store']);
Route::put('carros/{id}', [CarroController::class, 'update']);
Route::delete('carros/{id}', [CarroController::class, 'destroy']); 

Route::get('defeitos/{carroId}', [DefeitoController::class, 'search']);
Route::post('defeitos', [DefeitoController::class, 'store']);