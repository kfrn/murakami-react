import React from 'react';

import { addToCart } from '../actions/actionCreators'

const CartStatus = ({dispatch, inCart, page, bookID}) => {
  if (inCart) {
    return(
      <button className='main-page book-in-cart'>Already in cart</button>
    )
  } else if (page === 'singleBook') {
    return(
      <button className='cart-link add-to-cart' onClick={() => dispatch(addToCart(bookID))}>Add to cart</button>
    )
  } else {
    return(
      <button className='main-page' onClick={() => dispatch(addToCart(bookID))}>Add to cart</button>
    )
  }
}

export default CartStatus;
