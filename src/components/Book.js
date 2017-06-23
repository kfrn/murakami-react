import React from 'react';
import { Link } from 'react-router-dom'

import CartStatus from './CartStatus'
import { getFormattedBookPrice } from '../utilities/main';

const Book = ({bookInfo, inCart, dispatch}) => {
  const bookID = bookInfo.id
  return (
    <div className='book'>
      <p><span className='booktitle'>{bookInfo.title}</span> <span className='bookyear'>({bookInfo.year})</span></p>
      <img src={bookInfo.cover} alt={`Cover of ${bookInfo.title}`}></img>
      <Link to={`/books/${bookID}`} className="details-link"><strong>Details</strong></Link>
      <strong>
        <p className='book-price'>{getFormattedBookPrice(bookInfo.price)}</p>
        <CartStatus inCart={inCart} dispatch={dispatch} page='mainPage' bookID={bookID} />
      </strong>
    </div>
  );
}

export default Book
