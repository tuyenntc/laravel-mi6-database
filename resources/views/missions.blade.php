@extends('layouts.app')

@section('head')
    @viteReactRefresh
    @vite('resources/js/people-of-interest/people-of-interest.jsx')
@endsection

@section('content')
    <div class="content">
        <div id="react-app"></div>
    </div>
@endsection