import React from "react";
import { FiSearch } from "react-icons/fi";
function Searchbar(props) {
  return (
    <div className="search-bar">
      <input placeholder="Search Hospital based on ID or name" name="input-search"/>
      <FiSearch color="#808080"/>
    </div>
  );
}

export default Searchbar;