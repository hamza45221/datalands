<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DataLand extends Model
{
    use HasFactory;



    protected $guarded = [];

    protected $casts = [
        'case_studies_cards'=>'array',
        'services_list'=>'array',
        'client_logo'=>'array',
        'about_us_card'=>'array',
        'process_cards'=>'array',
    ];
}
