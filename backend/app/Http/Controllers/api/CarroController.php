<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Carro;

class CarroController extends Controller
{

    public function index()
    {
        return Carro::all();
    }


    public function store(Request $request)
    {
        Carro::create($request->all());
    }

    public function show(string $id)
    {
        return Carro::findOrFail($id);
    }

    public function update(Request $request, string $id)
    {
        $carro = Carro::findOrFail($id);
        $carro->update($request->all());
    }

    public function search(string $filter, string $searchTerm) {
        $result = Carro::where($filter, 'LIKE', '%' . $searchTerm . '%')->get();

        return $result;
    }

    public function destroy(string $id)
    {
        $carro = Carro::findOrFail($id);
        $carro->delete();
    }
}
