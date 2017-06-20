import React from 'react';
import Book from './Book'
import { isBookinCart } from '../utilities/main'

const BooksPage = ({books, cart}) => {
  return (
    <div className="container">
      <h3>Books</h3>
      <div id='books-container' className='row'>
        {books.map((book, i) => {
          return <Book key={i} bookInfo={book} inCart={isBookinCart(book, cart)} />
        })}
      </div>
    </div>
  );
}

export default BooksPage;
