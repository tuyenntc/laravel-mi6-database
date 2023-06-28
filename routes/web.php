<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    $page = 'welcome';
    return view('welcome', compact('page'));
})->name('welcome');






// Route::get('/people-of-interest', function () {
//     $page = 'people-of-interest';
//     return view('people-of-interest', compact('page'));
// })->name('people-of-interest');

// Route::get('/missions', function () {
//     $page = 'missions';
//     return view('missions', compact('page'));
// })->name('missions');



// keep this the last route definition in this file:
// for ANY URL display the view people-of-interest.blade.php
Route::view('/{path?}', 'people-of-interest', ['page' => 'people-of-interest'])->where('path', '.*');