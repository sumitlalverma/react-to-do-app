import React, { useState } from "react";
import { useDebounce } from "../../hooks/use-debounce";
import "./search-input.css";

const SearchInput = (props) => {
  const { searchPlaceholder = "Search", onSearch } = props;

  const [searchString, setSearchString] = useState("");

  const handleDebouncing = useDebounce((value) => onSearch(value), 300);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    setSearchString(e.target.value);
    handleDebouncing(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className="search-container">
      <div className="form-outline">
        <input
          className="search-input"
          type="search"
          value={searchString}
          onChange={handleChange}
          placeholder={searchPlaceholder}
        />
        <i class="fa fa-search" aria-hidden="true"></i>
      </div>
    </form>
  );
};

export default SearchInput;
