export function getFormattedBookPrice(price) {
  return `$${price}.00`;
}

export function getBookInfo(bookID, books) {
  return books.filter(book => book.id === bookID)[0];
}

export function isBookinCart(book, cart) {
  const inCart = cart.map(cartItem => {
    return book.id === cartItem.bookID;
  });
  return inCart.includes(true);
}
