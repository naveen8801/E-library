import React, { useState } from 'react';
import Book from '../Book/Book';
import './BookListWrapper.css';

const Book_List = [
  {
    name: 'Book1',
    author: 'Nitin',
    releaseDate: 'Dec 17 2021',
    isbn: 1,
    img: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1212&q=80',
  },
  {
    name: 'Book2',
    author: 'Parveen',
    releaseDate: 'Dec 18 2021',
    isbn: 2,
    img: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1212&q=80',
  },
  {
    name: 'Book3',
    author: 'Gaurav',
    releaseDate: 'Dec 19 2021',
    isbn: 3,
    img: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1212&q=80',
  },
  {
    name: 'Book4',
    author: 'Lokesh',
    releaseDate: 'Dec 20 2021',
    isbn: 4,
    img: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1212&q=80',
  },
  {
    name: 'Book5',
    author: 'Neha',
    releaseDate: 'Dec 21 2021',
    isbn: 5,
    img: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1212&q=80',
  },
  {
    name: 'Book6',
    author: 'Jatin',
    releaseDate: 'Dec 17 2021',
    isbn: 6,
    img: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1212&q=80',
  },
];

function BookListWrapper() {
  const [BookList, setBookList] = useState(Book_List);
  const deleteHandler = (isbn) => {
    const new_book_list = BookList.filter((i) => {
      if (i.isbn !== isbn) {
        return i;
      }
    });

    setBookList(new_book_list);
  };
  return (
    <div className="wrapper">
      <h1 className="heading">e-Library</h1>
      <div className="book-conatiner">
        {BookList.map((i) => (
          <Book
            key={i.isbn}
            name={i.name}
            author={i.author}
            date={i.releaseDate}
            isbm={i.isbn}
            img={i.img}
            deleteHandle={() => deleteHandler(i.isbn)}
          />
        ))}
      </div>
    </div>
  );
}

export default BookListWrapper;
