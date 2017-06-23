export function addToCart(bookID) {
  return {
    type: 'ADD_TO_CART',
    payload: bookID
  }
}

export function incrementQuantity(bookID) {
  return {
    type: 'INCREMENT_QUANTITY',
    payload: bookID
  }
}

export function removeFromCart(bookID) {
  return {
    type: 'REMOVE_FROM_CART',
    payload: bookID
  }
}
