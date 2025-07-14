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
        $main->tiitle1 = 'Hello';
        $main->tiitle2 = 'i’m';
        $main->tiitle3 = 'web-designer';
        $main->main_heading_1 = 'Denys';
        $main->main_heading_2 = 'Verholomchuk';
        $main->main_video = 'logo.e0d05da8.mp4';
        $main->main_image = '5.7a0a6a9d.jpg';
        $main->services_title = 'Services';
        $main->services_left_heading_1 = 'How can I';
        $main->services_left_heading_2 = 'assist you?';
        $main->services_cards = [
                [
                    'video'=>'black.35efad0c.mp4',
                    'counter'=>'01',
                    'title'=>'Design',
                    'description'=>'Design services are focused on transforming the essence of
                                            your brand into a visually appealing and intuitively
                                            understandable online presence.',
                ],
                [
                    'video'=>'white.9c4ac3d8.mp4',
                    'counter'=>'02',
                    'title'=>'Development',
                    'description'=>'Through web development, we transform projects into
										functional, interactive websites that deliver exceptional
										performance.',
                ],
                [
                    'video'=>'blue.8af6d089.mp4',
                    'counter'=>'03',
                    'title'=>'Website',
                    'description'=>'Effective web design and development go hand in hand. A
										holistic approach combines innovative design concepts with
										cutting-edge development methods to create websites that
										leave a lasting impact.',
                ],
        ];
        $main->work_title = 'Works';
        $main->work_card = [
            [
              'image'=>'1.71d70ad8.jpg',
              'title'=>'Quantum Body',
              'date'=>'2025',
              'url'=>'https://www.qntmbody.com/',
            ],
            [
                'image'=>'2.5ec41c7d.jpg',
                'title'=>'Tyne',
                'date'=>'2023',
                'url'=>'',
            ],
            [
                'image'=>'3.73641314.jpg',
                'title'=>'Primal Capital',
                'date'=>'2023',
                'url'=>'https://www.primalcapital.io/',
            ],
            [
                'image'=>'4.e11b397f.jpg',
                'title'=>'Sanctions Finder',
                'date'=>'2022',
                'url'=>'https://sanctions-finder.com/',
            ],
        ];
        $main->links = [
            [
                'url'=>'https://dribbble.com/verholomchuk',
                'title'=>'Dribbble',
                'image1'=>'1.940061eb.jpg',
                'image2'=>'2.ee218dc9.jpg',
                'image3'=>'3.21549394.jpg',
                'image4'=>'4.db22d6b8.jpg',
                'image5'=>'5.0edf6cd6.jpg',
                'image6'=>'6.4482b997.jpg',
            ],
            [
                'url'=>'https://www.behance.net/verholomchuk',
                'title'=>'Behance',
                'image1'=>'1.414932c2.jpg',
                'image2'=>'2.445899d3.jpg',
                'image3'=>'3.6b9c0243.jpg',
                'image4'=>'4.68472d3b.jpg',
                'image5'=>'5.6c320a38.jpg',
                'image6'=>'6.816e13ee.jpg',
            ],
            [
                'url'=>'https://www.pinterest.com/denisverholomchuk/',
                'title'=>'Pinterest',
                'image1'=>'1.b71a109f.jpg',
                'image2'=>'2.69339a6a.jpg',
                'image3'=>'3.6f4f5f8a.jpg',
                'image4'=>'4.d0199942.jpg',
                'image5'=>'5.b8523981.jpg',
                'image6'=>'6.bd484797.jpg',
            ],
            [
                'url'=>'https://www.linkedin.com/in/verholomchuk/',
                'title'=>'LinkedIn',
                'image1'=>'1.1ac2c909.jpg',
                'image2'=>'2.cede4845.jpg',
                'image3'=>'3.1e72e716.jpg',
                'image4'=>'4.8102b88a.jpg',
                'image5'=>'5.e5a85a76.jpg',
                'image6'=>'6.4640ebb5.jpg',
            ],
            [
                'url'=>'https://www.youtube.com/@verholomchuk',
                'title'=>'Youtube',
                'image1'=>'1.ed2a9f1f.jpg',
                'image2'=>'2.1473e33e.jpg',
                'image3'=>'3.ac2b0d94.jpg',
                'image4'=>'4.d3dc540e.jpg',
                'image5'=>'5.7bde7b01.jpg',
                'image6'=>'6.e261045c.jpg',
            ],
        ];
        $main->info_title_1= 'let`s start';
        $main->info_title_2= 'creating';
        $main->info_title_3= 'together';
        $main->say_hi= 'say hi';
        $main->info_links = [
            [
                'url'=>'https://dribbble.com/verholomchuk',
                'title'=>'Dribbble',
            ],
            [
                'url'=>'https://www.behance.net/verholomchuk',
                'title'=>'Behance',
            ],
            [
                'url'=>'https://www.linkedin.com/in/verholomchuk/',
                'title'=>'LinkedIn',
            ],
            [
                'url'=>'https://t.me/verholomchuk',
                'title'=>'Telegram',
            ],
            [
                'url'=>'https://www.youtube.com/@verholomchuk',
                'title'=>'Youtube',
            ],
        ];
        $main->save();

    }
}
