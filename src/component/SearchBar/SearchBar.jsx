import React from 'react'
import './SearchBar.css'
import { VscSearch } from 'react-icons/vsc';

function SearchBar() {
  return (
    <div className="header-search">
      <VscSearch size={14} className="search-icon"/>
      <input type="text" placeholder="Search apps, games, movies, and more" />
    </div>
  );
}

export default SearchBar;
