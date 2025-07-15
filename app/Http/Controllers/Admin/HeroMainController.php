<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Mail\ContactMail;
use App\Models\Mainhero;
use App\Models\MainHeroPageImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;

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
        $hero->main_name = $request->input('main_name');
        $hero->main_name_url = $request->input('main_name_url');
        $hero->main_desc = $request->input('main_desc');
        $hero->main_heading_1 = $request->input('main_heading_1');
        $hero->strategy = $request->input('strategy');
        $hero->creation = $request->input('creation');
        $hero->production = $request->input('production');
        $hero->production_links = $request->input('production_links');
        $hero->strategy_links = $request->strategy_links ?? [];
        $hero->creation_links = $request->creation_links ?? [];
        $hero->footer_link = $request->footer_link ?? [];


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


        $hero->save();

        return back()->with('success', 'Hero section saved successfully!');
    }
    public function indexImage()
    {
        $images = MainHeroPageImage::latest()->paginate(10);;
        return view('admin.page1-images',compact('images'));
    }


    public function storeImage(Request $request)
    {
        $imageEntry = $request->id ? MainHeroPageImage::findOrFail($request->id) : new MainHeroPageImage();

        if ($request->hasFile('image')) {
            $image = $request->file('image')->store('uploads', ['disk' => 'public']);
            $imageEntry->image = 'storage/'. $image;
        }

        $imageEntry->save();

        return redirect()->back()->with('success', $request->id ? 'Image updated successfully!' : 'Image saved successfully!');
    }

    public function destroyImage($id)
    {
        $image = MainHeroPageImage::findOrFail($id);

        if ($image->image && \Storage::disk('public')->exists($image->image)) {
            \Storage::disk('public')->delete($image->image);
        }

        $image->delete();

        return redirect()->back()->with('success', 'Image deleted successfully!');
    }




}
