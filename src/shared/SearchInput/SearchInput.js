import "./SearchInput.css";

import React from "react";

function SearchInput({ placeholder, ...props }) {
  return (
    <div className="search-input">
      <input type="text" placeholder={placeholder} {...props} />
    </div>
  );
}

export default SearchInput;
