<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Defeito;

class Carro extends Model
{
    protected $fillable = [
        'Imagem_url',
        'Modelo',
        'Ano',
        'NumAssentos',
        'TipoCombustivel',
        'Categoria',
        'Marca',
        'Motor',
        'Cor'
    ];

    public function defeitos() 
    {
        return $this->hasMany(Defeito::class);
    }

    public function getImagemUrlAttribute()
    {
        if ($this->imagem) {
            return Storage::disk('local')->url($this->Imagem_url);
        }
    }
}
