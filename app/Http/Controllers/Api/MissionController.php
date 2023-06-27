<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Mission;

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
}
