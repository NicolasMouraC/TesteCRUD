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
            $table->id();
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

        Schema::create('defeitos', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('carro_id');
            $table->string('Titulo');
            $table->string('Descricao');
            $table->string('Gravidade');
            $table->timestamps();

            $table->foreign('carro_id')->references('id')->on('carros')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('carros');
        Schema::dropIfExists('defeitos');
    }
};
