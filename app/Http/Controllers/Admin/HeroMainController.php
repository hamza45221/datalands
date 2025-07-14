<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Mail\ContactMail;
use App\Models\Mainhero;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class HeroMainController extends Controller
{
    public function index()
    {
        $heromain = Mainhero::first();
        return view('admin.heromain',compact('heromain'));
    }

    public function store(Request $request)
    {
        $hero = Mainhero::first() ?? new Mainhero();

        // Basic fields
        $hero->tiitle1 = $request->input('tiitle1');
        $hero->tiitle2 = $request->input('tiitle2');
        $hero->tiitle3 = $request->input('tiitle3');
        $hero->main_heading_1 = $request->input('main_heading_1');
        $hero->main_heading_2 = $request->input('main_heading_2');
        $hero->services_title = $request->input('services_title');
        $hero->services_left_heading_1 = $request->input('services_left_heading_1');
        $hero->services_left_heading_2 = $request->input('services_left_heading_2');
        $hero->work_title = $request->input('work_title');
        $hero->info_title_1 = $request->input('info_title_1');
        $hero->info_title_2 = $request->input('info_title_2');
        $hero->info_title_3 = $request->input('info_title_3');
        $hero->say_hi = $request->input('say_hi');

        $servicesCards = [];

        if ($request->has('services_cards')) {
            foreach ($request->services_cards as $index => $card) {
                $videoPath = $card['old_video'] ?? null;

                // Handle new video file upload
                if ($request->hasFile("services_cards.$index.video")) {
                    $videoFile = $request->file("services_cards.$index.video");
                    $storedVideo = $videoFile->store('videos', 'public');
                    $videoPath = 'storage/' . $storedVideo;
                }

                $servicesCards[] = [
                    'video' => $videoPath,
                    'counter' => $card['counter'] ?? '',
                    'title' => $card['title'] ?? '',
                    'description' => $card['description'] ?? '',
                ];
            }
        }

// Save as array or JSON column
        $hero->services_cards = $servicesCards;
        $workCards = [];

        if ($request->has('work_card')) {
            foreach ($request->work_card as $index => $card) {
                $imagePath = $card['old_image'] ?? null;

                // Handle new image upload
                if ($request->hasFile("work_card.$index.image")) {
                    $imageFile = $request->file("work_card.$index.image");
                    $storedImage = $imageFile->store('images', 'public');
                    $imagePath = 'storage/' . $storedImage;
                }

                // Build the work card entry
                $workCards[] = [
                    'image' => $imagePath,
                    'title' => $card['title'] ?? '',
                    'date' => $card['date'] ?? '',
                    'url' => $card['url'] ?? '',
                ];
            }
        }

// Save to your model (assuming it's JSON casted)
        $hero->work_card = $workCards;
        $links = [];

        if ($request->has('links')) {
            foreach ($request->links as $index => $linkItem) {
                $linkData = [
                    'title' => $linkItem['title'] ?? '',
                    'url' => $linkItem['url'] ?? '',
                ];

                // Handle image1 to image6
                for ($i = 1; $i <= 6; $i++) {
                    $imageKey = "image$i";
                    $oldImageKey = "old_image$i";

                    $imagePath = $linkItem[$oldImageKey] ?? null;

                    // Check if a new image was uploaded
                    if ($request->hasFile("links.$index.$imageKey")) {
                        $uploadedImage = $request->file("links.$index.$imageKey");
                        $storedImage = $uploadedImage->store('images', 'public');
                        $imagePath = 'storage/' . $storedImage;
                    }

                    $linkData[$imageKey] = $imagePath;
                }

                $links[] = $linkData;
            }
        }

// Save to model
        $hero->links = $links;


        $hero->info_links = $request->info_links ?? [];


        // Main image
        if ($request->hasFile('main_image')) {
            $image = $request->file('main_image')->store('uploads', 'public'); // Corrected path
            $hero->main_image = 'storage/'. $image;
        }

        // Main video
        if ($request->hasFile('main_video')) {
            $m_video = $request->file('main_video')->store('videos', 'public');
            $hero->main_video = 'storage/'. $m_video;
        }

        // Save to database
        $hero->save();

        return back()->with('success', 'Hero section saved successfully!');
    }

    public function infoForm(Request $request)
    {
        dd($request->all());

        Mail::to('hj1087546@gmail.com')->send(new ContactMail($request->all()));
        return redirect()->back()->with('success', 'Thank you for contacting us!');
    }


}
