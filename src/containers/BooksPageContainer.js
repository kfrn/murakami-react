import { connect } from 'react-redux'
import BooksPage from '../components/BooksPage'

export default connect(
  state => state
)(BooksPage)
