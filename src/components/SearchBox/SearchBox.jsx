import { useState } from "react";
import { Link } from 'react-router-dom';
import "./SearchBox.css";

function SearchBox() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [filtered, setFiltered] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (data.length === 0) {
      fetch(`http://localhost:8080/searchData`)
        .then(res => res.json())
        .then(setData);
    }
    if (value.trim() !== "") {
      const results = data.filter((item) =>
        item.name.toLowerCase().includes(value.toLowerCase())
      );
      setFiltered(results);
    } else {
      setFiltered([]);
    }
  };

  return (
    <div className="search-container">
      <input type="text" value={query} onChange={handleChange} placeholder="Search vehicle..." className="search-input" tabIndex="-1" />
      {filtered.length > 0 && (
        <div className="search-results">
          {filtered.map((item) => (
            <Link
              to={`/vehicle/${item.id}`}
              key={item.id}
              className="result-item"
              onClick={() => {
                setFiltered([]);
              }}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
export default SearchBox;