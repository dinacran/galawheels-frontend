import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './Header.css';
import { useState } from 'react';
import SearchBox from '../SearchBox/SearchBox.jsx';


function Header() {

  return (
    <div className="header">
      <span className="left">
        <Link to="/" className="logo">
          <img src={logo} alt="logo" />
          <h1>galawheels</h1>
        </Link>
      </span>

      <span className="right">
        {/* <div className="search">
          <input onInput={handleSearch} type="text" placeholder="Search" />
          <button onClick={handleSearch}>🔍</button>
        </div> */}
        <SearchBox />
      </span>
    </div>
  );
}

export default Header;

