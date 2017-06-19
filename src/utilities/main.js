export function getFormattedBookPrice(price) {
  return `$${price}.00`
}

export function getBookInfo(bookID, books) {
  return books.filter(book => book.id === bookID)[0]
}
