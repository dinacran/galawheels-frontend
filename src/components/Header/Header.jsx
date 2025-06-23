import './Header.css';
import logo from '../../assets/logo.png';


function Header() {
  const handleSearch = (e) => {
    e.preventDefault();
    const query = document.querySelector('input').value;
    console.log(`Searching for ${query}`);
  };

  return (
    <div className="header">
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
    </div>
  );
}

export default Header;

