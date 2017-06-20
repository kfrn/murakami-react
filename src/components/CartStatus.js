import React from 'react';
import { Link } from 'react-router-dom'

const CartStatus = ({inCart, page}) => {
  if (inCart) {
    return(<Link to='/cart' className='in-cart'>Already in cart</Link>)
  } else if (page === 'singleBook') {
    return(
      <span className='cart-link add-to-cart'>
        <Link to='#'>Add to cart</Link>
      </span>
    )
  } else {
    return(
      <span className='cart-link'>
        <Link to='#'>Add to cart</Link>
      </span>
    )
  }
}

export default CartStatus;
