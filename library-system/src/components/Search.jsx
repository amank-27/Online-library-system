import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterBooks } from '../redux/bookSlice'; 
import "./style.css";

const Search = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      alert('Search bar cannot be empty');
      return;
    }
   dispatch(filterBooks({ filterTerm: searchTerm }));
  };
return (
<div className="searchwrapper">
  <input type="text" placeholder="Search books by title or author" value={searchTerm} onChange={handleSearchChange} className="searching"/>
  <button onClick={handleSearch} className="btn1">Search</button>
</div>
  );
};

export default Search;
