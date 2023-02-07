import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import classes from './Login.module.css';
import { UserContext } from "./UserContext";

const Login = () => {
    const navigate = useNavigate();
    const [UserEmail, setUserEmail] = useState('');
    const [user, setUser] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                setUser(response.data);
            } catch (error) {
                console.log('error: ', error);
            }
        }
        fetchData();
    }, [])

    const emailChecker = (event) => {
        event.preventDefault();
        const data = user.find(data => data.email === UserEmail)
        console.log('data: ', data);
        try {
            if (data !== undefined) {
                localStorage.setItem('users', JSON.stringify(data))
                navigate('/Posts');
            } else {
                throw 'Email not valid ';
            }
        } catch (error) {
            error1.innerHTML = error;
        }

    }
    const emailInput = (event) => {
        setUserEmail(event.target.value);
    }

    return (
        <div className={classes.mainAll}>
            <h1>Log In</h1>
            <form onSubmit={emailChecker}>
                <input type="text" placeholder="jane@example.com" className={classes.emailInput} onChange={emailInput} />
                <input type="password" className={classes.passInput} />
                <p id='error1'></p>
                <input type="submit" value='Log in' className={classes.btn} />
            </form>
        </div>
    );

}

export default Login;