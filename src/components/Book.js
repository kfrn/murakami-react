import React from 'react';
import { Link } from 'react-router-dom'

import CartStatus from './CartStatus'
import { getFormattedBookPrice } from '../utilities/main';

const Book = ({bookInfo, inCart}) => {
  return (
    <div className='book'>
      <p><span className='booktitle'>{bookInfo.title}</span> <span className='bookyear'>({bookInfo.year})</span></p>
      <img src={bookInfo.cover} alt={`Cover of ${bookInfo.title}`}></img>
      <Link to={`/books/${bookInfo.id}`} className="details-link">Details</Link>
      <strong><span className='book-price'>{getFormattedBookPrice(bookInfo.price)}</span> - <CartStatus inCart={inCart} page='mainPage'/></strong>
    </div>
  );
}

export default Book
