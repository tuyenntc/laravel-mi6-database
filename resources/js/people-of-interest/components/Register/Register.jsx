import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import Context from '../../Context';

export default function Register(props) {

    const { dispatch } = useContext(Context);

    const [values, setValues] = useState({
        email: '',
        name: '',
        password: '',
        password_confirmation: ''
    })

    const [errors, setErrors] = useState({})

    // get the navigate function (for redirection) for the current
    // React router that surrounds this component
    const navigate = useNavigate();

    const handleSubmit = async (event) => {

        event.preventDefault();

        // reset the errors
        setErrors({});

        // make the AJAX request
        const response = await fetch('/register', {
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
                    setErrors(response_data.errors);
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
        //     const response = await axios.post('/register', values);
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
        <form action="/register" method="post" onSubmit={ handleSubmit }>

            <label htmlFor="">Name:</label><br />
            <input type="text" name="name" value={ values.name } onChange={ handleChange } />
            {
                errors['name']
                    ? errors['name'].map(error => <div className="error">{ error }</div>)
                    : ''
            }
            <br />
            <br />

            <label htmlFor="">Email:</label><br />
            <input type="email" name="email" value={ values.email } onChange={ handleChange } />
            {
                errors['email']
                    ? errors['email'].map(error => <div className="error">{ error }</div>)
                    : ''
            }
            <br />
            <br />

            <label htmlFor="">Password:</label><br />
            <input type="password" name="password" value={ values.password } onChange={ handleChange } />
            {
                errors['password']
                    ? errors['password'].map(error => <div className="error">{ error }</div>)
                    : ''
            }
            <br />
            <br />

            <label htmlFor="">Confirm password:</label><br />
            <input type="password" name="password_confirmation" value={ values.password_confirmation } onChange={ handleChange } />
            {
                errors['password_confirmation']
                    ? errors['password_confirmation'].map(error => <div className="error">{ error }</div>)
                    : ''
            }
            <br />
            <br />

            <button>Register</button>

        </form>
    );
}