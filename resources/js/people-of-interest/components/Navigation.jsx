import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import Context from "../Context";

export default function Navigation() {

    const { context: { user }, dispatch } = useContext(Context);

    let navigate = useNavigate();

    // setReactRedirectCallbackFunction is a function that was defined outside of the React app
    // in our server-rendered code and allows the React app to give to the "outside" a function
    // for remotely controlling the router navigation
    setReactRedirectCallbackFunction(
        // navigating function
        // gets a URL, navigates to the URL using react router's navigate function
        (url) => {
            navigate(url);
        }
    )

    const logout = async (ev) => {
        await fetch('/logout', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            }
        })

        dispatch({
            type: 'user/set',
            payload: false
        })
    }

    return (
        <nav>
            <Link to="/people-of-interest">
                <button>P.o.I.</button>
            </Link>
            <Link to="/missions">
                <button>Missions</button>
            </Link>

            {
                user
                    ? <button onClick={ logout }>Log out</button>
                    : ''
            }
        </nav>
    )
}