<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMainheroesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('mainheroes', function (Blueprint $table) {
            $table->id();
            $table->string('main_name')->nullable();
            $table->string('main_name_url')->nullable();
            $table->text('main_desc')->nullable();
            $table->string('main_heading_1')->nullable();
            $table->string('strategy')->nullable();
            $table->longText('strategy_links')->nullable();
            $table->string('creation')->nullable();
            $table->longText('creation_links')->nullable();
            $table->string('production')->nullable();
            $table->text('production_links')->nullable();
            $table->longText('row_only_images')->nullable();
            $table->longText('footer_link')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('mainheroes');
    }
}
