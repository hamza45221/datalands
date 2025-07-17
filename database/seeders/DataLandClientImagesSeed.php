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
        $image->image = '';
        $image->save();
    }
}
