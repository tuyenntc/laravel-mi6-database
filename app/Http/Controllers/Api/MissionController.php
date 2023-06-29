<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Mission;
use App\Models\Person;

class MissionController extends Controller
{
    public function index() 
    {
        $missions = Mission::with('people')->get();

        return $missions;
    }

    public function show($mission_id)
    {
        $mission = Mission::with('people')->find($mission_id);

        return $mission;
    }

    public function store(Request $request)
    {
        $mission = Mission::findOrFail($request->input('id'));

        $mission->name = $request->input('name');
        $mission->year = $request->input('year');

        $mission->save();


        return [
            'success_message' => 'Mission successfully saved'
        ];
    }

    public function assignPerson(Request $request)
    {
        $mission_id = $request->input('missionId');

        $mission = Mission::findOrFail($mission_id);

        $person_id = $request->input('personId');

        $person = Person::findOrFail($person_id);

        $mission->people()->attach($person->id);

        return 'success';
    }

    public function unassignPerson(Request $request)
    {
        $mission_id = $request->input('missionId');

        $mission = Mission::findOrFail($mission_id);

        $person_id = $request->input('personId');

        $person = Person::findOrFail($person_id);

        $mission->people()->detach($person->id);

        return 'success';
    }
}
