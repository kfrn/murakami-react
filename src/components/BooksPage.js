import React from 'react';
import Book from './Book'

const BooksPage = ({books}) => {
  return (
    <div className="container">
      <h3>Books</h3>
      <div id='books-container' className='row'>
        {books.map((book, i) => <Book key={i} bookInfo={book} />)}
      </div>
    </div>
  );
}

export default BooksPage;
