<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mainhero extends Model
{
    use HasFactory;


    protected $guarded = [];

    protected $casts = [
        'services_cards'=>'array',
        'work_card'=>'array',
        'links'=>'array',
        'info_links'=>'array',
    ];
}
