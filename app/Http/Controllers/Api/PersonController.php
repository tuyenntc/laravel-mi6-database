<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Person;

class PersonController extends Controller
{
    public function index()
    {
        $people = Person::get();

        return $people;
    }

    public function show(Request $request, int $personId)
    {
        $person = Person::with(['image'])->find($personId);

        return $person;
    }
}
