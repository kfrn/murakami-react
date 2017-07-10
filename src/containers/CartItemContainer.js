import { connect } from 'react-redux';
import CartItem from '../components/CartItem';

export default connect(state => state)(CartItem);
