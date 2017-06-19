import { connect } from 'react-redux'

import Cart from '../components/Cart'

const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    books: state.books
  }
}

export default connect(
  mapStateToProps
)(Cart)
