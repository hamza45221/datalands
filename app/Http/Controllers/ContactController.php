<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    public function index()
    {

    }
    public function store(Request  $request)
    {
        $formData = new Contact();
        $formData->email = $request->input('email');
        $formData->save();
    }
}
