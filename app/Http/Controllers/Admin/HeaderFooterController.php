<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\HeaderFooter;
use Illuminate\Http\Request;

class HeaderFooterController extends Controller
{
    public function index()
    {
        // Fetch the first record or null if it doesn't exist
        $header_footer = HeaderFooter::first();

        return view('admin.header-footer', compact('header_footer'));
    }

    public function store(Request $request)
    {

        $header_footer = HeaderFooter::first() ?? new HeaderFooter();

        $header_footer->logo_name = $request->input('logo_name');
        $header_footer->email = $request->input('email');
        $header_footer->email_url = $request->input('email_url');
        $header_footer->say_hi = $request->input('say_hi');
        $header_footer->personal_portfolio = $request->input('personal_portfolio');

//        $header_footer->footer_links = $request->input('footer_links', []);

        $header_footer->save();

        return back()->with('success', 'Header & Footer saved successfully!');
    }
}
