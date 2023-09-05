import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';

const footerNavLinks = [
  {
    link: '/',
    icon: HomeOutlinedIcon,
  },
  {
    link: '/create-ad',
    icon: AddCircleOutlinedIcon,
  },
  {
    link: '/profile',
    icon: PermIdentityOutlinedIcon,
  },
]

const Footer = () => {
  const [activePath, setActivePath] = React.useState(window.location.pathname);
  return (
    <>
      <div className="footer-pad"></div>
      <footer>
        <div className="footer-container">
          {
            footerNavLinks.map(
              (navLink, index) => 
                <FooterNavLink 
                  key={index} 
                  Icon={navLink.icon} 
                  link={navLink.link}
                  activePath={activePath}
                  setActivePath={setActivePath}
                />
            )
          }
        </div>
      </footer>
    </>
  )
}

const FooterNavLink = ({Icon, link, activePath, setActivePath}) => {
  return (
    <div className="footer-nav-link">
      <Link to={link} onClick={() => setActivePath(link)}>
        <Icon style={{fontSize: '35px'}} color={activePath === link ? 'primary' : 'action'} />
      </Link>
    </div>
  )
}

export default Footer
