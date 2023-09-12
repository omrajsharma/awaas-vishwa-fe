import React, { useEffect, useState } from 'react'
import { UserContext } from '../context/UserContext'
import LoginPage from '../pages/LoginPage'
import LogoutIcon from '@mui/icons-material/Logout'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Switch } from '@mui/material'
import { Link } from 'react-router-dom';
import { numberToCommaString } from '../utility/numberUtils';

const ProfilePage = () => {
  const {userInfo, setUserInfo} = React.useContext(UserContext)
  return (
    <div className='profile'>{userInfo ? <Profile /> : <LoginPage />}</div>
  )
}

const Profile = () => {
  const [profileDetails, setProfileDetails] = useState(null);
  const [adList, setAdList] = useState(null);
  const [toggleAdList, setToggleAdList] = useState(false);
  const {userInfo, setUserInfo} = React.useContext(UserContext)

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}/api/v1/profile`, {
      credentials: 'include'
    })
    .then(response => response.json())
    .then(data => {
      setProfileDetails(data.data.profileDetail)
      setAdList(data.data.adList)
      console.log(data.data);
    })
  }, []);

  const logoutUser = () => {
    fetch(`${import.meta.env.VITE_BASE_URL}/api/v1/auth/logout`, {
      credentials: 'include',
      method: 'POST'
    })
    setUserInfo(null);
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-img">
          {profileDetails ? profileDetails.name[0] : 'A'}
        </div>
        { profileDetails && (
          <>
            <div className="profile-name">{profileDetails.name}</div>
            <div className="profile-email">{profileDetails.email}</div>
            <div className="profile-phone">{profileDetails.phone}</div>
          </>
        )}
      </div>
      <div className="settings">
        <div className="settings-header">Settings</div>
        <div className="settings-item">
          <span>Logout</span>
          <LogoutIcon style={{fontSize: '28px'}} onClick={logoutUser} />
        </div>
      </div>
      <div className="profile-ad-listing">
        <div className="profile-ad-header" onClick={() => setToggleAdList(!toggleAdList)}>
          <span>Your Listings</span>
          {toggleAdList ? <KeyboardArrowDownIcon/> : <KeyboardArrowUpIcon/>}
        </div>
        { toggleAdList && (adList.length > 0 ? (
          <div className="profile-ad-list">
            {
              adList.map((ad, index) => 
                <ProfileAdItem 
                key={ad.id} 
                adId={ad.id}
                title={ad.title}
                listType={ad.listType}
                location={ad.location}
                price={ad.price}
                img={ad.img}
                />)
            }
          </div>
        ):
        (
          <div className="profile-ad-no-item">
            No Item
          </div>
        ))}
      </div>
    </div>
  )
}

const ProfileAdItem = ({adId, title, listType, location, price, img}) => {
  return (
    <Link to={'/item/' + adId}>
      <div className="profile-ad-item">
        <div className="profile-ad-item-left">
          <div className="profile-ad-item-img">
            <img src={img} alt="" />
          </div>
        </div>
        <div className="profile-ad-item-right">
          <div className="profile-ad-item-header">{title}</div>
          <div className="profile-ad-item-location">{location}</div>
          <div className="profile-ad-item-price-type">
            <div className="profile-ad-item-type">{listType}</div>
            <div className="profile-ad-item-price">{numberToCommaString(price)}/-</div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProfilePage
