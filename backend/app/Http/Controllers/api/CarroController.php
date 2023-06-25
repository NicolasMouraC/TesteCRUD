<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Log;
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

        $carro->Modelo = $request->input('Modelo');
        $carro->Ano = $request->input('Ano');
        $carro->NumAssentos = $request->input('NumAssentos');
        $carro->TipoCombustivel = $request->input('TipoCombustivel');
        $carro->Categoria = $request->input('Categoria');
        $carro->Marca = $request->input('Marca');
        $carro->Motor = $request->input('Motor');
        $carro->Cor = $request->input('Cor');

        
        $carro->save();


        //$carro->update($request->all());
    }

    public function updatePicture(Request $request, string $id) {
        $carro = Carro::findOrFail($id);
        Log::info($request);

            $novaImagem = $request->file('image');
                
            // Gere um nome único para o arquivo
            $nomeImagem = uniqid().'.'.$novaImagem->getClientOriginalExtension();
            
            // Salve a nova imagem
            Storage::disk('public')->putFileAs('/', $novaImagem, $nomeImagem);

            
            // Atualize o nome da imagem na entrada do carro
            $carro->Imagem_url = $nomeImagem;

        
        $carro->save();
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
