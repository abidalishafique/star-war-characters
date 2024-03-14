import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import './commonStyles.css';

export default function Login(props) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function validateForm(){
    return email.length > 4 && password.length > 4;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!validateForm()) {
        alert('Invalid Data, please try again!');
        return;
    }
    const details = {
        time: new Date(),
        email: email,
        password: password,
    }
    localStorage.setItem('loginDetails', JSON.stringify(details));
    navigate('/');
  }

  return (
    <div className="Login">
        <h1>Login Page</h1>
        <TextField id="outlined-basic" onChange={(e) => {setEmail(e.target.value)}} label="Email" variant="outlined" />
        <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            onChange={(e) => {setPassword(e.target.value)}}
            autoComplete="current-password"
        />
        <div>
            <Button onClick={handleSubmit} variant="outlined">Login</Button>
        </div>
    </div>

  );

}