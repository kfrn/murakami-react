import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { incrementQuantity } from '../actions/actionCreators';
import { removeFromCart } from '../actions/actionCreators';
import { getFormattedBookPrice } from '../utilities/main';

const CartItem = ({ bookDetails, cartItem, dispatch }) => {
  return (
    <div className="cart-item">
      <div className="cart-book-cover">
        <img src={bookDetails.cover} alt={`Cover of ${bookDetails.title}`} />
      </div>
      <div className="cart-book-name">
        <Link to={`/books/${bookDetails.id}`}>{bookDetails.title}</Link>
      </div>
      <div className="quantity">{cartItem.quantity}</div>
      <div className="cart-price">
        <strong>{getFormattedBookPrice(bookDetails.price)}</strong>
      </div>
      <div className="add-remove">
        <button
          className="cart-button"
          onClick={() => dispatch(incrementQuantity(bookDetails.id))}
        >
          Add another
        </button>
        <br />
        <button
          className="cart-button"
          onClick={() => dispatch(removeFromCart(bookDetails.id))}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;

CartItem.propTypes = {
  bookDetails: PropTypes.object.isRequired,
  cartItem: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
};
