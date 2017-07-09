import { connect } from 'react-redux';
import CartStatus from '../components/CartStatus';

export default connect(state => state)(CartStatus);
