import React from 'react'
import { UserContext } from '../../context/UserContext'
import Logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

const Header = () => {
  const {userInfo} = React.useContext(UserContext)
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
                  <Link to="/create">Create Post</Link>
                  <Link >Logout</Link>
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
