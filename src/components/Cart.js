import React from 'react';

import { getFormattedBookPrice } from '../utilities/main';
import { getBookInfo } from '../utilities/main';
import CartItem from './CartItem'

const Cart = (props) => {
  return (
    <div className="container">
      <h3>Cart</h3>
      <div className='cart'>
        {getCartItems(props.cart, props.books)}
      </div>
      {getTotalCost(props.cart, props.books)}
    </div>
  );
}

export default Cart;

function getCartItems(cartContents, books) {
  if (cartContents.length === 0) {
    return(
      <div className='empty'>
        <h4>No items in cart!</h4>
      </div>
    )
  } else {
    return cartContents.map((cartItem, i) => {
      const bookDetails = getBookInfo(cartItem.bookID, books)
      return(
        <CartItem bookDetails={bookDetails} cartItem={cartItem} key={i}/>
      )
    })
  }
}

function getTotalCost(cartContents, books) {
  if (cartContents.length !== 0) {
    const costPerBook = cartContents.map(cartItem => {
      const bookDetails = getBookInfo(cartItem.bookID, books)
      return (bookDetails.price * cartItem.quantity)
    })
    const totalCost = costPerBook.reduce((a, b) => a + b)
    return(
      <h4 className='total'>Total cost is <strong>{getFormattedBookPrice(totalCost)}</strong>.</h4>
    )
  }
}
