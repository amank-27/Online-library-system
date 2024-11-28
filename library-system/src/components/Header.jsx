import React from 'react';
import { Link } from 'react-router-dom';
import "./style.css";

const Header = () => {
  return (
    <header className="headerr">
      <div className="container">
        <h1 className="msg">Welcome Bibliophiles To Online Library!!</h1>
        <nav>
          <Link to="/" className="homes m-4">Home</Link> 
          <Link to="/add" className="homes m-4">AddBook</Link>
          <Link to="/browse" className="homes m-4">BrowseBooks</Link> {/* Added link */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
