<?php

namespace Database\Seeders;

use App\Models\DataLand;
use Illuminate\Database\Seeder;

class DataLandTableSeed extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $index_dataland = new DataLand();
        $index_dataland->main_heading ='Datalands';
        $index_dataland->main_video='dataland/assets/XukcdTdQbisd1V1ArlbgPNh907E.mp4';
        $index_dataland->main_heading_1 ='Datalands is a visual communication and information design studio.';
        $index_dataland->main_heading_2 ='We produce groundbreaking, thrilling projects—shaping the aesthetics and essence of forward-thinking brands.';
        $index_dataland->case_studies_title ='CASE STUDIES';
        $index_dataland->case_studies_cards =[
            [
                'title'=>'Nike',
                'video'=>'dataland/assets/ciAw2OHkMJnDU8Q9rYV3QPNBUVU.mp4',
                'description'=>'Overhauling how a beloved sportswear company visualizes data.',
            ],
            [
                'title'=>'Microsoft',
                'video'=>'dataland/assets/4Y5bBzDf57vZKjQM2mSMRRYQ8EA.mp4',
                'description'=>'Reimagining how a Fortune 50 brand visually communicates key user moments.',
            ],
            [
                'title'=>'LULULEMON STUDIO',
                'video'=>'dataland/assets/wModeEICIsVzdJMH12KucakUA.mp4',
                'description'=>'comprehensive report and social campaign for CPG climate consciousness.',
            ],[
                'title'=>'Nike',
                'video'=>'dataland/assets/wModeEICIsVzdJMH12KucakUA.mp4',
                'description'=>'Overhauling how a beloved sportswear company visualizes data.',
            ],
        ];
        $index_dataland->work_title ='SOME MORE WORK THAT WE LOVE';
        $index_dataland-> ='';
        $index_dataland-> ='';
        $index_dataland-> ='';
        $index_dataland-> ='';
        $index_dataland-> ='';
        $index_dataland-> ='';
        $index_dataland-> ='';
        $index_dataland-> ='';
        $index_dataland-> ='';
        $index_dataland-> ='';
        $index_dataland-> ='';
        $index_dataland-> ='';
        $index_dataland-> ='';
        $index_dataland-> ='';
        $index_dataland-> ='';
    }
}
