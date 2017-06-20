import { connect } from 'react-redux'

import BooksPage from '../components/BooksPage'

const mapStateToProps = (state) => {
  return {
    books: state.books,
    cart: state.cart
  }
}

export default connect(
  mapStateToProps
)(BooksPage)
