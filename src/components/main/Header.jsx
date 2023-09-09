import React, { useEffect, useState } from 'react'
import { UserContext } from '../../context/UserContext'
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeTwoToneIcon from '@mui/icons-material/DarkModeTwoTone';
import { useRef } from 'react';

const Header = () => {
  const {userInfo, setUserInfo} = React.useContext(UserContext)
  const [darkMode, setDarkMode] = useState(false);
  const bodyRef = useRef(document.body);

  const logoutUser = () => {
    fetch(`${import.meta.env.VITE_BASE_URL}/api/v1/auth/logout`, {
      credentials: 'include',
      method: 'POST'
    })
    setUserInfo(null);
  }

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  }

  useEffect(()=>{
    if(darkMode){
      bodyRef.current.classList.add('dark-mode');
    } else {
      bodyRef.current.classList.remove('dark-mode');
    }
  }, [darkMode])

  // useEffect(() => {
  //   fetch(`${import.meta.env.VITE_BASE_URL}/api/v1/auth/profile`, {
  //     credentials: 'include'
  //   })
  //   .then(res => res.json())
  //   .then(data => setUserInfo(data.data))
  // }, [])

  return (
    <header>
      <div className="header-container">
        <div className="header-left">
          <Link to="/" className="header-left-brand">
            <img src={Logo} alt="" />
            <h2>Awaas Vishwa</h2>
          </Link>
        </div>
        <div className="header-right">
          <div className='dark-mode-toggle'>
            <button onClick={handleDarkModeToggle}>
            {darkMode? <LightModeOutlinedIcon/> : <DarkModeTwoToneIcon/>}
            </button>
          </div>
          <div className="header-right-login">
            {
              userInfo ? (
                <>
                  <Link to="/create-ad">List My Property</Link>
                  <Link to="/profile">Profile</Link>

                  <Link onClick={logoutUser}>Logout</Link>
                </>
              ) : (
                <>
                  <Link to="/login">login</Link>
                  <Link to="/register">Signup</Link>
                </>
              )
            }
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
