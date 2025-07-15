<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mainhero extends Model
{
    use HasFactory;


    protected $guarded = [];

    protected $casts = [
        'strategy_links'=>'array',
        'creation_links'=>'array',
        'row_only_images'=>'array',
        'footer_link'=>'array',
    ];
}
