import React from 'react';
import "./style.css";
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
  return (
    <div className="card">
      <img src={book.cover_image} alt={book.title} className="card-img"/>
      <h4 className="cardmsg">{book.title}</h4>
      <p className='cardmsg'>{book.author}</p>
      <Link to={`/book/${book.id}`}>
        <button className="btn">View Details</button>
      </Link>
    </div>
  );
};

export default Book;
