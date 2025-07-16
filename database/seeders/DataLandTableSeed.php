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
                'url'=>'',
                'title'=>'Nike',
                'video'=>'dataland/assets/ciAw2OHkMJnDU8Q9rYV3QPNBUVU.mp4',
                'description'=>'Overhauling how a beloved sportswear company visualizes data.',
            ],
            [
                'url'=>'',
                'title'=>'Microsoft',
                'video'=>'dataland/assets/4Y5bBzDf57vZKjQM2mSMRRYQ8EA.mp4',
                'description'=>'Reimagining how a Fortune 50 brand visually communicates key user moments.',
            ],
            [
                'url'=>'',
                'title'=>'VOLTA',
                'video'=>'dataland/images/XUjfzu0U1LLvmZmDA4MIXQdCsI.jpg',
                'description'=>'comprehensive report and social campaign for CPG climate consciousness.',
            ],
            [
                'url'=>'',
                'title'=>'LULULEMON STUDIO',
                'video'=>'dataland/asseUpload Videots/wModeEICIsVzdJMH12KucakUA.mp4',
                'description'=>'Establishing a visual performance dashboard for an exciting new fitness
                                    hardware.',
            ],
            [
                'url'=>'',
                'title'=>'Dreams Never Die',
                'video'=>'dataland/assets/fEjWHWbygc7GTnmh2JZf9wPXoaQ.mp4',
                'description'=>'A

                                    Web3 music company reinventing artist management',
            ],
            [
                'url'=>'',
                'title'=>'TSZ',
                'video'=>'dataland/assets/3DJLwIVXWem5unFe6M2TRWLFs.mp4',
                'description'=>'Telling the visual story of a revolutionary media company',
            ],

        ];
        $index_dataland->work_title ='SOME MORE WORK THAT WE LOVE';

        $index_dataland->services_title ='Services';
        $index_dataland->services_list =[
            [
                'count'=>'01/',
                'title'=>'Data Visualization',
                'image'=>'dataland/images/mU1KIR3f1ePdMZdxn0CEE8yWJg.png',
            ],
            [
                'count'=>'02/',
                'title'=>'Brand Identity',
                'image'=>'dataland/images/x9shw6BvjLKWZGgl4FfWPd9k.png',
            ],
            [
                'count'=>'03/',
                'title'=>'Reports',
                'image'=>'dataland/images/K6WxuYkE1kZ46E6u3fwMkyll8k.png',
            ],
            [
                'count'=>'04/',
                'title'=>'Deck Design',
                'image'=>'dataland/images/5Cs05meFL4tix3XaBRezHUKaM.png',
            ],
            [
                'count'=>'05/',
                'title'=>'Brand Design Extension',
                'image'=>'dataland/images/GNU2O61fT4vUhmjcJ5G5iyiKiA.png',
            ],
            [
                'count'=>'06/',
                'title'=>'Web Design',
                'image'=>'dataland/images/wXG4bgMePprvfwOj0nVAY6gk0Eo.png',
            ],
            [
                'count'=>'07/',
                'title'=>'Packaging Design',
                'image'=>'dataland/images/qZEqybrqd05xqt1msKF1fZ5ak.png',
            ],
            [
                'count'=>'08/',
                'title'=>'Campaigns',
                'image'=>'dataland/images/e8YRMHheFWh5XoKiNm3V0PXxJk.png',
            ],

        ];
        $index_dataland->work_desc ='We
                            specialize in telling the most brilliant stories for innovative brands. We transform
                            data, but also extend brand design guidelines into new spaces.';
        $index_dataland->client_title ='Clients';
        $index_dataland->client_logo =[

        ];
        $index_dataland->about_us_title ='About us';
        $index_dataland->about_us_heading ='Design obsessed duo.';
        $index_dataland->about_us_desc ='
         <p class="framer-text framer-styles-preset-7kw3ld" data-styles-preset="K40Y92M_4">We
                                know brands, we know design. Our experience spans a combined 30 years.</p>
                            <p class="framer-text framer-styles-preset-7kw3ld" >
                                While
                                we`re a small core duo, our network of collaborators runs deep—if we can`xt build it,
                                we know who can.
                                ';
        $index_dataland->about_us_card =[
            [
                'name'=>'Gavin Potenza',
                'position'=>'Co-Founder / Design',
                'image'=>'dataland/images/UwPwt0Z6qAiByDNOpASxwq0iYas.png?scale-down-to=1024',
                'description'=>'Gavin is a designer who gets a little
                                                    obsessed with the small details. From pixels to full data
                                                    visualization, Gavin has been working in design for 18 years to
                                                    elevate and amplify design that intrigues and illustrates big
                                                    ideas.'
            ],
            [
                'name'=>'Liz Meyer',
                'position'=>'Co-Founder / Brand',
                'image'=>'dataland/images/BYGyzE6llsNcu1Xh4mg8BvFqCnQ.png',
                'description'=>'Liz is a brand designer and illustrator with
                                                    15 years of experience— working with companies from Fortune 500
                                                    to pre-seed startups, Liz revels in the quest to help every
                                                    brand find their visual identity.'
            ],
        ];
        $index_dataland->process_title ='Process';
        $index_dataland->process_video ='dataland/assets/cAfXkww6hB2YYXbFNmeZmMWv80.mp4';
        $index_dataland->process_heading ='Big vibes, small core.';
        $index_dataland->process_heading2 ='A creative studio from <br class="framer-text">the mythical Lands of Data.';

        $index_dataland->process_cards =[
            [
                'count'=>'1',
                'name'=>'PLANNING',
                'description'=>'During the pre-project planning
                                                phase, we take the time to learn all about a prospective client and
                                                to prepare a detailed workback schedule which lays out a complete
                                                roadmap of our project.',
            ],
            [
                'count'=>'2',
                'name'=>'DISCOVERY',
                'description'=>'In this first phase of the project,
                                                we perform a visual audit of the client’s current and past visual
                                                design work, and reflect on how these elements connect. ',
            ],
            [
                'count'=>'3',
                'name'=>'MOODBOARDING',
                'description'=>'Next, we research external visual
                                                design references and pull together a moodboard to better explain
                                                our vision for the project, and to align with stakeholders on style
                                                preferences.',
            ],
            [
                'count'=>'4',
                'name'=>'DESIGN + REFINE',
                'description'=>'After style approval (or
                                                consolidation of several style references), we get to work. In this
                                                phase, we design with your brand in mind, pulling from our years of
                                                experience in design and create work that is fresh, exciting and
                                                brand new. This phase includes 3 distinct sketch options and 2
                                                rounds of revisions.',
            ],
            [
                'count'=>'5',
                'name'=>'HANDOFF',
                'description'=>'Once the final style is approved and
                                                work begins to wrap up, we prepare the final deliverables for
                                                delivery. All files are handed over in the manner as described in
                                                client’s customized SOW, and we also offer a detailed offboarding
                                                document if requested. ',
            ],
            [
                'count'=>'6',
                'name'=>'SUPPORT',
                'description'=>'We are always happy to offer retainer
                                                services, if ongoing design support is needed. Rates for this work
                                                are flexible, and we’re happy to create a plan that works for all
                                                parties, and is highly competitive with the big agencies. ',
            ],

        ];


        $index_dataland->news_latter_title ='Newsletter';
        $index_dataland->news_latter_heading ='Sign up for our extremely infrequent newsletter!';
        $index_dataland->news_latter_desc ='Our newsletter is the best way to keep up with our latest work, and our latest clothing
                        drops. you can expect 3-6 emails per year.';
        $index_dataland->insta_url ='https://instagram.com/datalands';
        $index_dataland->insta_name ='IG';
        $index_dataland->insta_title ='@datalands';

        $index_dataland->twitter_url ='https://twitter.com/wearedatalands';
        $index_dataland->twitter_name ='TW';
        $index_dataland->twitter_title ='@wearedatalands';

        $index_dataland->behance_url ='https://behance.net/datalands';
        $index_dataland->behance_name ='BE';
        $index_dataland->behance_title ='/datalands';

        $index_dataland->footer_title ='New Business';
        $index_dataland->footer_email ='@datalands.co';
        $index_dataland->footer_detail ='©2019-24 Datalands™ | Lands of Data® LLC';
        $index_dataland->save();
    }
}
