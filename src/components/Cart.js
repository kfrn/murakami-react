import React from 'react';
import { Link } from 'react-router-dom';

import initialState from '../redux/initialState';
import getFormattedBookPrice from '../utilities/main';

const cartContents = initialState.cart

function getBookInfo(bookID) {
  return initialState.books.filter(book => book.id === bookID)[0]
}

const Cart = () => {
  return (
    <div className="container">
      <h3>Cart</h3>
      <div className='cart'>
        {getCartItems()}
      </div>
      {getTotalCost()}
    </div>
  );
}

export default Cart;

function getCartItems() {
  if (cartContents.length === 0) {
    return(
      <div className='empty'>
        <h4>No items in cart!</h4>
      </div>
    )
  } else {
    return cartContents.map((cartItem, i) => {
      const bookDetails = getBookInfo(cartItem.bookID)
      return(
        <div className='cart-item' key={i}>
          <div className='cart-book-cover'><img src={bookDetails.cover} alt={`Cover of ${bookDetails.title}`}></img></div>
          <div className='cart-book-name'><Link to={`/books/${cartItem.bookID}`}>{bookDetails.title}</Link></div>
          <div className='quantity'>{cartItem.quantity}</div>
          <div className='cart-price'><strong>{getFormattedBookPrice(bookDetails.price)}</strong></div>
          <div className='add-remove'><button className='cart-button'>Add</button><br/><button className='cart-button'>Remove</button></div>
        </div>
      )
    })
  }
}

function getTotalCost() {
  if (cartContents.length !== 0) {
    const costPerBook = cartContents.map(cartItem => {
      const bookDetails = getBookInfo(cartItem.bookID)
      return (bookDetails.price * cartItem.quantity)
    })
    const totalCost = costPerBook.reduce((a, b) => a + b)
    return(
      <h4 className='total'>Total cost is <strong>{getFormattedBookPrice(totalCost)}</strong>.</h4>
    )
  }
}
