import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './Header.css';


function Header() {
  const handleSearch = (e) => {
    e.preventDefault();
    const query = document.querySelector('input').value;
    console.log(`Searching for ${query}`);
  };

  return (
    <Link to="/" className="header">
      <span className="left">
        <span className="logo">
          <img src={logo} alt="logo" />
          <h1>galawheels</h1>
        </span>
      </span>
      <span className="right">
        <div className="search">
          <input type="text" placeholder="Search" />
          <button onClick={handleSearch}>🔍</button>
        </div>
      </span>
    </Link>
  );
}

export default Header;

