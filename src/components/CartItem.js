import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { incrementQuantity, decrementQuantity, removeFromCart } from '../actions/actionCreators';
import { getBookInfo, getFormattedBookPrice } from '../utilities/main';

const CartItem = ({ books, cartItem, dispatch }) => {
  const bookDetails = getBookInfo(cartItem.bookID, books);
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
        {cartItem.quantity > 1 &&
          <div>
            <button
              className="cart-button"
              onClick={() => dispatch(decrementQuantity(bookDetails.id))}
              >
              Decrement count
            </button>
            <br />
          </div>
        }
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
