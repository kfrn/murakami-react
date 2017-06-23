import React from 'react';
import Book from './Book'
import { isBookinCart } from '../utilities/main'

const BooksPage = ({books, cart, dispatch}) => {
  return (
    <div className="container">
      <h3>Books</h3>
      <div id='books-container' className='row'>
        {books.map((book, i) => {
          return <Book key={i} bookInfo={book} inCart={isBookinCart(book, cart)} dispatch={dispatch} />
        })}
      </div>
    </div>
  );
}

export default BooksPage;
