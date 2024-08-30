import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {

  return (
    <header className="header">
      <div className="logo">LOGO</div>
      <nav className="nav">
        <Link to="/users">Users</Link>
      </nav>
    </header>
  );
};

export default Header;
