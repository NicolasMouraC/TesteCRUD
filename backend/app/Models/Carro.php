<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Defeito;

class Carro extends Model
{
    protected $fillable = [
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
}
