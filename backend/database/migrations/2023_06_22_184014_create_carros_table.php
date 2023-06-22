<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('carros', function (Blueprint $table) {
            $table->increments('id');
            $table->string('Modelo');
            $table->string('Ano');
            $table->string('NumAssentos');
            $table->string('TipoCombustivel');
            $table->string('Categoria');
            $table->string('Marca');
            $table->string('Motor');
            $table->string('Cor');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('carros');
    }
};
