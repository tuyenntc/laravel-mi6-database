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
            <p>
                <a
                    href="#"
                    onclick="reactRedirectCallbackFunction('/people-of-interest'); return false;"
                >
                    People of Interest
                </a>
            </p>
        </div>
        <div
            class="{{ $page == 'missions' ? 'selected' : '' }}"
            onclick="reactRedirectCallbackFunction('/missions'); return false;"
        >
            <p>
                <a href="#">Missions</a>
            </p>
        </div>
    </div>
</div>

<script>
// a function that can be used to redirect React app
let reactRedirectCallbackFunction = null;

const setReactRedirectCallbackFunction = (callbackFunction) => {
    reactRedirectCallbackFunction = callbackFunction;
}
</script>