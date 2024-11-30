import React, { useState } from "react";
import "./SearchBar.css";

function SearchBar({ fetchWeather }) {
  const [input, setInput] = useState("");

  const handleSearch = () => {
    if (input.trim()) {
      fetchWeather(input.trim());
      setInput("");
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter city name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
