<?php

namespace Database\Seeders;

use App\Models\DataLandClientImages;
use Illuminate\Database\Seeder;


class DataLandClientImagesSeed extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $image = new DataLandClientImages();
        $image->image = 'dataland/images/adobe-svgrepo-com.svg';
        $image->save();

        $image = new DataLandClientImages();
        $image->image = 'dataland/images/asana-svgrepo-com.svg';
        $image->save();

        $image = new DataLandClientImages();
        $image->image = 'dataland/images/google-178-svgrepo-com.svg';
        $image->save();

        $image = new DataLandClientImages();
        $image->image = 'dataland/images/microsoft-svgrepo-com.svg';
        $image->save();

        $image = new DataLandClientImages();
        $image->image = 'dataland/images/nike-4-logo-svgrepo-com.svg';
        $image->save();

        $image = new DataLandClientImages();
        $image->image = 'dataland/images/shopify-svgrepo-com.svg';
        $image->save();

        $image = new DataLandClientImages();
        $image->image = 'dataland/images/nike-4-logo-svgrepo-com.svg';
        $image->save();
    }
}
