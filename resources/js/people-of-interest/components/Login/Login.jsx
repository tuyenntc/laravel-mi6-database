import React, { useState, useEffect, useContext } from 'react';
import Context from '../../Context';
import { useNavigate } from 'react-router-dom';

export default function Login(props) {

    const { dispatch } = useContext(Context);

    const navigate = useNavigate();

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const handleSubmit = async (event) => {

        event.preventDefault();

        // make the AJAX request
        const response = await fetch('/login', {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            }
        });

        // parse the response as JSON
        const response_data = await response.json();

        // if the response code is not 2xx (success)
        if (Math.floor(response.status / 100) !== 2) {
            switch (response.status) {
                case 422:
                    // handle validation errors here
                    console.log('VALIDATION FAILED:', response_data.errors);
                    break;
                default:
                    console.log('UNKNOWN ERROR', response_data);
                    break;
            }
        } else {
            // indicate to the App that it should refresh user information
            dispatch({
                type: 'user/set',
                payload: false
            })

            // if the response is success
            // redirect after successfully registering
            navigate('/missions');
        }

        // // with axios
        // try {
        //     // make the AJAX request
        //     const response = await axios.post('/login', values);
        //     // get the (already JSON-parsed) response data
        //     const response_data = response.data;
        // } catch (error) {
        //     // if the response code is not 2xx (success)
        //     switch (error.response.status) {
        //         case 422:
        //             // handle validation errors here
        //             console.log('VALIDATION FAILED:', error.response.data.errors);
        //             break;
        //         case 500:
        //             console.log('UNKNOWN ERROR', error.response.data);
        //             break;
        //     }
        // }
    }

    const handleChange = (event) => {
        setValues(previous_values => {
            return ({...previous_values,
                [event.target.name]: event.target.value
            });
        });
    }

    return (
        <form action="/login" method="post" onSubmit={ handleSubmit }>

            <input type="email" name="email" value={ values.email } onChange={ handleChange } />
            <br />
            <br />

            <input type="password" name="password" value={ values.password } onChange={ handleChange } />
            <br />
            <br />

            <button>Login</button>

        </form>
    );
}