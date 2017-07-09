export function getFormattedBookPrice(price) {
  return `$${price.toFixed(2)}`;
}

export function getBookInfo(bookID, books) {
  return books.filter(book => book.id === bookID)[0];
}
