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

Route::get('/people-of-interest', function () {
    $page = 'people-of-interest';
    return view('people-of-interest', compact('page'));
})->name('people-of-interest');
