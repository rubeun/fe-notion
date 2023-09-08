import { useState } from 'react';

const SearchBox = ({ searchData }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = e => {
    setSearchValue(e.target.value);
    searchData(e.target.value);
  }

  return (
    <div className="search-box">
      <input 
        value={searchValue} 
        id="search-input" 
        type="text" 
        placeholder="Search..." 
        onChange={handleSearch} 
      />
    </div>
  );
}

export default SearchBox;