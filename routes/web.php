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

//Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
Route::get('/', [App\Http\Controllers\FrontPagesController::class, 'index'])->name('home');
Route::get('/index-en', [App\Http\Controllers\FrontPagesController::class, 'indexen'])->name('index.en');




Route::group(['prefix'=>'admin'], function () {
    Route::get('/dashboard', [App\Http\Controllers\Admin\AdminController::class, 'index'])->name('admin.dashboard');


    Route::group(['prefix' => 'heromain'], function () {
        Route::get('/', [App\Http\Controllers\Admin\HeroMainController::class, 'index'])->name('admin.heromain');
        Route::post('/store', [App\Http\Controllers\Admin\HeroMainController::class, 'store'])->name('admin.heromain.store');
    });

    Route::group(['prefix' => 'dataland'], function () {
        Route::get('/', [App\Http\Controllers\Admin\DataLandController::class, 'index'])->name('admin.dataland');
        Route::post('/store', [App\Http\Controllers\Admin\DataLandController::class, 'store'])->name('admin.dataland.store');
    });

    Route::group(['prefix' => 'heromain_page_images'], function () {
        Route::get('/', [App\Http\Controllers\Admin\HeroMainController::class, 'indexImage'])->name('admin.heromain.image');
        Route::post('/store', [App\Http\Controllers\Admin\HeroMainController::class, 'storeImage'])->name('admin.heromain.image.store');
        Route::delete('hero-image/delete/{id}', [\App\Http\Controllers\Admin\HeroMainController::class, 'destroyImage'])->name('admin.heromain.image.delete');

    });

    Route::group(['prefix' => 'dataland-work-crousel-images'], function () {
        Route::get('/', [App\Http\Controllers\Admin\DataLandController::class, 'indexImage'])->name('admin.dataland.image');
        Route::post('/store', [App\Http\Controllers\Admin\DataLandController::class, 'storeImage'])->name('admin.dataland.image.store');
        Route::delete('hero-image/delete/{id}', [\App\Http\Controllers\Admin\DataLandController::class, 'destroyImage'])->name('admin.dataland.image.delete');
    });

    Route::group(['prefix' => 'dataland-clients-images'], function () {
        Route::get('/', [App\Http\Controllers\Admin\DataLandController::class, 'clientImage'])->name('admin.dataland.clients.image');
        Route::post('/store', [App\Http\Controllers\Admin\DataLandController::class, 'clientImageStore'])->name('admin.dataland.clients.image.store');
        Route::delete('hero-image/delete/{id}', [\App\Http\Controllers\Admin\DataLandController::class, 'clientdestroyImage'])->name('admin.dataland.clients.image.delete');
    });

//    Route::get('/contact', [App\Http\Controllers\Admin\AdminController::class, 'index'])->name('admin.contact');
    Route::get('/contact-store', [App\Http\Controllers\ContactController::class, 'store'])->name('admin.contact.store');



});
