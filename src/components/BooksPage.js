import React from 'react';
import PropTypes from 'prop-types';

import Book from './Book';

const BooksPage = ({ books, cart, dispatch }) => {
  return (
    <div className="container">
      <h3>Books</h3>
      <div id="books-container" className="row">
        {books.map((book, i) => {
          return (
            <Book
              key={i}
              bookInfo={book}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BooksPage;

BooksPage.propTypes = {
  books: PropTypes.array.isRequired,
  cart: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
};
