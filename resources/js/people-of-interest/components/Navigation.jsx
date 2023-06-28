import { Link, useNavigate } from "react-router-dom";

export default function Navigation() {

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

    return (
        <nav>
            <Link to="/people-of-interest">
                <button>P.o.I.</button>
            </Link>
            <Link to="/missions">Missions</Link>
        </nav>
    )
}