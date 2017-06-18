import React from 'react';
import { Link } from 'react-router-dom'

import initialState from '../redux/initialState'
import getFormattedBookPrice from '../utilities/main'

const BooksPage = (props) => {
  const books = initialState.books

  console.log(props)

  return (
    <div className="container">
      <h3>Books</h3>
      <div id='books-container' className='row'>
        { books.map((book, i) => {
            return (
              <div className='book' key={i}>
                <p><span className='booktitle'>{book.title}</span> <span className='bookyear'>({book.year})</span></p>
                <img src={book.cover} alt={`Cover of ${book.title}`}></img>
                <Link to={`/books/${book.id}`} className="details-link">Details</Link>
                <Link to="#"><strong><span className='book-price'>{getFormattedBookPrice(book.price)}</span> - Add to cart</strong></Link>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default BooksPage;
