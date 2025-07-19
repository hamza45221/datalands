<?php

namespace App\Http\Controllers;

use App\Models\DataLand;
use App\Models\DataLandClientImages;
use App\Models\DataLandCrouselImage;
use App\Models\Mainhero;
use App\Models\MainHeroPageImage;
use Illuminate\Http\Request;

class FrontPagesController extends Controller
{
    public function index()
    {
        $dataland = DataLand::first();
        $crousel_image =  DataLandCrouselImage::all();
        $client_image =  DataLandClientImages::all();
        return view('frontpages.index',compact('crousel_image','dataland','client_image'));
    }
    public function indexen()
    {
        $index_en = Mainhero::first();
        $main_page_img = MainHeroPageImage::all();
        return view('frontpages.index-en',compact('index_en','main_page_img'));
    }
}
