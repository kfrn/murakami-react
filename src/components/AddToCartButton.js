import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { addToCart } from '../actions/actionCreators';

const AddToCartButton = ({ bookID, cart, dispatch }) => {
  const inCart = cart.some(cartItem => cartItem.bookID === bookID)

  if (inCart) {
    return <button className="main-page book-in-cart"><Link to='/cart'>In cart</Link></button>;
  } else {
    return (
      <button className="main-page" onClick={() => dispatch(addToCart(bookID))}>
        Add to cart
      </button>
    );
  }
};

export default AddToCartButton;

AddToCartButton.propTypes = {
  dispatch: PropTypes.func.isRequired,
  bookID: PropTypes.number.isRequired,
  cart: PropTypes.array.isRequired
};
