import React from 'react';
import { Link } from 'react-router-dom'

import { getFormattedBookPrice } from '../utilities/main'
import { getBookInfo } from '../utilities/main';

const SingleBook = (props) => {
  const books = props.books
  const bookID = parseInt(props.match.params.id, 10)
  const bookDetails = getBookInfo(bookID, books)
  return (
    <div className="container">
      <h3>{bookDetails.title}</h3>
      <div className="single-book">
        <div className="book-info">
          <Link to="#"><img src={bookDetails.cover} alt={`Cover of ${bookDetails.title}`} className="book-cover-image"></img></Link>
          <div className="book-properties">
            <p><span className="emphasis">Year</span> <br/>{bookDetails.year}</p>
            <p><span className="emphasis">Original title (Japanese)</span> <br/>{bookDetails.titleJP}</p>
            <p><span className="emphasis">Original title (Romaji)</span> <br/>{bookDetails.titleRomaji}</p>
          </div>
        </div>
        <div className='book-synopsis'>
          <p className="synopsis">{bookDetails.synopsis}</p>
          <p className="cart-link"><Link to="#" className="add-to-cart"><span className='book-price'>{getFormattedBookPrice(bookDetails.price)}</span> - Add to cart</Link></p>
        </div>
      </div>
    </div>
  );
}

export default SingleBook;
