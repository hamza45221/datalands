<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\DataLand;
use App\Models\Mainhero;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class DataLandController extends Controller
{
    public function index()
    {
        $dataland = DataLand::first();
        return view('admin.dataland',compact('dataland'));
    }

    public function store(Request $request)
    {
        $hero = Mainhero::first() ?? new Mainhero();

        // Basic fields
        $hero->main_heading = $request->input('main_name');
        $hero->main_heading_1 = $request->input('main_heading_1');
        $hero->main_heading_2 = $request->input('main_heading_2');
        $hero->case_studies_title = $request->input('case_studies_title');
        $hero->work_title = $request->input('work_title');
        $hero->services_title = $request->input('services_title');
        $hero->work_desc = $request->input('work_desc');
        $hero->client_title = $request->input('client_title');
        $hero->about_us_title = $request->input('about_us_title');
        $hero->about_us_heading = $request->input('about_us_heading');
        $hero->about_us_desc = $request->input('about_us_desc');
        $hero->process_title = $request->input('process_title');
        $hero->about_us_title = $request->input('about_us_title');
        $hero->about_us_title = $request->input('about_us_title');
        $hero->process_heading = $request->input('process_heading');
        $hero->process_heading2 = $request->input('process_heading2');
        $hero->news_latter_title = $request->input('news_latter_title');
        $hero->news_latter_heading = $request->input('news_latter_heading');
        $hero->news_latter_desc = $request->input('news_latter_desc');
        $hero->insta_url = $request->input('insta_url');
        $hero->insta_name = $request->input('insta_name');
        $hero->insta_title = $request->input('insta_title');

        $hero->twitter_url = $request->input('twitter_url');
        $hero->twitter_name = $request->input('twitter_name');
        $hero->twitter_title = $request->input('twitter_title');

        $hero->behance_url = $request->input('behance_url');
        $hero->behance_name = $request->input('behance_name');
        $hero->behance_title = $request->input('behance_title');

        $hero->footer_title = $request->input('footer_title');
        $hero->footer_email = $request->input('footer_email');
        $hero->footer_detail = $request->input('footer_detail');


        $hero->strategy_links = $request->strategy_links ?? [];
        $hero->creation_links = $request->creation_links ?? [];
        $hero->footer_link = $request->footer_link ?? [];

        $video = '';
        if($request->hasFile('process_video')){
            $video = $request->file('process_video')->store('videos',['disk' => 'public']);
        }
        $hero->process_video = $video;


        $main_video = '';
        if($request->hasFile('main_video')){
            $main_video = $request->file('main_video')->store('videos',['disk' => 'public']);
        }
        $hero->main_video = $main_video;

        $rowImages = [];

        if ($request->has('row_only_images')) {
            foreach ($request->row_only_images as $imageData) {
                if (isset($imageData['url']) && $imageData['url'] instanceof \Illuminate\Http\UploadedFile) {
                    $path = $imageData['url']->store('public/');
                    $rowImages[] = [
                        'url' => Storage::url($path),
                    ];
                }
                // If only existing image is present
                elseif (!empty($imageData['existing_url'])) {
                    $rowImages[] = [
                        'url' => $imageData['existing_url'],
                    ];
                }
            }
        }
        if ($request->hasFile('process_video')) {
            $videos = [];
            foreach ($request->file('process_video') as $videoFile) {
                $path = $videoFile['url']->store('dataland/videos', 'public');
                $videos[] = ['url' => 'storage/' . $path];
            }
            $model->process_video = $videos;
        }

        $hero->save();

        return back()->with('success', 'Hero section saved successfully!');
    }
}
