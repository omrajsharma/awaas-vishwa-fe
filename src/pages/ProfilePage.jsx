import React, { useEffect, useState } from 'react'
import { UserContext } from '../context/UserContext'
import LoginPage from '../pages/LoginPage'
import LogoutIcon from '@mui/icons-material/Logout'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Switch } from '@mui/material'

const ProfilePage = () => {
  const {userInfo, setUserInfo} = React.useContext(UserContext)
  return (
    <div className='profile'>{userInfo ? <Profile /> : <LoginPage />}</div>
  )
}

const Profile = () => {
  const [toggleAdList, setToggleAdList] = useState(false);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}/api/v1/profile-setting`, {
      credentials: 'include'
    })
  }, []);

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-img">
          B
        </div>
        <div className="profile-name">Omraj Sharma</div>
        <div className="profile-email">omraj@gmail.com</div>
        <div className="profile-phone">7503047413</div>
      </div>
      <div className="settings">
        <div className="settings-header">Settings</div>
        <div className="settings-item">
          <span>Dark Mode</span>
          <Switch defaultChecked /> 
        </div>
        <div className="settings-item">
          <span>Logout</span>
          <LogoutIcon style={{fontSize: '28px'}} />
        </div>
      </div>
      <div className="profile-ad-listing">
        <div className="profile-ad-header" onClick={() => setToggleAdList(!toggleAdList)}>
          <span>Your Listings</span>
          {toggleAdList ? <KeyboardArrowDownIcon/> : <KeyboardArrowUpIcon/>}
        </div>
        { toggleAdList && (
          <div className="profile-ad-list">
            <ProfileAdItem />
            <ProfileAdItem />
            <ProfileAdItem />
            <ProfileAdItem />
            <ProfileAdItem />
            <ProfileAdItem />
          </div>
        )}
      </div>
    </div>
  )
}

const ProfileAdItem = ({}) => {
  return (
    <div className="profile-ad-item">
      <div className="profile-ad-item-left">
        <div className="profile-ad-item-img">
          <img src="https://firebasestorage.googleapis.com/v0/b/awaas-vishwa.appspot.com/o/ad-imgs%2Fbd459311-681a-4e50-814f-096ecbc223f8.jpg?alt=media&token=3b73f328-2cdb-43c1-9525-9f09035643ed" alt="" />
        </div>
      </div>
      <div className="profile-ad-item-right">
        <div className="profile-ad-item-header">Newly constructed building in Gurgaon</div>
        <div className="profile-ad-item-location">Gurgaon, Haryana, NCR</div>
        <div className="profile-ad-item-price-type">
          <div className="profile-ad-item-type">SELL</div>
          <div className="profile-ad-item-price">1,80,00,000 /- </div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
