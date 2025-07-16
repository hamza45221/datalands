<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDataLandsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('data_lands', function (Blueprint $table) {
            $table->id();
            $table->string('main_heading')->nullable();
            $table->string('main_video')->nullable();
            $table->string('main_heading_1')->nullable();
            $table->string('main_heading_2')->nullable();
            $table->string('case_studies_title')->nullable();
            $table->longText('case_studies_cards')->nullable();
            $table->string('work_title')->nullable();
            $table->string('services_title')->nullable();
            $table->longText('services_list')->nullable();
            $table->string('work_desc')->nullable();
            $table->string('client_title')->nullable();
            $table->longText('client_logo')->nullable();
            $table->string('about_us_title')->nullable();
            $table->string('about_us_heading')->nullable();
            $table->text('about_us_desc')->nullable();
            $table->longText('about_us_card')->nullable();
            $table->string('process_title')->nullable();
            $table->string('process_video')->nullable();
            $table->string('process_heading')->nullable();
            $table->string('process_heading2')->nullable();
            $table->longText('process_cards')->nullable();
            $table->string('news_latter_title')->nullable();
            $table->string('news_latter_heading')->nullable();
            $table->string('news_latter_desc')->nullable();
            $table->string('insta_url')->nullable();
            $table->string('insta_name')->nullable();
            $table->string('insta_title')->nullable();
            $table->string('twitter_url')->nullable();
            $table->string('twitter_name')->nullable();
            $table->string('twitter_title')->nullable();
            $table->string('behance_url')->nullable();
            $table->string('behance_name')->nullable();
            $table->string('behance_title')->nullable();
            $table->string('footer_title')->nullable();
            $table->string('footer_email')->nullable();
            $table->string('footer_detail')->nullable();
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
        Schema::dropIfExists('data_lands');
    }
}
