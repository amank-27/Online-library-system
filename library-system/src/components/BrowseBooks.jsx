import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterBooks } from '../redux/bookSlice'; 
import { useParams } from 'react-router-dom'; 
import Search from './Search';  
import Book from './Book';      
import "./style.css";

const BrowseBooks = () => {
  const dispatch = useDispatch();
  const { category } = useParams(); 
  const books = useSelector((state) => state.books.filteredBooks); 
  useEffect(() => {
    if (category) {
      dispatch(filterBooks({ filterTerm: category }));
    } else {
      dispatch(filterBooks({ filterTerm: '' }));
    }
  }, [category, dispatch]);
 return (
    <div className="browsewrapper">
      <h2 className="browsetitle">Browse Books - {category ? category : 'All Books'}</h2>
      <Search />
      <div className="grid">
        {books.length > 0 ? (
          books.map((book) => (
            <Book key={book.id} book={book} />
          ))
        ) : (
          <p>No books found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default BrowseBooks;
