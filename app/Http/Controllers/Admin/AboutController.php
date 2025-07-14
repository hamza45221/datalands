<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\About;
use App\Models\Mainhero;
use Illuminate\Http\Request;

class AboutController extends Controller
{
    public function index()
    {
        $about = About::first();
        return view('admin.about',compact('about'));
    }

    public function store(Request $request)
    {

//        dd($request->all());
        $about = About::first() ?? new About();

        // Basic fields
        $about->title1 = $request->input('title1');
        $about->title2 = $request->input('title2');
        $about->sub_title = $request->input('sub_title');
        $about->about_me_description = $request->input('about_me_description');
        $about->about_me_description_2 = $request->input('about_me_description_2');
        $about->award_title_1 = $request->input('award_title_1');
        $about->award_title_2 = $request->input('award_title_2');

        $about->about_me_text1 = $request->input('about_me_text1');
        $about->about_me_text2 = $request->input('about_me_text2');
        $about->about_me_text3 = $request->input('about_me_text3');

        $about->awards_links = $request->awards_links ?? [];


        $textItems = [];
        foreach ($request->input('about_me_text', []) as $item) {
            if (!empty($item['text'])) {
                $textItems[] = ['text' => $item['text']];
            }
        }

        $about->about_me_text = $textItems;
        // Main image
        if ($request->hasFile('about_image')) {
            $image = $request->file('about_image')->store('uploads', ['disk'=>'public']); // Corrected path
            $about->about_image = $image;
        }

//        dd($about->about_image);



        // Save to database
        $about->save();

        return back()->with('success', 'About saved successfully!');
    }
}
