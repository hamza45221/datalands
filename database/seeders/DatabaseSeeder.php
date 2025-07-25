<?php

namespace Database\Seeders;

use App\Models\DataLandClientImages;
use App\Models\MainHeroPageImage;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();
        $this->call([UserTableSeed::class]);
        $this->call([MainTableSeed::class]);
        $this->call([PopupTableSeed::class]);
        $this->call([MainHeroPageImageSeed::class]);
        $this->call([DataLandTableSeed::class]);
        $this->call([DataLandCrouselImagesSeed::class]);
        $this->call([DataLandClientImagesSeed::class]);
    }
}
