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
            $table->string('tiitle1')->nullable();
            $table->string('tiitle2')->nullable();
            $table->string('tiitle3')->nullable();
            $table->string('main_heading_1')->nullable();
            $table->string('main_heading_2')->nullable();
            $table->string('main_video')->nullable();
            $table->string('main_image')->nullable();
            $table->string('services_title')->nullable();
            $table->string('services_left_heading_1')->nullable();
            $table->string('services_left_heading_2')->nullable();
            $table->longText('services_cards')->nullable();
            $table->string('work_title')->nullable();
            $table->longText('work_card')->nullable();
            $table->longText('links')->nullable();
            $table->string('info_title_1')->nullable();
            $table->string('info_title_2')->nullable();
            $table->string('info_title_3')->nullable();
            $table->string('say_hi')->nullable();
            $table->longText('info_links')->nullable();
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
