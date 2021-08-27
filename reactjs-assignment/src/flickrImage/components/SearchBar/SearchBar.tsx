import { useState } from "react";

export const SearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const handleChange = (event: any) => {
    setSearchText(event.target.value);
  };
  const handleSubmit = (event: any) => {
    event.preventDefault();
  };

  return (
    <>
      <div>
        <label>Search Flickr Photos </label>
        <input
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={handleChange}
        ></input>
        <button type="submit" onClick={handleSubmit}>
          Search
        </button>
      </div>
    </>
  );
};
