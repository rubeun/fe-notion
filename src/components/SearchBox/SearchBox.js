import { useState } from 'react';
import styles from './SearchBox.module.css';

const SearchBox = ({ searchData }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = e => {
    setSearchValue(e.target.value);
    searchData(e.target.value);
  }

  return (
    <div className={styles.searchBox}>
      <input 
        value={searchValue} 
        id={styles.searchInput} 
        type="text" 
        placeholder="Search..." 
        onChange={handleSearch}
        aria-label='Search University Names' 
      />
    </div>
  );
}

export default SearchBox;