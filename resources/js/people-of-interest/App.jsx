import { People } from "./components/People/People";
import { Missions } from "./components/Missions/Missions";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import Register from "./components/Register/Register";
import { useEffect, useReducer } from "react";
import reducer from "./Context/reducer";
import state from "./Context/state";
import Context from "./Context";
import Login from "./components/Login/Login";

export function App () {

    const [context, dispatch] = useReducer(reducer, state);

    const loadUser = async () => {
        // load data about the logged-in user
        const response = await fetch('/api/user', {
            headers: {
                'Accept': 'application/json'
            }
        });

        if (Math.floor(response.status / 100) !== 2) {
            // not logged in
            dispatch({
                type: 'user/set',
                payload: null
            })
        } else {
            // logged in
            const data = await response.json();

            dispatch({
                type: 'user/set',
                payload: data
            })
        }
    }

    useEffect(() => {
        loadUser()
    }, []);

    // whenever the user in the context changes to false
    // reload user information
    useEffect(() => {
        if (context.user === false) {
            loadUser()
        }
    }, [context.user]);

    return (
        <Context.Provider value={ { context, dispatch } }>
            <BrowserRouter>

                <Navigation />

                <Routes>
                    <Route path="people-of-interest" element={ <People /> } />
                    <Route path="missions" element={ <Missions /> } />
                    <Route path="register" element={ <Register /> } />
                    <Route path="login" element={ <Login /> } />
                </Routes>
            </BrowserRouter>
        </Context.Provider>
    )
}