import React from 'react';
import './Book.css';
import del_btn from './../../assets/trash-2.svg';

function Book({ name, author, isbm, date, img, deleteHandle }) {
  return (
    <div className="book">
      <div className="img-wrraper">
        <img
          style={{ width: '100%', height1: '100px' }}
          src={img}
          alt="book-img"
        />
      </div>
      <h2 className="book-name">{name}</h2>
      <div className="book-details-div">
        <h5 className="author-name">{author}</h5>
        <h5 className="book-date">{date}</h5>
      </div>
      <div className="delete-btn-warpper">
        <img onClick={deleteHandle} src={del_btn} alt="delete-btn" />
      </div>
    </div>
  );
}

export default Book;
