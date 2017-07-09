import React from 'react';
import PropTypes from 'prop-types';

import { getFormattedBookPrice } from '../utilities/main';
import { getBookInfo } from '../utilities/main';
import CartItem from './CartItem';

const Cart = ({ cart, books, dispatch }) => {
  return (
    <div className="container">
      <h3>Cart</h3>
      <div className="cart">
        {getCartItems(cart, books, dispatch)}
      </div>
      {returnTotal(cart, books)}
    </div>
  );
};

export default Cart;

Cart.propTypes = {
  books: PropTypes.array.isRequired,
  cart: PropTypes.array.isRequired,
  dispatch: PropTypes.func.isRequired
};

function getCartItems(cartContents, books, dispatch) {
  if (cartContents.length === 0) {
    return (
      <div className="empty">
        <h4>No items in cart!</h4>
      </div>
    );
  } else {
    return cartContents.map((cartItem, i) => {
      const bookDetails = getBookInfo(cartItem.bookID, books);
      return (
        <CartItem
          bookDetails={bookDetails}
          cartItem={cartItem}
          key={i}
          dispatch={dispatch}
        />
      );
    });
  }
}

function calculateTotalCost(cartContents, books) {
  return cartContents.reduce((acc, cartItem) => {
    const bookDetails = getBookInfo(cartItem.bookID, books);
    const bookPrice = bookDetails.price * cartItem.quantity
    return acc + bookPrice;
  }, 0)
}

function returnTotal(cart, books) {
  if (cart.length !== 0) {
    const totalCost = calculateTotalCost(cart, books);
    return (
      <h4 className="total">
        Total cost is <strong>{getFormattedBookPrice(totalCost)}</strong>.
      </h4>
    );
  }
}
