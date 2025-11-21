import React from "react";
import "./Cart.css"; 

const SearchBar = ({ searchTerm, setSearchTerm, placeholder }) => {
  return (
    <div className="Search">
      <input
        type="text"
        placeholder={placeholder || "Search..."}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
