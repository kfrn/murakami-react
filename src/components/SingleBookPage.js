import React from 'react';
import { Link } from 'react-router-dom';
import Parser from 'html-react-parser';

import AddToCartButtonContainer from '../containers/AddToCartButtonContainer';
import { getFormattedBookPrice, getBookInfo } from '../utilities/main';

const SingleBook = props => {
  const books = props.books;
  const bookID = parseInt(props.match.params.id, 10);
  const bookDetails = getBookInfo(bookID, books);
  const synopsisParagraph = React.createElement('p', {className: "synopsis"},
        Parser(bookDetails.synopsis))

  return (
    <div className="container">
      <h3>{bookDetails.title}</h3>
      <div className="single-book">
        <div className="book-info">
          <Link to="#">
            <img
              src={bookDetails.cover}
              alt={`Cover of ${bookDetails.title}`}
              className="book-cover-image"
            />
          </Link>
          <div className="book-properties">
            <p><span className="emphasis">Year</span> {bookDetails.year}</p>
            <p>
              <span className="emphasis">Original title (Japanese)</span> <br />
              {bookDetails.titleJP}
            </p>
            <p>
              <span className="emphasis">Original title (Romaji)</span> <br />
              {bookDetails.titleRomaji}
            </p>
          </div>
        </div>
        <div className="book-synopsis">
          {synopsisParagraph}
          <p className="cart-link">
            <span className="book-price">
              {getFormattedBookPrice(bookDetails.price)}
            </span>
            <AddToCartButtonContainer bookID={bookID}/>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
