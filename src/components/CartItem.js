import React from 'react';
import { Link } from 'react-router-dom';

import { getFormattedBookPrice } from '../utilities/main';

const CartItem = ({bookDetails, cartItem}) => {
  return (
    <div className='cart-item'>
      <div className='cart-book-cover'><img src={bookDetails.cover} alt={`Cover of ${bookDetails.title}`}></img></div>
      <div className='cart-book-name'><Link to={`/books/${cartItem.bookID}`}>{bookDetails.title}</Link></div>
      <div className='quantity'>{cartItem.quantity}</div>
      <div className='cart-price'><strong>{getFormattedBookPrice(bookDetails.price)}</strong></div>
      <div className='add-remove'><button className='cart-button'>Add another</button><br/><button className='cart-button'>Remove</button></div>
    </div>
  );
}

export default CartItem;
