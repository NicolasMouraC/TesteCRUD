<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Defeito;
use App\Models\Carro;

class DefeitoController extends Controller
{

    public function store(Request $request)
    {
        $carro = Carro::findOrFail($request->input('carro_id'));

        $defeito = new Defeito();
        $defeito->Descricao = $request->input('Descricao');
        $defeito->Titulo = $request->input('Titulo');
        $defeito->Gravidade = $request->input('Gravidade');

        $carro->defeitos()->save($defeito);
    }

    public function search(string $carroId)
    {
        $result = Defeito::where('carro_id', $carroId)->get();

        return $result;
    }

    public function update(Request $request, string $id)
    {
        //
    }

    public function destroy(string $id)
    {
        //
    }
}
