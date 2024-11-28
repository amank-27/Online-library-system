import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetBooks } from '../redux/bookSlice';
import { Link } from 'react-router-dom';  
import Book from './Book';
import "./style.css";

const Home = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.filteredBooks);
  const categories = ['Fiction', 'Non-Fiction', 'Dystopian', 'Sci-Fi', 'Classic', 'Adventure', 'Fantasy',];
  const handleReset = () => {
    dispatch(resetBooks()); 
  };
  return (
  <div className="p-4">
    <button onClick={handleReset} className="btnreset">Reset Categories/back to home</button>
  <div className="genrewrap mb-4">
  <h3 className="category">Categories</h3>
  <div className="genres">
  {categories.map((category) => (
     <Link key={category} to={`/books/${category.toLowerCase()}`} className="btn">
          {category}
     </Link>
          ))}
     
      </div>
      </div>
  <div className="grid">
    {books.map((book) => (
    <Book key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Home;
