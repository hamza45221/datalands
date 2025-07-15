<?php

namespace Database\Seeders;

use App\Models\Mainhero;
use Illuminate\Database\Seeder;

class MainTableSeed extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $main = new Mainhero();
        $main->main_name = 'VERTICAL';
        $main->main_name_url = '';
        $main->main_desc = 'PROVIDES MARKETING AND COMMUNICATION SUPPORT. ITS MISSION IS TO CREATE AND DEPLOY TARGETED ACTIONS USING AN AGILE METHODOLOGY, IN CLOSE PROXIMITY TO ITS CLIENTS. THE AGENCY CAN INTERVENE AT ANY STAGE OF A PROJECT VIA ITS 3 DEPARTMENTS: STRATEGY, CREATIVE DIRECTION AND PRODUCTION.';
        $main->main_heading_1 = 'Denys';

        $main->strategy = 'STRATEGY';
        $main->strategy_links = [
            [
                'url'=>'',
                'name'=>'IDENTITY AUDIT',
            ],
            [
                'url'=>'',
                'name'=>'BRAND POSITIONING',
            ],
            [
                'url'=>'',
                'name'=>'BRAND PLATFORM',
            ],
            [
                'url'=>'',
                'name'=>'TONE OF VOICE',
            ],
            [
                'url'=>'',
                'name'=>'STORY TELLING',
            ],
            [
                'url'=>'',
                'name'=>'ACTION PLAN',
            ],
        ];

        $main->creation = 'CREATION';
        $main->creation_links = [
            [
                'url'=>'',
                'name'=>'CREATIVE DIRECTION',
            ],
            [
                'url'=>'',
                'name'=>'COPYWRITING',
            ],
            [
                'url'=>'',
                'name'=>'NAMING & BRANDING',
            ],
            [
                'url'=>'',
                'name'=>'PRINT DESIGN',
            ],
            [
                'url'=>'',
                'name'=>'DIGITAL DESIGN',
            ],
            [
                'url'=>'',
                'name'=>'E-COMMERCE DESIGN',
            ],
        ];


        $main->production = 'PRODUCTION';
        $main->production_links = '
        <ul>
                    <li><strong>DIGITAL:</strong> HTML, CMS, LOW CARBON <br>SOLUTIONS</li>
                    <li><strong>VIDEO:</strong> CAPTATION, <br>EDITING, MOTION DESIGN, </li>
                    <li><strong>PHOTO:</strong> PRODUCTION <br>TEAMS SET UP, <br>RETOUCHING, 3D </li>
                    <li><strong>RADIO:</strong> VOICE CASTING, <br>RECORDING, MIXING </li>
                    <li><strong>PRINTING:</strong> ALL <br>TYPES (PREMIUM, <br>ADVERTISING, <br>LARGE VOLUMES)</li>
                </ul>
        ';

        $main->row_only_images =[
            'image1'=>'assets/img/Logos/1-Alliance.svg',
            'image2'=>'assets/img/Logos/2-Nike.svg',
            'image3'=>'assets/img/Logos/3-Showroom-Group.svg',
            'image4'=>'assets/img/Logos/4-Endenred.svg',
            'image5'=>'assets/img/Logos/5-PUIG.svg',
            'image6'=>'assets/img/Logos/6-HEV.svg',
            'image7'=>'assets/img/Logos/7-Nemours.svg',
            'image8'=>'assets/img/Logos/8-LVMH.svg',
            'image9'=>'assets/img/Logos/9-ADM.svg',
            'image10'=>'assets/img/Logos/10-Gas.svg',
            'image11'=>'assets/img/Logos/11-Arche.svg',
        ];

        $main->footer_link = [
            [
                'url'=>'tel:+33 (0)1 55 28 59 81',
                'heading'=>'33 RUE SAINT AMBROISE, 75011 PARIS',
                'url_name'=>'+33 (0)1 55 28 59 81',
            ],
            [
                'url'=>'mailto:RECRUTEMENT@VERTICALPARIS.COM',
                'heading'=>'JOBS - INTERNSHIPS:',
                'url_name'=>'RECRUTEMENT@VERTICALPARIS.COM',
            ],
            [
                'url'=>'mailto:CONTACT@VERTICALPARIS.COM',
                'heading'=>'GENERAL INFORMATION - NEW BUSINESS:',
                'url_name'=>'CONTACT@VERTICALPARIS.COM',
            ],
            [
                'url'=>'mention-legales-FR-24.pdf',
                'heading'=>'',
                'url_name'=>'LEGAL NOTICES',
            ],
            [
                'url'=>'',
                'heading'=>'',
                'url_name'=>'FR',
            ],
        ];

        $main->save();

    }
}
