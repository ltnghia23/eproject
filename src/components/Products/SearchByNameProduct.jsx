import React from 'react';
import './fillterCategory.css'

const Search = ({ searchKeyword, handleSearch }) => {
  return (
    <div className='search  pb-3 d-flex justify-content-end align-items-center'>
      <form
        action=""
        className="search"
        
      >
        <span className="icon-large">
          <i className="ri-search-line" />
        </span>
        <input
          type="search"
          placeholder="Search by name products"
         
          value={searchKeyword}
          onChange={handleSearch}
          
        />
        <button type="submit" style={{ borderRadius: 0 }}>
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
