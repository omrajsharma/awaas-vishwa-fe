import React, { useState } from "react";
import { UserContext } from "../context/UserContext";
import { TextField, Button, IconButton, InputAdornment, Tooltip, } from "@mui/material";
import alert from "../utility/alert";
import { Link, Navigate } from "react-router-dom";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const LoginPage = () => {
  const {setUserInfo} = React.useContext(UserContext);
  const [redirect, setRedirect] = React.useState(false);
  const [showPassword, setShowPassword] = useState(false); // New state for password visibility
  const username = React.useRef();
  const password = React.useRef();

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    const usernameVal = username.current.value;
    const passwordVal = password.current.value;

    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/v1/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: usernameVal, 
        password: passwordVal
      }),
      credentials: 'include',
    })
    const data = await response.json();
    if (response.ok) {
      alert(data.success, 'success')
      setUserInfo(data.data)
      setRedirect(true)
      window.history.go(-1);
    } else {
      alert(data.error, 'error')
    }
  }

  return (
    <div className="register-page">
      <div className="register-container">
        <div className="register-form">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
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
              label="Password"
              variant="filled"
              type={showPassword ? 'text' : 'password'}
              inputRef={password}
              required
              autoComplete="off"
              InputProps={{
                endAdornment: (
                  <Tooltip placement="top-start" title="Password should have minimum of eight characters, at least one uppercase letter, one lowercase letter, one number and one special character." arrow>
                  <InputAdornment position="end">
                    <IconButton fontSize="small"
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                      aria-label="Toggle password visibility" // Label for accessibility
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
              Login
            </Button>
                 <div id="login-link">Create a new account? <Link to="/register">
                 <div className="login-btn">SignUp
                </div>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
