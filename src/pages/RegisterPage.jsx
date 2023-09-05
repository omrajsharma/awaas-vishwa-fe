import React from "react";
import { TextField, Button, IconButton, InputAdornment } from "@mui/material";
import alert from "../utility/alert";
import { Link, Navigate } from "react-router-dom";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Tooltip from '@mui/material/Tooltip';

const RegisterPage = () => {
  const [redirect, setRedirect] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);
  const name = React.useRef();
  const phone = React.useRef();
  const email = React.useRef();
  const username = React.useRef();
  const password = React.useRef();

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    const nameVal = name.current.value;
    const phoneVal = Number(phone.current.value);
    const emailVal = email.current.value;
    const usernameVal = username.current.value;
    const passwordVal = password.current.value;

    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/v1/auth/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: nameVal, 
        phone: phoneVal, 
        email: emailVal, 
        username: usernameVal, 
        password: passwordVal
      })
    })
    const data = await response.json();
    if (response.ok) {
      alert('User Registered', 'success')
      setRedirect(true)
    } else {
      alert(data.error, 'error')
    }
  };

  if (redirect) {
    return <Navigate to={'/login'} />
  }

  return (
    <div className="register-page">
      <div className="register-container">
        <div className="register-form">
          <h1>Sign Up</h1>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              id="filled-basic"
              label="Full Name"
              variant="filled"
              inputRef={name}
              required
              autoComplete='true'
            />
            <TextField
              fullWidth
              id="filled-basic"
              label="Phone"
              variant="filled"
              type="number"
              inputRef={phone}
              required
              autoComplete='true'
            />
            <TextField
              fullWidth
              id="filled-basic"
              label="email"
              variant="filled"
              inputRef={email}
              required
              autoComplete='true'
            />
            <TextField
              fullWidth
              id="filled-basic"
              label="User Name"
              variant="filled"
              inputRef={username}
              required
              autoComplete='true'
              InputProps={{
                endAdornment: (
                  <Tooltip placement="top-start" title="First character should be alphabet [A-Za-z] and other characters can be alphabets, numbers or an underscore so, [A-Za-z0-9_]." arrow>
                  <InputAdornment position="end">
                    <InfoOutlinedIcon fontSize="small" />
                  </InputAdornment>
                  </Tooltip>
                ),
              }}
            />
            <TextField
              fullWidth
              id="filled-basic"
              label="password"
              variant="filled"
              type={showPassword ? 'text' : 'password'}
              inputRef={password}
              required
              autoComplete='true'
              InputProps={{
                endAdornment: (
                  <Tooltip placement="top-start" title="Password should have minimum of eight characters, at least one uppercase letter, one lowercase letter, one number and one special character." arrow>
                  <InputAdornment position="end">
                    <IconButton fontSize="small"
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                  </Tooltip>
                ),
              }}
            />
            <Button
              variant="contained"
              sx={{ marginTop: "20px", width: "100%" }}
              type="submit"
            >
              Sign Up
            </Button>
               <div id="login-link">Already have an account?<Link to="/login">
               <div className="login-btn">Login</div>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
