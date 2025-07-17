<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\DataLand;
use App\Models\DataLandClientImages;
use App\Models\DataLandCrouselImage;
use App\Models\Mainhero;
use App\Models\MainHeroPageImage;
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
        $hero = DataLand::first();

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



        $existingServices   = $hero->services_list      ?? [];
        $existingAbout = $hero->about_us_card ?? [];
        $aboutFiles    = $request->file('about_us_card', []);

        if ($request->has('about_us_card')) {
            $newAbout = [];
            foreach ($request->input('about_us_card', []) as $i => $card) {
                $imagePath = $existingAbout[$i]['image'] ?? null;

                if (isset($aboutFiles[$i]['image']) && $aboutFiles[$i]['image'] instanceof \Illuminate\Http\UploadedFile) {
                    $imagePath ='storage/'. $aboutFiles[$i]['image']->store('uploads',['disk' => 'public']);
                }

                $newAbout[] = [
                    'name'        => $card['name']        ?? '',
                    'position'    => $card['position']    ?? '',
                    'description' => $card['description'] ?? '',
                    'image'       => $imagePath,
                ];
            }
            $hero->about_us_card = $newAbout;
        }


        $existingCases = $hero->case_studies_cards ?? [];

// 2) grab raw inputs and files
        $inputCases = $request->input('case_studies_cards', []);
        $fileCases  = $request->file('case_studies_cards', []);

// 3) rebuild the array
        $newCases = [];
        foreach ($inputCases as $i => $card) {
            // start with the old video path (if any)
            $videoPath = $existingCases[$i]['video'] ?? null;

            // if the user uploaded a new file for this index, store & overwrite
            if (!empty($fileCases[$i]['video'])) {
                // store returns e.g. "videos/filename.mp4"
                $stored = $fileCases[$i]['video']->store('videos', 'public');
                // Storage::url gives "/storage/videos/filename.mp4"
                $videoPath = Storage::url($stored);
            }

            $newCases[] = [
                'title'       => $card['title']       ?? '',
                'description' => $card['description'] ?? '',
                'url'         => $card['url']         ?? '',
                'video'       => $videoPath,
            ];
        }

// 4) assign back & save
        $hero->case_studies_cards = $newCases;

        if ($request->has('services_list')) {
            $services = [];
            foreach ($request->services_list as $i => $item) {
                // start with the old image path (if any)
                $imagePath = $existingServices[$i]['image'] ?? null;

                // if the user just uploaded a new one, use that instead
                if ($request->hasFile("services_list.$i.image")) {
                    $imagePath = 'storage/'. $request
                        ->file("services_list.$i.image")
                        ->store('services', 'public');
                }

                $services[] = [
                    'count' => $item['count'] ?? 0,
                    'title' => $item['title'] ?? '',
                    'image' => $imagePath,
                ];
            }
            $hero->services_list = $services;
        }


        if ($request->has('process_cards')) {
            $process = [];
            foreach ($request->process_cards as $card) {
                $process[] = [
                    'count'       => $card['count']       ?? 0,
                    'name'        => $card['name']        ?? '',
                    'description' => $card['description'] ?? '',
                ];
            }
            $hero->process_cards = $process;
        }


        if ($request->hasFile('process_video')) {

            $hero->process_video = 'storage/'. $request->file('process_video')->store('videos',  ['disk'=>'public']);

        }

        if ($request->hasFile('main_video')) {
            $hero->main_video = 'storage/'. $request
                ->file('main_video')
                ->store('videos', ['disk'=>'public']);
        }



        $hero->save();

        return back()->with('success', 'DataLand Section saved successfully!');
    }

    public function indexImage()
    {
        $images = DataLandCrouselImage::latest()->paginate(10);;
        return view('admin.dataland-work-images',compact('images'));
    }


    public function storeImage(Request $request)
    {
        $imageEntry = $request->id ? DataLandCrouselImage::findOrFail($request->id) : new DataLandCrouselImage();

        if ($request->hasFile('image')) {
            $image = $request->file('image')->store('uploads', ['disk' => 'public']);
            $imageEntry->image = 'storage/'. $image;
        }

        $imageEntry->save();

        return redirect()->back()->with('success', $request->id ? 'Image updated successfully!' : 'Image saved successfully!');
    }

    public function destroyImage($id)
    {
        $image = DataLandCrouselImage::findOrFail($id);

        if ($image->image && \Storage::disk('public')->exists($image->image)) {
            \Storage::disk('public')->delete($image->image);
        }

        $image->delete();

        return redirect()->back()->with('success', 'Image deleted successfully!');
    }




    public function clientImage()
    {
        $images = DataLandClientImages::latest()->paginate(10);;
        return view('admin.dataland-clients-images',compact('images'));
    }


    public function clientImageStore(Request $request)
    {
        $imageEntry = $request->id ? DataLandClientImages::findOrFail($request->id) : new DataLandClientImages();

        if ($request->hasFile('image')) {
            $image = $request->file('image')->store('uploads', ['disk' => 'public']);
            $imageEntry->image = 'storage/'. $image;
        }

        $imageEntry->save();

        return redirect()->back()->with('success', $request->id ? 'Image updated successfully!' : 'Image saved successfully!');
    }

    public function clientdestroyImage($id)
    {
        $image = DataLandClientImages::findOrFail($id);

        if ($image->image && \Storage::disk('public')->exists($image->image)) {
            \Storage::disk('public')->delete($image->image);
        }

        $image->delete();

        return redirect()->back()->with('success', 'Image deleted successfully!');
    }
}
