import React from 'react';
import initialState from '../redux/initialState';
import getFormattedBookPrice from '../utilities/main';
import { Link } from 'react-router-dom';

const cartContents = [
  { bookID: 4, quantity: 1},
  { bookID: 6, quantity: 4},
  { bookID: 8, quantity: 2}
]

function getBookInfo(bookID) {
  return initialState.books.filter(book => book.id === bookID)[0]
}

const Cart = () => {
  return (
    <div className="container">
      <h3>Cart</h3>
      <table className='cart'>
        <tbody>
          {getCartItems()}
        </tbody>
      </table>
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
        <tr key={i}>
          <td className='cart-book-cover'><img src={bookDetails.cover} alt={`Cover of ${bookDetails.title}`}></img></td>
          <td className='cart-book-name'><Link to={`/books/${cartItem.bookID}`}>{bookDetails.title}</Link></td>
          <td className='quantity'>{cartItem.quantity}</td>
          <td className='price'><strong>{getFormattedBookPrice(bookDetails.price)}</strong></td>
          <td className='add-remove'><button className='cart-button'>Add</button><button className='cart-button'>Remove</button></td>
        </tr>
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
