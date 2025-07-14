<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\About;
use App\Models\Playground;
use Illuminate\Http\Request;

class PlaygroundController extends Controller
{
    public function index()
    {
        $playground = Playground::first();
        return view('admin.playground',compact('playground'));
    }

    public function store(Request $request)
    {
        $playground = Playground::first() ?? new Playground();
        $playground->title1 = $request->input('title1');
        $playground->title2 = $request->input('title2');
        $playground->description = $request->input('description');
        $playground->work_year = $request->input('work_year');
        $images = [];
        $workImages = $request->input('work_images', []);
        foreach ($workImages as $index => $imageData) {
            $filename = $imageData['image'] ?? '';
            if ($request->hasFile("work_images.$index.image_upload")) {
                $file = $request->file("work_images.$index.image_upload");
                $filename ='storage/'.$file->store('uploads', 'public');
            }
            if ($filename) {
                $images[] = ['image' => $filename];
            }
        }
        $playground->update(['work_images' => $images]);
        $playground->save();

        return back()->with('success', 'About saved successfully!');
    }
}
