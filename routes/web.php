<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

//Route::get('/', function () {
//    return view('welcome');
//});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');




Route::group(['prefix'=>'admin'], function () {
    Route::get('/dashboard', [App\Http\Controllers\Admin\AdminController::class, 'index'])->name('admin.dashboard');


    Route::group(['prefix' => 'heromain'], function () {
        Route::get('/', [App\Http\Controllers\Admin\HeroMainController::class, 'index'])->name('admin.heromain');
        Route::post('/store', [App\Http\Controllers\Admin\HeroMainController::class, 'store'])->name('admin.heromain.store');
    });
});
