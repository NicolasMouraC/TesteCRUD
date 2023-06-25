<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Carro;

class Defeito extends Model
{
    protected $fillable = [
        'Titulo',
        'Descricao',
        'Gravidade'
    ];

    public function carro()
    {
        return $this->belongsTo(Carro::class);
    }
}
