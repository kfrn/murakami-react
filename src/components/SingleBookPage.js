import React from 'react';
import { Link } from 'react-router-dom'

import CartStatus from './CartStatus'
import { getFormattedBookPrice, getBookInfo, isBookinCart } from '../utilities/main';

const SingleBook = (props) => {
  const books = props.books
  const bookID = parseInt(props.match.params.id, 10)
  const bookDetails = getBookInfo(bookID, books)
  const inCart = isBookinCart(bookDetails, props.cart);
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
          <p className="cart-link"><span className='book-price'>{getFormattedBookPrice(bookDetails.price)}</span> <CartStatus inCart={inCart} page='singleBook'/></p>
        </div>
      </div>
    </div>
  );
}

export default SingleBook;
