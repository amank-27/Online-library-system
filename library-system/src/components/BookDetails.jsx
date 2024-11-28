import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux'; 
import { useNavigate } from 'react-router-dom'; 
import "./style.css"

const BookDetails = () => {
  const { id } = useParams(); 
  const books = useSelector((state) => state.books.books); 
  const book = books.find((book) => book.id === parseInt(id));
  if (!book) {
    return <div>Book not found</div>;
  }
  return (
    <div className="bookdetailwrapper">
      <h2 className="msg">{book.title}</h2>
      <img src={book.cover_image} alt={book.title} className="book-img" />
      <p className='msg'><strong>Author:</strong> {book.author}</p>
      <p className='msg'><strong>Published:</strong> {book.publication_year}</p>
      <p className='msg'><strong>Rating:</strong> {book.rating}</p>
      <p className='msg'><strong>Genre:</strong> {book.genre}</p>
      <p className='msg'><strong>Description:</strong> {book.description}</p>
      
    </div>
  );
};

export default BookDetails;
