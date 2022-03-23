import React, { useEffect, useState } from "react";
import '../styles/SearchBar.css';
const SearchBar = ({ onSearchSubmit, clearData }) => {
  const [term, setTerm] = useState("");
  const [debouncedTerm, setDebouncedTerm] = useState(term);


  useEffect(() => {
    const timer = setTimeout(() => setTerm(debouncedTerm), 500);
    return () => clearTimeout(timer);
  }, [debouncedTerm]);
 
 
  useEffect(() => {
    if (term !== "") {
      onSearchSubmit(term);
    } else {
      clearData();
    }
  }, [term]);
 
  return (
    <div>
      <input
        type="text"
        value={debouncedTerm}
        onChange={(e) => setDebouncedTerm(e.target.value)}
        className="search"
        placeholder="Enter State"
      ></input>

    </div>
  );
};

export default SearchBar;
