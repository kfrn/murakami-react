import React from 'react';
import { Link } from 'react-router-dom'

import initialState from '../redux/initialState'

const BooksPage = () => {
  const books = initialState.books

  return (
    <div className="container">
      <h3>Books</h3>
      <div id='books-container' className='row'>
        { books.map((book, i) => {
            return (
              <div className='book' key={i}>
                <p><span className='booktitle'>{book.title}</span> <span className='bookyear'>({book.year})</span></p>
                <img src={book.cover} alt={`Cover of ${book.title}`}></img>
                <Link to="#">Add to cart</Link>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default BooksPage;
