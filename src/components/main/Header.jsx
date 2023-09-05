import React, { useEffect } from 'react'
import { UserContext } from '../../context/UserContext'
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import {useLocation} from 'react-router-dom'

const Header = () => {
  const location=useLocation();
  const {userInfo, setUserInfo} = React.useContext(UserContext)

  const logoutUser = () => {
    fetch(`${import.meta.env.VITE_BASE_URL}/api/v1/auth/logout`, {
      credentials: 'include',
      method: 'POST'
    })
    setUserInfo(null);
  }

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
                  <Link to="/login" state={(location.pathname=='/login'||location.pathname=='/register')?location.state:location.pathname}>login</Link>
                  <Link to="/register" state={(location.pathname=='/login'||location.pathname=='/register')?location.state:location.pathname}>Signup</Link>
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
