import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/bookSlice';
import { useNavigate } from 'react-router-dom';  
import "./style.css";

const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const [bookDetails, setBookDetails] = useState({
    title: '',
    author: '',
    publication_year: '',
    genre: '',
    description: '',
    cover_image: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
  if (!bookDetails.title ||
      !bookDetails.author ||
      !bookDetails.publication_year ||
      !bookDetails.genre ||
      !bookDetails.description ||
      !bookDetails.cover_image
    ) {
      alert('Please fill out all fields.');
      return;
    }
   dispatch(addBook(bookDetails));
   navigate('/browse');
  };

  return (
    <div className="addbookwrapper">
      <h2 className="msg">Add New Book</h2>
      <form onSubmit={handleSubmit}>
     <input type="text" name="title" value={bookDetails.title} onChange={handleChange} placeholder="Title" className="searchingadd" />
     <input type="text" name="author" value={bookDetails.author} onChange={handleChange} placeholder="Author" className="searchingadd"/>
     <input type="text" name="publication_year" value={bookDetails.publication_year} onChange={handleChange} placeholder="Publication Year" className="searchingadd"/>
     <input type="text" name="rating" value={bookDetails.ratings} onChange={handleChange} placeholder="Rating" className="searchingadd"/>
     <input type="text" name="genre" value={bookDetails.genre} onChange={handleChange} placeholder="Genre (e.g., Fiction, Sci-Fi)" className="searchingadd"/>
       <textarea name="description" value={bookDetails.description} onChange={handleChange} placeholder="Description" className="searchingadd"/>
     <input type="text" name="cover_image" value={bookDetails.cover_image} onChange={handleChange} placeholder="Cover Image URL" className="searchingadd"/>
       <button type="submit" className="btnadd">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
