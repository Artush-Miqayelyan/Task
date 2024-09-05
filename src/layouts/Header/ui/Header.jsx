import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import { selectCurrentUser } from 'entities/user/userSlice';
import { useSelector } from 'react-redux';
import styles from './header.module.css'

const Header = () => {

  const currentUser = useSelector(selectCurrentUser)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  function handleDropdownOpen() {
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <header className="header">
      <div className="logo">
        <img src="https://st2.depositphotos.com/4035913/6124/i/450/depositphotos_61243831-stock-photo-letter-s-logo.jpg" alt="logo" />
      </div>
      <nav className="nav">
        <Link to="/users">Users</Link>
      </nav>
      <div className={styles.AvatarSection} onClick={handleDropdownOpen}>
        <Avatar alt="Remy Sharp" src={currentUser.Avatar} onClick={setIsDropdownOpen}/>
        {/* {isDropdownOpen ? <DropdownComponent/> : null} */}
      </div>
    </header>
  );
};

export default Header;
