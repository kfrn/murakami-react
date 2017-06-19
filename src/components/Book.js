import React from 'react';
import { Link } from 'react-router-dom'

import { getFormattedBookPrice } from '../utilities/main';

const Book = ({bookInfo}) => {
  return (
    <div className='book'>
      <p><span className='booktitle'>{bookInfo.title}</span> <span className='bookyear'>({bookInfo.year})</span></p>
      <img src={bookInfo.cover} alt={`Cover of ${bookInfo.title}`}></img>
      <Link to={`/books/${bookInfo.id}`} className="details-link">Details</Link>
      <Link to="#"><strong><span className='book-price'>{getFormattedBookPrice(bookInfo.price)}</span> - Add to cart</strong></Link>
    </div>
  );
}

export default Book;
