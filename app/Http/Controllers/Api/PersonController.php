<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Person;

class PersonController extends Controller
{
    public function index(Request $request)
    {
        $status = $request->input('status');

        if ($status) {
            $people = Person::where('status_id', $status)->get();
        } else {
            $people = Person::get();
        }

        return $people;
    }

    public function show(Request $request, int $personId)
    {
        $person = Person::with(['image'])->find($personId);

        return $person;
    }
}
