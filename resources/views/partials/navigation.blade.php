<div class="navigation">
    <div class="seal">
        <div class="controller">
            <p>&lt;</p>
        </div>
    </div>
    <div class="links">
        <div class="{{ $page == 'welcome' ? 'selected' : '' }}">
            <p><a href="{{ route('welcome') }}">Home</a></p>
        </div>
        <div class="{{ $page == 'people-of-interest' ? 'selected' : '' }}">
            <p><a href="{{ route('people-of-interest') }}">People of Interest</a></p>
        </div>
        <div class="{{ $page == 'missions' ? 'selected' : '' }}">
            <p><a href="{{ route('missions') }}">Missions</a></p>
        </div>
    </div>
</div>