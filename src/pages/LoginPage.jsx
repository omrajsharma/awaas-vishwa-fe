import React from "react";
import { UserContext } from "../context/UserContext";
import { TextField, Button } from "@mui/material";
import alert from "../utility/alert";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const {setUserInfo} = React.useContext(UserContext);
  const [redirect, setRedirect] = React.useState(false);
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
    } else {
      alert(data.error, 'error')
    }
  }

  if (redirect) {
    return <Navigate to={'/'} />
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
            />
            <TextField
              fullWidth
              id="filled-basic"
              label="Password"
              variant="filled"
              type="password"
              inputRef={password}
              required
              autoComplete='true'
            />
            <Button
              variant="contained"
              sx={{ marginTop: "20px", width: "100%" }}
              type="submit"
            >
              Login
            </Button>
            <div id="login-link">
           Create a new account? <Link to="/register"><div className="login-btn">SignUp</div></Link>
        </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
