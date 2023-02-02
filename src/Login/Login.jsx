import React, { useState, useEffect } from "react";
import axios from "axios";
import classes from './Login.module.css';

const Login = () => {
    const [UserEmail, setUserEmail] = useState('');
    const [user, setUser] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                setUser(response.data);
            } catch (error) {

            }
        }
        fetchData();
    }, [])

    const emailChecker = () => {
        
    }

    const prevForm = (event) => {
        event.preventDefault();
    }
    const emailInput = (event) => {
        setUserEmail(event.target.value);
    }

    return (
        <div className={classes.mainAll}>
            <h1>Log In</h1>
            <form onSubmit={prevForm}>
                <input type="text" placeholder="jane@example.com" className={classes.emailInput} onChange={emailInput} />
                <input type="password" className={classes.passInput} />
                <p id='error1'></p>
                <input type="submit" value='Log in' className={classes.btn} />
            </form>
        </div>
    );

}

export default Login;